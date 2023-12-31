import React from 'react';

const GalleryCard = ({ image }) => {
    return (
        <div className="col">
            <div className="card">
                <img src={image.image} className="card-img-top rounded  w-full" style={{ height:'250px'}} alt="..." />
            </div>
            </div >
    );
};

export default GalleryCard;