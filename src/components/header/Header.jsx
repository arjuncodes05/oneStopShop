import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { fetchAllProducts } from '../../store/Slices/productsSlice';
import Category from './Category';
import authService from '../../appwrite/AuthService';
import { login, logout } from '../../store/Slices/authSlice';
import {fetchCartItems } from '../../store/Slices/cartSlice';
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
        }
    }, []);
    
    
    const [isDropdown, setIsDropdown] = useState(false)
    const [userDropdown, setUserDropdown] = useState(false)
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
            className='py-4 px-44 
                        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
                        flex justify-between items-center'>
            <div className=''>
                <h1 className='font-bold text-2xl'>
                    <Link to="/" >eCom</Link>
                </h1>
            </div>

            <nav>
                <ul className='flex lg:gap-4 md:gap-2 items-center'>

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
                                            className='absolute w-[80px] border mt-5 ml-2 top-full left-0 select-none rounded-lg bg-sl z-10 hover:bg-slate-100'
                                            >
                                            <p className='border px-2 py-1 hover:shadow-md flex justify-between'>Sign out</p>
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