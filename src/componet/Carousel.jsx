//Carousel.jsx
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

const GeneralCarousel = () => {
  const [items] = useState([
    {
      id: 1,
      src: 'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/452740494_1027450356078474_7196037657721297421_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=35J7jYlVzhMQ7kNvgFAVEjD&_nc_ht=scontent-iad3-1.xx&edm=ALdPpPkEAAAA&gid=AUgCOKPjoujJVejoWSypmN7&oh=00_AYDWjEr-DTHuBJEFtkxTJ8cx-qFx9T0MpI01OnmewIpe8g&oe=66B00FA1',
    },
    {
      id: 2,
      src: 'https://www.juicer.io/api/posts/483704632/images.jpg?external_id=1816244240369815727&s=2853f63be9c60021d172ffe6bb017c0860e43b4c',
    },
    {
      id: 3,
      src: 'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/453385311_1031633872326789_7080599827068804934_n.jpg?stp=cp1_dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9gvoZcTpxrkQ7kNvgEauuJP&_nc_ht=scontent-iad3-1.xx&edm=ALdPpPkEAAAA&gid=AEM-T4qMK6Zx1VbpI01GBaL&oh=00_AYDqxyT_r12k3DXuHxX8ELLcu8kNP4ifsrUry1jIolDn1A&oe=66B036A4',
    },
    {
      id: 4,
      src: 'https://www.juicer.io/api/posts/483945395/images.jpg?external_id=1818349404769710184&s=2eb78a8c40b841bd14e9d1a20b226b662b0951fd',
    },
    {
      id: 5,
      src: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/453385493_1030209665802543_3062895455248974330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uJPy_3vQmNIQ7kNvgH_86Xp&_nc_ht=scontent-iad3-2.xx&edm=ALdPpPkEAAAA&oh=00_AYDzGuUyOdUb1SI34fEqBRqd5U2B2jhQnGv-vOXnlLU6nA&oe=66AFA5C0',
    },
    {
      id: 6,
      src: 'https://www.juicer.io/api/posts/483874400/images.jpg?external_id=1817785897938501883&s=c398c30f5a600191dca8fe0cdf0c3085e1976732',
    },
    {
      id: 7,
      src: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/453091891_1029527262537450_4086598017114148008_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=57bU2vQKFKkQ7kNvgHpbnyx&_nc_ht=scontent-iad3-2.xx&edm=ALdPpPkEAAAA&oh=00_AYBETkWe0ZL92ZjaDVicqJiXDGelyLD99nwRMjfGDpkvwA&oe=66AFD8D7',
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
      src: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/453005773_1028195502670626_33425022256673900_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6R8yfqYkYRIQ7kNvgEHwtgo&_nc_ht=scontent-iad3-2.xx&edm=ALdPpPkEAAAA&oh=00_AYA7KVJElrqFwiXP7kgyRb8XuSdOVKD8q9xx724dZ4qNCQ&oe=66AFE678',
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
