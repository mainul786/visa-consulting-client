import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewEdit = () => {
    const reviewId = useParams();
    const {id} = reviewId;
    const [reviews, setReviews] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`https://visa-consulting-server.vercel.app/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [refresh, id])
    console.log(reviews)
    const handleReviewsEdit = event => {
        event.preventDefault();
        const review = {
            name:event.target.name.value,
            email:event.target.email.value,
            photo:event.target.photoURL.value,
        }
       fetch(`https://visa-consulting-server.vercel.app/reviews/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        if(data.modifiedCount){
            alert('updated succefully')
        }else {
            alert('something went is wrong')
        }
       })
    }

    return (
        <div>
            <div className='mt-4 border rounded p-4' >
                <h2 className='text-center'>Reviews Edit</h2>
                <form onSubmit={handleReviewsEdit}>
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Name</label>
                        <input type="name" defaultValue={reviews?.name} name='name' class="form-control" id="exampleInputName1" placeholder='Type your Name' aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" defaultValue={reviews?.email} name="email" class="form-control" id="exampleInputEmail1" placeholder='Type your email' aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPhoto1" class="form-label">PhotoUrl</label>
                        <input type="text" defaultValue={reviews?.photo} name="photoURL" class="form-control" id="exampleInputPhoto1" placeholder='Type your photoURL' aria-describedby="emailHelp" />

                    </div>
                    <button type="submit" class="btn btn-primary">Add Rewiew</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewEdit;