import React from 'react';
import '../App.css';

const BreakingNews = () => {
  return (
    <div className='breaking-news'>
      <p className='news ' underline='hover'>
        This Will Be Your Year of Friendship!{' '}
        <b>
          <a
            className='text-black'
            href='https://www.youtube.com/shorts/RuZee8rKwPI'
          >
            Beacome a Girl Scout
          </a>
        </b>{' '}
      </p>
    </div>
  );
};
export default BreakingNews;
