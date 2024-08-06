import React from 'react';

let color1 = '#005640';
let color2 = '#5C1F8B';

const FeatureCard = () => {
  const Card = (props) => {
    return (
      <div
        className=' text-center d-flex flex-column gap-4'
        style={{ padding: 20, backgroundColor: color2 }}
      >
        <img
          src='https://www.girlscouts.org/en/our-stories/girl-scouts/gold-award/gold-award-girl-scout-standing-up-for-survivors-of-sexual-assault/jcr:content/root/cropimage_1060458713/.coreimg.jpeg/1696446757595.jpeg'
          className='card-img-top rounded-3 m-0 w-100 mb-3'
          alt='...'
        />
        <div className='card-bod text-center'>
          <h3 className='card-title fs-2 px-2 text-white mb-3'>
            Kayla: Standing up for SA Survivors
          </h3>
        </div>

        <a
          href='#'
          className='btn btn-primary mx-auto w-100 border-0 text-dark '
          style={{ height: 60, fontSize: 32, backgroundColor: '#CCB3FA' }}
        >
          MORE
        </a>
      </div>
    );
  };

  return (
    <div className='row justify-content-center gap-0 mx-2'>
      <div className='col-6 p-0 m-0'>
        <div
          className='feature-card border-0 rounded-0 m-0'
          style={{ width: 640 }}
        >
          <div className=' text-center d-flex flex-column gap-2'>
            <div className='card-bod text-center'>
              <img
                src='https://www.girlscouts.org/en/our-stories/girl-scouts/gold-award/gold-award-girl-scout-athletes-with-disabilities/jcr:content/root/cropimage/.coreimg.jpeg/1696446695902.jpeg'
                className='card-img-top rounded-3 mb-4'
                alt='...'
                style={{ width: '600px', margin: 'auto' }}
              />
              <h3 className='card-title mb-2 fs-2'>
                Jillian: Neurodiverse Athletes
              </h3>
            </div>
            <h5
              className='card-title fs-5 px-5 mb-4'
              style={{ paddingBottom: 12 }}
            >
              How Girl Scout Jillian helped train athletes with intellectual
              disabilities.
            </h5>
            <a
              href='#'
              className='btn btn-primary mx-auto mb-3 border-0'
              style={{
                height: 60,
                width: 400,
                fontSize: 32,
                backgroundColor: '#005640',
              }}
            >
              MORE
            </a>
          </div>
        </div>
      </div>
      <div className='col-6 p-0 ' style={{ width: 640 }}>
        <div className='container text-center'>
          <div className='row row-cols-2'>
            <div className='col p-0 '>{Card(color1)}</div>
            <div className='col p-0 '>{Card(color2)}</div>
            <div className='col p-0 '>{Card(color2)}</div>
            <div className='col p-0 '>{Card(color1)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureCard;
