import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';
import { FaStar } from 'react-icons/fa';

const ServiceDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const detailsId = parseInt(id);
    const details = data.find(details => details.id === detailsId)

    const { image, serviceName, category, description, fullDescription, price, durationDate, counselorName, rating } = details

    // State for feedbacks
    const [feedbacks, setFeedbacks] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        rating: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.rating && formData.message) {
            setFeedbacks([...feedbacks, formData]);
            setFormData({ name: '', rating: '', message: '' });
        } else {
            // alert('Please fill in all fields.');
            // Sweet Alert 
            Swal.fire({
                title: "Sorry!",
                text: "Please fill in all fields!",
                icon: "error"
            });
        }
    };

    return (
        <div>
            <div>
                <Helmet>
                    <title>Service Details - Career Counseling</title>
                    <meta name="description" content="Service Details" />
                </Helmet>
                {/* Navbar */}
                <div className="bg-[#011b1c]">
                    <Navbar />
                </div>

                {/* Service Details Section */}
                <div className="bg-[#011b1c] text-white">
                    {/* Page Banner */}
                    <div
                        className="w-full h-48 lg:h-64 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://cdn.pixabay.com/photo/2016/09/19/11/39/flat-1680090_640.png')",
                        }}
                    >
                        <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center px-5">
                            <h1 className="text-2xl lg:text-4xl  font-bold text-center">
                                Details of :  <span className="text-[#ff7029]">{serviceName}</span>
                            </h1>
                        </div>
                    </div>

                    {/* Service Details */}
                    <div className="container mx-auto py-10 px-6 md:px-10 lg:px-0 ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
                            {/* Service Image */}
                            <div className='flex mx-auto'>
                                <img
                                    src={image}
                                    alt="Service"
                                    className="w-60 h-60 lg:w-full rounded-lg shadow-lg lg:h-96"
                                />
                            </div>

                            {/* Service Information */}
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold text-[#ff7029]">{serviceName}</h2>
                                <p>
                                    <span className="font-semibold">Description: </span>
                                    {fullDescription}
                                </p>
                                <p>
                                    <span className="font-semibold">Counselor Name: </span>
                                    {counselorName}
                                </p>
                                <p>
                                    <span className="font-semibold">Duration Date: </span>
                                    {durationDate}
                                </p>
                                <p>
                                    <span className="font-semibold">Category: </span>
                                    {category}
                                </p>
                                <p className="text-[#ff7029] font-semibold">Price: $ {price}</p>
                                <p>
                                    <span className="font-semibold">Rating: </span>
                                    {rating}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feedback Section */}
                    <div className="container mx-auto py-10 px-4">
                        <h2 className="text-3xl font-bold text-center text-[#ff7029] mb-6">
                            Feedback
                        </h2>

                        {/* Feedback Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="bg-[#01292a] p-6 rounded-lg shadow-lg space-y-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-2 rounded-md bg-[#011b1c] border border-[#ff7029] text-white"
                                />
                                <input
                                    type="number"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    placeholder="Rating (1-5)"
                                    className="w-full p-2 rounded-md bg-[#011b1c] border border-[#ff7029] text-white"
                                    min="1"
                                    max="5"
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Feedback"
                                className="w-full p-2 rounded-md bg-[#011b1c] border border-[#ff7029] text-white h-32"
                            />
                            <button
                                type="submit"
                                className="bg-[#ff7029] text-white py-2 px-4 rounded-md hover:bg-[#e66526]"
                            >
                                Submit Feedback
                            </button>
                        </form>

                        {/* Display Feedback */}
                        <div className="mt-10 space-y-4">
                            <h3 className="text-2xl font-bold text-center text-[#ff7029]">
                                Feedbacks
                            </h3>
                            {feedbacks.length > 0 ? (
                                feedbacks.map((fb, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#01292a] p-4 rounded-lg shadow-md space-y-2"
                                    >
                                        <p>
                                            <span className="font-semibold text-orange-400">Name: </span>
                                            {fb.name}
                                        </p>
                                        <p className='flex items-center gap-2 text-orange-400'>
                                            <span className="font-semibold  text-orange-400">Rating:  </span>
                                             {fb.rating}/5  <FaStar></FaStar> 
                                        </p>
                                        <p>
                                            <span className="font-semibold  text-orange-400">Feedback: </span>
                                            {fb.message} 
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-gray-400">No feedback yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;