import React from 'react';

const ExpolerContainer = () => {
  return (
    <div
      className='container-fluid my-5'
      style={{
        backgroundColor: '#F7ABD6',
        padding: '20px 0px',
        margin: '0px 0px 40px',
      }}
    >
      <div
        className='container mx-auto'
        style={{ padding: '20px 0px', margin: '0px  119.6' }}
      >
        <div className='row mx-5'>
          <div className='col-lg-6 p-0 px-lg-3'>
            <img
              src='https://www.girlscouts.org/en/_jcr_content/root/container/featured_short_story_1693459304.coreimg.png/1719854242399/stem-portal-pics-animal-observers.png'
              className='rounded-3 w-100 '
              // style={{ height: 360 }}
            />
          </div>
          <div className='col-lg-6 p-0 align-self-center'>
            <div className=' text-center'>
              <h2 style={{ fontSize: 42 }}>Watch and learn!</h2>
              <p style={{ padding: '20px 10px 40px', fontSize: 20 }}>
                Use your senses to learn about your favorite animals! Download
                the FREE Daisy Animal Observer activity to get started.
              </p>
              <a
                href='#'
                className='btn btn-primary mx-auto mb-3 border-0'
                style={{
                  height: 60,
                  width: 400,
                  fontSize: 32,
                  backgroundColor: '#5C1F8B',
                }}
              >
                START EXPLORING
              </a>
              <></>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpolerContainer;
