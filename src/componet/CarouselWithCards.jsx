import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import GeneralBtn from './GeneralBtn';

const CarouselWithCards = () => {
  const [items] = useState([
    {
      id: 1,
      src: 'https://www.girlscouts.org/content/dam/gsusa/promotions/shop/homepage/Official-Junior-Vest-5220_main-01.default.jpg',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 2,
      src: 'https://www.girlscouts.org/content/dam/gsusa/promotions/shop/homepage/Official-Brownie-Vest-5121_main-01.default.jpg',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 3,
      src: 'https://www.girlscouts.org/content/dam/gsusa/promotions/shop/promo-girl-scouts-adult-recycled-vest.jpg',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 4,
      src: 'https://www.girlscouts.org/content/dam/gsusa/promotions/shop/homepage/Khaki-Vest-0625_main-01.default.jpg',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 5,
      src: 'https://www.girlscouts.org/content/dam/gsusa/promotions/shop/homepage/Daisy-Tunic-0367_main-01.default.jpg',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 6,
      src: 'https://www.juicer.io/api/posts/483874400/images.jpg?external_id=1817785897938501883&s=c398c30f5a600191dca8fe0cdf0c3085e1976732',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 7,
      src: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/453091891_1029527262537450_4086598017114148008_n.jpg?stp=dst-jpg_p720x720&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=57bU2vQKFKkQ7kNvgHpbnyx&_nc_ht=scontent-iad3-2.xx&edm=ALdPpPkEAAAA&oh=00_AYBETkWe0ZL92ZjaDVicqJiXDGelyLD99nwRMjfGDpkvwA&oe=66AFD8D7',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 8,
      src: 'https://www.juicer.io/api/posts/483826708/images.jpg?external_id=1817288181777051855&s=19b4ceb77a74c7fcad08548f3ccbda267cea9a8f',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 9,
      src: 'https://www.juicer.io/api/posts/483785130/images.jpg?external_id=1816899056825762202&s=fb5e8545c9a8789b152a07ff44ebda7ab80bb734',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
    {
      id: 10,
      src: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/453005773_1028195502670626_33425022256673900_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6R8yfqYkYRIQ7kNvgEHwtgo&_nc_ht=scontent-iad3-2.xx&edm=ALdPpPkEAAAA&oh=00_AYA7KVJElrqFwiXP7kgyRb8XuSdOVKD8q9xx724dZ4qNCQ&oe=66AFE678',
      title: 'Official Junior Vest',
      type: 'Uniform',
      detail: 'Classic fit with new sustainably sourced fabric.',
    },
  ]);

  const breakPoints = [{ width: 1, itemsToShow: 1.9, itemsToScroll: 1 }];

  return (
    <div
      className=' container-fluid p-0'
      style={{ backgroundColor: '#005640' }}
    >
      <div className='container p-0 '>
        <Carousel breakPoints={breakPoints} showArrows={true} showDots={false}>
          {items.map((item) => (
            <div
              className='row  bg-white mt-5 mb-2  mx-2  rounded-4 align-items-center'
              style={{ padding: 20 }}
            >
              <div className='col-5 p-0'>
                <img
                  className=''
                  src={item.src}
                  alt={`item ${item.id}`}
                  style={{
                    width: '254px',
                    height: '254px',
                    objectFit: 'cover',
                    marginRight: '10px',
                  }}
                />
              </div>
              <div className='col-7 p-0 text-center '>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.type}</p>
                  <p style={{ fontSize: 20 }} className=' px-3'>
                    {item.detail}
                  </p>
                  <GeneralBtn
                    Name='GO'
                    width='290px'
                    backgroundcolor='#A0DEF1'
                    color='black'
                    height='60px'
                    font='32px'
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselWithCards;
