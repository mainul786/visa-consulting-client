import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/reviews`)
        .then(res=> res.json())
        .then(data=>{
           setReviews(data)
        })
    }, [])

    return (
        <div>
            <h1>Reviews Page:</h1>
        </div>
    );
};

export default Reviews;