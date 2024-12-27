import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';

const services = [
    {
        title: 'Career Consultation',
        description: 'One-on-one career counseling sessions to help you navigate your career journey.',
        price: '$550',
    },
    {
        title: 'Resume Writing',
        description: 'Professional resume writing services that help you stand out to potential employers.',
        price: '$480',
    },
    {
        title: 'Interview Coaching',
        description: 'Prepare for interviews with mock interviews and feedback from industry experts.',
        price: '$1000',
    },
    {
        title: 'Job Search Assistance',
        description: 'Get assistance with finding job opportunities and applying to them.',
        price: '$560',
    },
    {
        title: 'LinkedIn Profile Optimization',
        description: 'Optimize your LinkedIn profile for better visibility and opportunities.',
        price: '$700',
    },
];

const ServicesList = () => {
    return (
        <div>
            <Helmet>
                <title>My Courses - Career Counseling</title>
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
                <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center px-6">
                    <h1 className="text-2xl lg:text-4xl text-white font-bold text-center">
                        Your <span className="text-[#ff7029]">Career Counseling Services</span>
                    </h1>
                </div>
            </div>

            <div className="bg-gray-100 min-h-screen py-12 px-4">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h1 className=" text-2xl lg:text-4xl font-bold text-gray-800 mb-8">Your Active Services</h1>
                    <p className="text-lg text-gray-600 mb-12">Choose from a variety of professional career services to help you advance your career.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <p className="text-xl font-bold text-orange-500 mb-6">{service.price}</p>
                                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                                    Start Course
                                </button>
                            </div>
                        ))}
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

export default ServicesList;
