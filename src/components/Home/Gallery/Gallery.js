import React from 'react';
import img1 from '../../../components/assest/image/card-1.jpg'
import img2 from '../../../components/assest/image/card-2.jpg'
import img3 from '../../../components/assest/image/card-3.jpg'
import img4 from '../../../components/assest/image/card-4.jpg'
import img5 from '../../../components/assest/image/card-5.jpg'
import img6 from '../../../components/assest/image/card-6.jpg'
import GalleryCard from './GalleryCard';

const Gallery = () => {
    const imageGaller = [
        {
            image: img1,
            id: 1
        },
        {
            image: img2,
            id: 2
        },
        {
            image: img3,
            id: 3
        },
        {
            image: img4,
            id: 4
        },
        {
            image: img5,
            id: 5
        },
        {
            image: img6,
            id: 6
        }
    ]
    return (
      <div className='pt-5'>
        <h1 className='text-center fs-1'>Gellary</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                imageGaller.map(image =>
                  <GalleryCard
                  key={image.id}
                  image={image}
                  ></GalleryCard>
                )
            }

        </div>
      </div>
    );
};

export default Gallery;