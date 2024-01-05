import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`https://visa-consulting-server.vercel.app/service`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
            })
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
              {
            services.map(service => 
             
            <ServiceCard 
            key={service._id} 
            service={service}
        >

        </ServiceCard>)

            }
        </div>
    );
};

export default Service;