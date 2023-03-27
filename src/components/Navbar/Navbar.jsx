import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='topbar'>
                <div className="topbar1 py-2 px-16 flex justify-between">
                    <div className="top1">
                        <p className='font-bold text-white'>Free Shipping</p>
                    </div>
                    <div className="top2 flex items-start">
                        <div className="top21">
                            <p className='text-white'>Forget Password</p>
                        </div>
                        <div className="top21 top22">
                            <p className='text-white'>Register / Login</p>
                        </div>
                        <div className="top21 top22">
                            <p className='text-white'>EN</p>
                        </div>
                        <div className="top21 top22">
                            <p className='text-white'>INR</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="nav1 py-6 px-16 flex justify-between">
                    <div className="nav11 flex items-center">
                        <div className="nav-logo">
                            <img src="/images/p1.png" alt="" />
                        </div>
                        <div className="nav-text">
                            <NavLink to="/">Buy</NavLink>
                            <NavLink to="/">Sell</NavLink>
                            <NavLink to="/">Share</NavLink>
                        </div>
                        <div className="mob-nav hidden">
                            <svg onClick={()=>{
                                document.querySelector('.mob-nav1').classList.toggle('mob-active');
                            }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </div>
                        <div className="mob-nav1 hidden">
                            <NavLink to="/">Buy</NavLink>
                            <NavLink to="/">Sell</NavLink>
                            <NavLink to="/">Share</NavLink>
                        </div>
                    </div>
                    <div className="nav12 flex items-center">
                        <img src="/images/p6.png" alt="" />
                        <img src="/images/p7.png" alt="" />
                        <img src="/images/p5.png" alt="" />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
