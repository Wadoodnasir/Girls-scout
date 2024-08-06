import React from 'react';
import ActivitieCard from './ActivitieCard';
import Data from './ActivityCardData';

function cData(val) {
  return (
    <ActivitieCard
      imgsrc={val.src}
      title={val.title}
      detail={val.detail}
      color={val.color}
      button={val.button}
    />
  );
}

const ActivitieCards = () => {
  return (
    <div className='container pt-3'>
      <div className='activitie-container '>
        <div className='row'>{Data.map(cData)}</div>
        <hr />
      </div>
    </div>
  );
};
export default ActivitieCards;
