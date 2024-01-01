import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Gallery from '../Gallery/Gallery';
import Imagration from '../Imagration/Imagration';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <Imagration></Imagration>
        </div>
    );
};

export default Home;