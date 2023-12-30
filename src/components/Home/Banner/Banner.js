import React from 'react';
import slide1 from '../../assest/image/slide-1.jpg';
import slide2 from '../../assest/image/slide-2.jpg';
import slide3 from '../../assest/image/slide-3.jpg';
import slide4 from '../../assest/image/slide-4.jpg';
import slide5 from '../../assest/image/slide-5.jpg';
import slide6 from '../../assest/image/slide-6.jpg';
import Carousel from 'react-bootstrap/Carousel';



const bannerItem = [
    {
        image: slide1,
        id: 1

    },
    {
        image: slide2,
        id: 2

    },
    {
        image: slide3,
        id: 3

    },
    {
        image: slide4,
        id: 4

    },
    {
        image: slide5,
        id: 5

    },
    {
        image: slide6,
        id: 6

    }
]

const Banner = () => {


    return (
        <Carousel data-bs-theme="dark">
            {
                bannerItem.map(slide =>{
                    return (
                        <Carousel.Item key={slide.id}>
                        <img
                        style={{height:'500px'}}
                            className="d-block w-100 img-fluid"
                            src={slide.image}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    )
                })
            }
           
        </Carousel>
    );
}

export default Banner;