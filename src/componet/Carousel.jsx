//Carousel.jsx
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

const GeneralCarousel = () => {
  const [items] = useState([
    {
      id: 1,
      src: 'https://www.juicer.io/api/posts/483874400/images.jpg?external_id=1817785897938501883&s=c398c30f5a600191dca8fe0cdf0c3085e1976732',
    },
    {
      id: 2,
      src: 'https://www.juicer.io/api/posts/483704632/images.jpg?external_id=1816244240369815727&s=2853f63be9c60021d172ffe6bb017c0860e43b4c',
    },
    {
      id: 3,
      src: 'https://www.juicer.io/api/posts/483874400/images.jpg?external_id=1817785897938501883&s=c398c30f5a600191dca8fe0cdf0c3085e1976732',
    },
    {
      id: 4,
      src: 'https://www.juicer.io/api/posts/483945395/images.jpg?external_id=1818349404769710184&s=2eb78a8c40b841bd14e9d1a20b226b662b0951fd',
    },
    {
      id: 5,
      src: 'https://www.juicer.io/api/posts/483874400/images.jpg?external_id=1817785897938501883&s=c398c30f5a600191dca8fe0cdf0c3085e1976732',
    },
    {
      id: 6,
      src: 'https://www.juicer.io/api/posts/483874400/images.jpg?external_id=1817785897938501883&s=c398c30f5a600191dca8fe0cdf0c3085e1976732',
    },
    {
      id: 7,
      src: 'https://www.juicer.io/api/posts/483874400/images.jpg?external_id=1817785897938501883&s=c398c30f5a600191dca8fe0cdf0c3085e1976732',
    },
    {
      id: 8,
      src: 'https://www.juicer.io/api/posts/483826708/images.jpg?external_id=1817288181777051855&s=19b4ceb77a74c7fcad08548f3ccbda267cea9a8f',
    },
    {
      id: 9,
      src: 'https://www.juicer.io/api/posts/483785130/images.jpg?external_id=1816899056825762202&s=fb5e8545c9a8789b152a07ff44ebda7ab80bb734',
    },
    {
      id: 10,
      src: 'https://www.juicer.io/api/posts/483874400/images.jpg?external_id=1817785897938501883&s=c398c30f5a600191dca8fe0cdf0c3085e1976732',
    },
  ]);

  const breakPoints = [{ width: 1, itemsToShow: 3, itemsToScroll: 1 }];

  return (
    <Carousel breakPoints={breakPoints} showArrows={true} showDots={false}>
      {items.map((item) => (
        <div key={item.id}>
          <img
            src={item.src}
            alt={`item ${item.id}`}
            style={{ width: '400px', height: '400px', objectFit: 'cover' }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default GeneralCarousel;
