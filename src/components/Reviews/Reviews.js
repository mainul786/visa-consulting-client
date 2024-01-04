import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [refresh])

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('deleted succssfully')
                    setRefresh(!refresh);
                }
            })

    }
    const navigate =useNavigate();
    const handleEdit = id => {
        navigate(`/edit/${id}`)
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
                        <tr key={review._id}>
                            <td>{review?.name}</td>
                            <td>{review?.email}</td>
                            <td>{review?.photo}</td>
                            <td>
                                <button onClick={() => handleEdit(review?._id)} className='btn btn-primary me-4'>Edit</button>
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