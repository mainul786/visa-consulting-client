import React from 'react';


const ServiceCard = ({service}) => {
    const {name, image, rating, price, details}= service; 
    return (
      <div className="col">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
          <p className="card-text">Rs:$ {price}</p>
          <p className="card-text">Rating: {rating}</p>
        </div>
      </div>
      </div>
    );
};

export default ServiceCard;