import React from 'react';
import Card from './Card';
import '../App.css';

const Cards = (props) => {
  return (
    <div className='card-container'>
      <Card
        src='https://www.girlscouts.org/en/_jcr_content/root/rowcolumn/par_0/card.coreimg.jpeg/1720535250562/groupofgirls-038-610x610.jpeg'
        heading='Become a Girl Scout'
        button='JOIN NOW'
        detail='Get ready for fun, friendship, and amazing adventures. '
        color='#CCB3FA'
        btncolor='#5C1F8B'
      />
      <Card
        src='https://www.girlscouts.org/en/_jcr_content/root/rowcolumn/par_1/card_copy.coreimg.jpeg/1664558086095/parentdaughter-017-610x610.jpeg'
        heading='Volunteer with Us'
        button='GET STARTED'
        detail="You've always believed in them.It's time to get involved."
        color='#A0DEF1'
        btncolor='#005640'
      />
      <Card
        src='https://www.girlscouts.org/en/_jcr_content/root/rowcolumn/par_2/card_copy.coreimg.jpeg/1719244078154/portraits-046-610x610.jpeg'
        heading='Invest in Girls'
        button='SUPPORT US'
        detail='Change her world, today and throughout her lifetime.'
        color='#F7ABD6'
        btncolor='#004987'
      />
    </div>
  );
};
export default Cards;
