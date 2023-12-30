import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const ServiceCard = ({service}) => {
    const {name, image, rating, price, details}= service; 
    return (
      <div className="col">
      <div className="card h-100">
        <PhotoProvider>
          <PhotoView src={image}>
          <img src={image} className="card-img-top h-50" alt="" />
          </PhotoView>
          </PhotoProvider>        
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
          <p className="card-text">Rs:$ {price}</p>
          <p className="card-text">Rating: {rating}</p>
          <button className='btn btn-primary'>View Details</button>
        </div>
      </div>
      </div>
    );
};

export default ServiceCard;