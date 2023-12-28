import React, { useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    fetch('services.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    return (
        <div className="">
            <h1 className='fs-1 text-center'>Services</h1>
            {
            services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;