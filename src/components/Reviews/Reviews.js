import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('deleted succssfully')
                }
            })

    }
    return (
        <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>

                    <th>Name</th>
                    <th>Email</th>
                    <th>PhotoURL</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>


                {
                    reviews.map(review =>
                        <tr>
                            <td>{review?.name}</td>
                            <td>{review?.email}</td>
                            <td>{review?.photo}</td>
                            <td>
                                <button className='btn btn-primary me-4'>Edit</button>
                                <button onClick={() => handleDelete(review?._id)} className='btn btn-warning'>Delete</button>
                            </td>
                        </tr>
                    )


                }
            </tbody>
        </Table>
    );
};

export default Reviews;