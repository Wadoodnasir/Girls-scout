import React from 'react';
import ActivitieCard from './ActivitieCard';
import Data from './ActivityCardData'; // Assuming Data is imported from this file

function cData(val, index) {
  return (
    <ActivitieCard
      key={index} // Use index as key if id is not available
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
      <div className='activitie-container'>
        <div className='row'>{Data.map(cData)}</div>
        <hr />
      </div>
    </div>
  );
};

export default ActivitieCards;
