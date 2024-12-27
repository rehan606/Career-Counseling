import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='w-11/12 mx-auto py-20 '>
            
            <h2 className="text-4xl font-bold text-center text-[#20ad95] mb-10">
                    Our <span className="text-[#ff7029]"> Services</span>
                </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard key={service.id} service={service} ></ServiceCard>).slice(0,6)
                }
            </div>
        </div>
    );
};

export default Services;