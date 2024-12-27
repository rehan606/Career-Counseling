import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#011b1c] text-white py-8 md:px-8 lg:px-10">
                <div className="container mx-auto px-4">
                    {/* Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About Section */}
                        <div>
                            <h3 className="text-xl font-bold text-[#ff7029] mb-4">About Us</h3>
                            <p className="text-sm text-gray-400">
                                We provide exceptional services tailored to meet your needs. Our team is dedicated to delivering quality and satisfaction in every project.
                            </p>
                        </div>

                        {/* Quick Links Section */}
                        <div>
                            <h3 className="text-xl font-bold text-[#ff7029] mb-4">Quick Links</h3>
                            <ul className="space-y-2 flex flex-col">
                                <Link to="/">
                                    <a href="/" className="text-gray-400 hover:text-[#ff7029]">
                                        Home
                                    </a>
                                </Link>
                                <Link to="/about">
                                    <a  className="text-gray-400 hover:text-[#ff7029]">
                                        About Us
                                    </a>
                                </Link>
                                <Link to="/contact">
                                    <a href="/contact" className="text-gray-400 hover:text-[#ff7029]">
                                        Contact
                                    </a>
                                </Link>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h3 className="text-xl font-bold text-[#ff7029] mb-4">Contact Us</h3>
                            <p className="text-sm text-gray-400">
                                Address: Sandwip, Chittagong, Bangladesh.
                            </p>
                            <p className="text-sm text-gray-400">Phone: +880-1822-1822-07</p>
                            <p className="text-sm text-gray-400">Email: rehanlemu@gmail.com</p>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex justify-center space-x-4 mt-8">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#ff7029]"
                        >
                            <i className="fab fa-facebook-f text-xl"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#ff7029]"
                        >
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#ff7029]"
                        >
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#ff7029]"
                        >
                            <i className="fab fa-linkedin-in text-xl"></i>
                        </a>
                    </div>

                    {/* Footer Bottom */}
                    <div className="mt-8 text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} Career Counseling. All Rights Reserved by <span className='text-[#ff7029]'>REHAN</span>.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;