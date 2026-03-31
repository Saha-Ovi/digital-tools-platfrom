import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import navImg from '../../assets/products/DigiTools.png'

const Navbar = ({cart}) => {
    return (
        <div className='container mx-auto my-5'>
            <div className="navbar bg-base-100 shadow-sm p-4">
                <div className="navbar-start gap-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li className='text-[#101727] font-semibold'><a>Products</a></li>
                            <li className='text-[#101727] font-semibold'><a>Features</a></li>
                            <li className='text-[#101727] font-semibold'><a>Pricing</a></li>
                            <li className='text-[#101727] font-semibold'><a>Testimonials</a></li>
                            <li className='text-[#101727] font-semibold'><a>FAQ</a></li>
                        </ul>
                    </div>
                        <a href=""><img src={navImg} alt="Navbar Image" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-[#101727] font-semibold'><a>Products</a></li>
                        <li className='text-[#101727] font-semibold'><a>Features</a></li>
                        <li className='text-[#101727] font-semibold'><a>Pricing</a></li>
                        <li className='text-[#101727] font-semibold'><a>Testimonials</a></li>
                        <li className='text-[#101727] font-semibold'><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2 lg:gap-5">
                    <a className='text-xl lg:text-2xl text-[#101727] hover:cursor-pointer' >
                        <span className='flex items-center gap-1'>
                            <IoCartOutline />
                            <p className=' text-red-500'>({cart.length})</p>
                        </span>
                    </a>
                    <a className="btn text-[#101727] rounded-full font-semibold">Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full font-semibold hidden lg:inline-flex">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;