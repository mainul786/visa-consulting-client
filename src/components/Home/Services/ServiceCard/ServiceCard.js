import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {

    return (
      <div className="col">
      <div className="card h-100">
        <PhotoProvider>
          <PhotoView src={service?.image}>
          <img src={service?.image} className="card-img-top h-50" alt="" />
          </PhotoView>
          </PhotoProvider>        
        <div className="card-body">
          <h5 className="card-title">{service?.name}</h5>
          <p className="card-text">{service?.details}</p>
          <p className="card-text">Rs:$ {service?.price}</p>
          <p className="card-text">Rating: {service?.rating}</p>
          <Link to={`/services/${service?._id}`}> <button className='btn btn-primary' >View Details</button></Link>
        </div>
      </div>
      </div>
    );
};

export default ServiceCard;