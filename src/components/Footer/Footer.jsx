import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer1 flex justify-between">
                    <div className="foot1 foot0">
                        <h5>Product type</h5>
                        <p onClick={() => {
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }}>Digital Books</p>
                        <p onClick={() => {
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }}>New Books</p>
                        <p onClick={() => {
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }}>Old Books</p>
                        <p onClick={() => {
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }}>Stationary</p>
                    </div>
                    <div className="foot2 foot0">
                        <h5>Quik Links</h5>
                        <p onClick={() => {
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }}>Home</p>
                        <p onClick={() => {
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }}>About Us</p>
                        <p onClick={() => {
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }}>FAQs</p>
                        <p onClick={() => {
                                document.getElementById('registerModal').classList.toggle('hidden');
                            }}>Blogs</p>
                    </div>
                    <div className="foot3 foot0">
                        <h5>Address:</h5>
                        <p>Any Qusetion? let us Know in store at B-nest Books On fly, Bhopal, IN 487551 or call  us on (+91) 939380920</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
