import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo/logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { fetchAllProducts } from '../../store/Slices/productsSlice';
import Category from './Category';
import authService from '../../appwrite/AuthService';
import { login, logout } from '../../store/Slices/authSlice';
import {addToCart, fetchCartItems } from '../../store/Slices/cartSlice';
import NavbarOption from './NavbarOption';

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const activeStatus = useSelector(state => state.authentication)

    useEffect(() => {
        dispatch(fetchAllProducts())
        
        const initialState = localStorage.getItem('auth')
        if(initialState){
            const {user} = JSON.parse(initialState)
            dispatch(login(user))
        }      

        // load cart items from appwrite db        
        if(activeStatus.status){
            dispatch(fetchCartItems())
        } else {
            const initialCartItems = JSON.parse(localStorage.getItem('cart'))
            if(initialCartItems){
                initialCartItems.forEach((item) => dispatch(addToCart(item)))
            }
        }
    }, []);
    
    
    const [isDropdown, setIsDropdown] = useState(false)
    const [userDropdown, setUserDropdown] = useState(false)
    const [showHamburger, setShowHamburger] = useState(false)

    const handleDropdown = (e) => {
        e.stopPropagation()
        setUserDropdown(false)
        setIsDropdown(prev => !prev)
    }

    const handleUserDropdown = (e) => {
        e.stopPropagation()
        setIsDropdown(false)
        setUserDropdown(prev => !prev)
    }

    const handleLogout = async () => {
        const res = await authService.signout()
        if(res){
            dispatch(logout())
            localStorage.removeItem("auth");
            localStorage.removeItem('cart')
            navigate('/')
        }
    }

  return (
    <header>
        
        <div
            onClick={() => {
                setIsDropdown(false)
                setUserDropdown(false)
            }}
            className='py-4 2xl:px-44 lg:px-26 md:px-20 sm:px-10 px-6
                        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
                        flex gap-2 justify-between items-center'>

            {/* hamburger  */}
            <div className='relative lg:hidden'>
                <h1
                    onClick={() => setShowHamburger(prev => !prev)}
                    ><i className={`${!showHamburger ? 'fa-bars' : 'fa-angles-down'} fa-solid  text-2xl`}></i></h1>
                { showHamburger && (
                    <div className='absolute select-none bg-slate-100 border-slate-300 border rounded-sm top-14 left-[-15px] sm:w-60 min-w-[170px] z-10'>
                        <ul className='flex flex-col gap-2 text-sm font-semibold md:font-normal md:text-base relative pt-6'>
                            <Link onClick={() => setShowHamburger(false)} to="/" className='border-b border-gray-300 sm:px-4 px-3 pb-2 hover:shadow-md' >Home</Link>
                            <Link onClick={() => setShowHamburger(false)} to="/products/all" className='border-b border-gray-300 sm:px-4 px-3 py-2 hover:shadow-md' >Products</Link>
                            <Link onClick={() => setShowHamburger(false)} to="/contact" className='border-b border-gray-300 sm:px-4 px-3 py-2 hover:shadow-md' >Contact</Link>
                            <Link onClick={() => setShowHamburger(false)} to="/about" className='border-b border-gray-300 sm:px-4 px-3 py-2 hover:shadow-md' >About</Link>
                            <li> 
                                <div
                                    onClick={(e) => handleDropdown(e)}
                                    className='flex justify-between cursor-pointer select-none py-2 sm:px-4 px-3 border-b border-gray-300 hover:shadow-md'>
                                    <h2>Category</h2>
                                    <span><i className="fa-solid fa-chevron-right"></i></span>
                                    {isDropdown && (
                                        <div
                                            className='absolute text-sm font-semibold md:font-normal md:text-base border top-0 left-full ml-1 select-none rounded-sm bg-slate-100 border-slate-300 sm:w-60 w-[170px] z-10'>
                                            {
                                                Category.map((category) => {
                                                    return (
                                                        <NavLink 
                                                            onClick={() => setShowHamburger(false)}
                                                            to={`/category/${category.slug}`}
                                                            key={crypto.randomUUID()} 
                                                            className='border sm:px-4 px-3 py-3 hover:shadow-md flex justify-between'
                                                            ><span>{category.name}</span> 
                                                                <i className="hidden sm:flex fa-solid fa-circle-chevron-right"></i>
                                                        </NavLink>
                                                    )
                                                })
                                            }
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li>
                                <div
                                    onClick={(e) => handleUserDropdown(e)}
                                    className='relative cursor-pointer select-none'>
                                        <h2 className='hover:bg-slate-100 my-2 pb-2 text-start sm:px-4 px-3 rounded-full'>
                                            <i className="fa-solid fa-user pr-2"></i>
                                            { activeStatus.status ?  activeStatus.user.name : 'Login/Signup'}
                                        </h2>
                                        { userDropdown && 
                                            ( activeStatus.status ? (
                                                <div onClick={handleLogout}
                                                    // className='cursor-pointer select-none border-2 border-slate-200 px-2 py-1 rounded-full hover:bg-slate-100'
                                                    className='hover:bg-slate-200 overflow-hidden absolute w-[80px] border mt-6 ml-2 top-5 left-8 select-none bg-sl z-10 bg-slate-100'
                                                    >
                                                    <p className='border px-2 py-1 hover:shadow-md flex justify-between'>Sign out</p>
                                                </div>
                                                ) : ( 
                                                <div className='absolute overflow-hidden gap-2 flex justify-center w-52 mt-3 top-full left-[-10px] select-none z-10'>
                                                    <Link 
                                                        to={`/login`}
                                                        key={crypto.randomUUID()} 
                                                        className='border px-4 py-2 hover:shadow-md flex justify-between hover:bg-slate-100 bg-slate-200'
                                                        ><span>Login</span> 
                                                    </Link>
                                                    <Link 
                                                        to={`/signup`}
                                                        key={crypto.randomUUID()} 
                                                        className='border px-4 py-2 hover:shadow-md flex justify-between hover:bg-slate-100 bg-slate-200'
                                                        ><span>Signup</span> 
                                                    </Link>
                                                </div> )
                                            )
                                        }
                                </div>
                            </li>
                        </ul>
                    </div>
                    )
                }
            </div>

            {/* logo */}
            <div className='lg:w-auto w-full sm:text-center flex items-center justify-center '>
                <h1 className='font-bold text-2xl h-10 flex items-center justify-center'>
                    <Link to="/" ><img src={logo} alt="" className='sm:w-40 w-28' /></Link>
                </h1>
            </div>



            <nav>
                <ul className='hidden lg:flex xl:gap-4 lg:gap-3 items-center'>
                    <NavbarOption to="/" text="Home" />
                    <NavbarOption to="/about" text="About" />
                    <NavbarOption to="/contact" text="Contact" />
                    <NavbarOption to="/products/all" text="Products" />
                    <li> 
                        <div
                            onClick={(e) => handleDropdown(e)}
                            className='flex gap-2 relative items-center cursor-pointer select-none py-2'>
                            <h2>Category</h2>
                            <span><i className="fa-solid fa-angle-down hover:scale-110"></i></span>
                            {isDropdown && (
                                <div
                                    className='h-96 absolute border mt-6 top-full left-0 select-none rounded-lg overflow-y-scroll scrollbar-custom bg-white w-80 z-10'>
                                    {
                                        Category.map((category) => {
                                            return (
                                                <NavLink 
                                                    to={`/category/${category.slug}`}
                                                    key={crypto.randomUUID()} 
                                                    className='border px-4 py-3 hover:shadow-md flex justify-between'
                                                    ><span>{category.name}</span> 
                                                        <i className="fa-solid fa-circle-chevron-right"></i>
                                                </NavLink>
                                            )
                                        })
                                    }
                                </div>
                            )}
                        </div>
                    </li>
                    <li>
                        <div
                            onClick={(e) => handleUserDropdown(e)}
                            className='flex gap-1 relative items-center cursor-pointer select-none border rounded-full lg:px-4 md:px-2 lg:py-2 md:py-1.5 hover:bg-slate-100'>
                                <h2> <i className="fa-solid fa-user pr-2"></i>
                                    { activeStatus.status ? activeStatus.user.name : 'User'}
                                </h2>
                                { userDropdown && 
                                    ( activeStatus.status ? (
                                        <div onClick={handleLogout}
                                            // className='cursor-pointer select-none border-2 border-slate-200 px-2 py-1 rounded-full hover:bg-slate-100'
                                            className='absolute w-[80px] border mt-5 ml-2 top-full left-0 select-none  overflow-hidden rounded-lg bg-sl z-10 hover:bg-slate-100'
                                            >
                                            <p className='border px-2 py-1 hover:shadow-md flex justify-between bg-white'>Sign out</p>
                                        </div>
                                        ) : ( 
                                        <div className=' absolute border mt-6 top-full left-0 select-none rounded-lg bg-white z-10'>
                                            <Link 
                                                to={`/login`}
                                                key={crypto.randomUUID()} 
                                                className='border px-4 py-2 hover:shadow-md flex justify-between hover:bg-slate-100'
                                                ><span>Login</span> 
                                            </Link>
                                            <Link 
                                                to={`/signup`}
                                                key={crypto.randomUUID()} 
                                                className='border px-4 py-2 hover:shadow-md flex justify-between hover:bg-slate-100'
                                                ><span>Signup</span> 
                                            </Link>
                                        </div> )
                                    )
                                }
                        </div>
                    </li>
                </ul>
            </nav>

            <div className='flex gap-4 items-center'>
                {/* cart and wishlist */}
                <div className='flex gap-4 text-xl items-center'>
                    <NavLink to="/wishlist" >
                        <i className="fa-solid fa-heart"></i>
                    </NavLink>
                    <NavLink to="/cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                    </NavLink>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header