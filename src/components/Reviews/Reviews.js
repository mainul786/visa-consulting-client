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
                                <td>{review?.photoURL}</td>
                                <td>
                                    <button className='btn btn-primary me-4'>Edit</button>
                                    <button className='btn btn-warning'>Delete</button>
                                </td>
                            </tr>
                        )


                    }                                                                                                                                                                                                                                
            </tbody>
        </Table>
    );
};

export default Reviews;