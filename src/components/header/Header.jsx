import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { fetchAllProducts } from '../../store/Slices/productsSlice';

function Header() {
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchAllProducts())
    }, []);

  return (
    <header>
        <div className='py-4 px-44 
                        shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] 
                        flex justify-between items-center'>
            <div className=''>
                <h1 className='font-bold text-2xl'>
                    <Link to="/" >eCom</Link>
                </h1>
            </div>

            <nav>
                <ul className='flex gap-4'>
                    <li> 
                        <NavLink to="/"
                            className={({isActive}) => (
                                `px-2.5 py-1.5 flex items-center text-center rounded-full ${isActive ? 'bg-black text-white' : "" }`
                            )}
                        >Home</NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/about"
                            className={({isActive}) => (
                                 `px-2.5 py-1.5 flex items-center text-center rounded-full ${isActive ? 'bg-black text-white' : "" }`
                            )}
                        >About</NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/contact"
                            className={({isActive}) => (
                                 `px-2.5 py-1.5 flex items-center text-center rounded-full ${isActive ? 'bg-black text-white' : "" }`
                            )}
                        >Contact</NavLink> 
                    </li>
                    <li> 
                        <NavLink to="/products/all"
                            className={({isActive}) => (
                                 `px-2.5 py-1.5 flex items-center text-center rounded-full ${isActive ? 'bg-black text-white' : "" }`
                            )}
                        >Products</NavLink> 
                    </li>
                </ul>
            </nav>

            <div className='flex gap-4 items-center'>
                {/* cart and wishlist */}
                <div className='flex gap-4 text-xl items-center'>
                    <NavLink to="/cart" >
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