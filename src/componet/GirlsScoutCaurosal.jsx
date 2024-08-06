import React from 'react';
import GeneralCarousel from './Carousel';
import { RiInstagramFill } from 'react-icons/ri';
import { FaFacebook } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';

const GirlsScoutCaurosal = () => {
  return (
    <div className=' container-fluid p-0'>
      <h2 className=' text-center pb-5'>
        <b>See how Girl Scouts are making a difference.</b>
      </h2>
      <div style={{ backgroundColor: '#1496D4' }} className=' py-5 my-5'>
        <div
          className=' d-flex gap-4 justify-content-center mb-5'
          style={{ marginTop: '-93px', cursor: 'pointer' }}
        >
          <div className='icon-social'>
            <RiInstagramFill
              style={{
                fontSize: 75,
                color: '#00BBFF ',
              }}
            />
          </div>
          <div className='icon-social'>
            <FaFacebook
              style={{
                fontSize: 60,
                color: '#00BBFF ',
              }}
            />
          </div>
          <div className='icon-social'>
            <FaTwitter
              style={{
                fontSize: 60,
                color: '#00BBFF ',
              }}
            />
          </div>
        </div>
        <div className=' d-flex justify-content-center  mx-auto px-5'>
          <GeneralCarousel />
        </div>
      </div>
    </div>
  );
};
export default GirlsScoutCaurosal;
