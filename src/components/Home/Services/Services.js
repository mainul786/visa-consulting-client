import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    }, [])
    return (
        <div className=''>
           <h1 className='fs-1 text-center mt-3'>Services</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
         
            {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
            <div className='text-center mt-5'>
            <Link to='/service'><button type="button" className="btn btn-primary ">See More</button></Link>
            </div>
        </div>
    );
};

export default Services;