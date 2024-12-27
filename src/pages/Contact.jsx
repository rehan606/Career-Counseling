import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact - Career Counseling</title>
                <meta name="description" content="Get in touch with us" />
            </Helmet>
            {/* Navbar */}
            <div className="bg-[#011b1c] py-2 sticky top-0 z-50">
                <Navbar />
            </div>

            {/* Banner */}
            <div
                className="w-full h-48 lg:h-64 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://cdn.pixabay.com/photo/2016/09/19/11/39/flat-1680090_640.png')",
                }}
            >
                <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-2xl lg:text-4xl text-white font-bold text-center">
                        Contact <span className="text-[#ff7029]">Us</span>
                    </h1>
                </div>
            </div>

            {/* Contact Section */}
            <div className="container mx-auto py-10 px-5 md:px-10 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#ff7029]">
                            Get in Touch
                        </h2>
                        <p className="text-gray-700">
                            Have questions or need career guidance? We’re here to help!
                            Reach out to us via the form or using the contact details below.
                        </p>
                        <div>
                            <p className="text-gray-700">
                                <strong>Address:</strong> Sandwip, chittagong, Bangladesh.
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> +880-1822-1822-07
                            </p>
                            <p className="text-gray-700">
                                <strong>Email:</strong> rehanlemu@gmail.com
                            </p>
                        </div>
                        <div className="space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline hover:bg-[#ff7029] bg-[#011b1c] px-4 py-3"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline hover:bg-[#ff7029] bg-[#011b1c] px-4 py-3"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline hover:bg-[#ff7029] bg-[#011b1c] px-4 py-3"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#011b1c] text-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Send Us a Message
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff7029]"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff7029]"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ff7029]"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#ff7029] text-white py-2 px-4 rounded-md hover:bg-[#e66924] transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* FOoter */}
            <div className="bg-[#011b1c]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Contact;
