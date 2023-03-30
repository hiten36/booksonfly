import React, { useEffect } from 'react'
import RegisterModal from '../Modals/RegisterModal';

const Home = () => {
    useEffect(()=>{
        document.title='BOOKS ON FLY';
    });
    return (
        <>
            <RegisterModal />
            <div className="home-main">
                <div className="home1">
                    <div className="home11 text-center">
                        <div className="home111">
                            <h1>BUY & SELL</h1>
                        </div>
                        <div className="home112 flex justify-center">
                            <img src="/images/p2.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="home2">
                    <div className="home21 flex items-center">
                        <div className="home211">
                            <img src="/images/p4.png" alt="" />
                        </div>
                        <div className="home212">
                            <div className="home2121">
                                <div className="text">
                                    <img src="/images/p3.png" alt="" />
                                    <h3>About Us</h3>
                                </div>
                                <p>Booksonfly is an online marketplace for intellectual content including Books, Files, Text, Audio, Video and Premium Stationary.</p>
                                <p>We warmly welcome each and every member to our platform, where they can engage in conversation, purchase intellectual stuff, and also market their own content to other members</p>
                            </div>
                            <div className="home2122 flex">
                                <div className="home2-card relative">
                                    <div className="home2-card1 absolute">

                                    </div>
                                    <div className="home2-card2">
                                        <h4>Mission</h4>
                                        <p>A customer centric company, where members can trade intellectual content conveniently.</p>
                                    </div>
                                </div>
                                <div className="home2-card">
                                    <div className="home2-card1">

                                    </div>
                                    <div className="home2-card2">
                                        <h4>Vission</h4>
                                        <p>To be the platform that appeals all the intellectual around the world to share, learn and grow.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home3">
                    <div className="home31">
                        <div className="home311 flex items-center justify-center">
                            <div className="home3111">
                                <div className="text">
                                    <img src="/images/p3.png" alt="" />
                                    <h3>Our Products</h3>
                                </div>
                            </div>
                            <div className="home3112">
                                <img src="/images/p8.png" alt="" />
                            </div>
                        </div>
                        <div className="home312 flex justify-between">
                            <div onClick={()=>{
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }} className="home3121">
                                <img src="/images/p9.png" alt="" />
                                <div className="text">
                                    <img src="/images/p3.png" alt="" />
                                    <p className='text-center'>New Books</p>
                                </div>
                            </div>
                            <div onClick={()=>{
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }} className="home3121">
                                <img src="/images/p10.png" alt="" />
                                <div className="text">
                                    <img src="/images/p3.png" alt="" />
                                    <p className='text-center'>Old Books</p>
                                </div>
                            </div>
                            <div onClick={()=>{
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }} className="home3121">
                                <img src="/images/p11.png" alt="" />
                                <div className="text">
                                    <img src="/images/p3.png" alt="" />
                                    <p className='text-center'>Digital Books</p>
                                </div>
                            </div>
                            <div onClick={()=>{
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }} className="home3121">
                                <img src="/images/p12.png" alt="" />
                                <div className="text">
                                    <img src="/images/p3.png" alt="" />
                                    <p className='text-center'>Stationary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
