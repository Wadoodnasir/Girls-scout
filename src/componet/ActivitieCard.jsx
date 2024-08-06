import React from 'react';

const ActivitieCard = (props) => {
  return (
    <div className='col-lg-4 p-0'>
      <div className='card'>
        <img
          src={props.imgsrc}
          className='card-img-top w-100 rounded-4'
          alt='sorry'
          style={{ height: 253 }}
        />
        <div className='card-body text-center'>
          <h2 className='card-title'>{props.title}</h2>
          <p className='card-text' style={{ fontSize: 20 }}>
            {props.detail}
          </p>
          <a
            href='#'
            className='btn btn-primary w-100 border-0'
            style={{ backgroundColor: props.color }}
          >
            <h2 className=' m-0 text-dark'>{props.button}</h2>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ActivitieCard;
