import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/service`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
              {
            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default Service;