import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ServiceCard = ({service}) => {
    const {name, image, rating, price, details}= service; 
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Price: $ {price}
        </Card.Text>
        <Card.Text>
        Rating: {rating}
        </Card.Text>
        <Card.Text>
         {details}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
};

export default ServiceCard;