import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {id, image, serviceName, description } = service
    return (
        <div>
            
            <div class="group relative  h-80 overflow-hidden rounded-lg shadow-lg  border border-[#ff7029]">
                
                <img
                    src={image}
                    alt="Card Image"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                
                <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                
                <div class="absolute text-white py-20 px-10 text-center h-full bottom-0 left-0 right-0 bg-white bg-opacity-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h2 class="text-center text-white text-2xl lg:text-4xl font-bold  py-3">
                    {serviceName}
                    </h2>

                    <p className='mb-4'>{description}</p>

                    <Link to={`/service/${id}`} className='py-3 px-7 bg-[#ff7029] text-white'>Learn More</Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;