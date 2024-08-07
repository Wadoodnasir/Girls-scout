import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import GeneralBtn from './GeneralBtn';
import '../App.css';

const FooterInput = () => {
  const list = [
    { id: '1', value: 'Contact Us' },
    { id: '2', value: 'Visit Us' },
    { id: '3', value: 'Careers' },
    { id: '4', value: 'Leadership' },
    { id: '5', value: 'Schools' },
    { id: '6', value: 'Scholarships' },
    { id: '7', value: 'Sustainability' },
    { id: '8', value: 'Financials' },
    { id: '9', value: 'Faith' },
    { id: '10', value: 'Terms and Conditions' },
    { id: '11', value: 'Privacy Policy' },
    { id: '12', value: 'Frequently Asked Questions' },
    { id: '13', value: 'Press' },
    { id: '14', value: 'Blog' },
    { id: '15', value: 'Manage Email Preferences' },
  ];

  return (
    <div className='input-ft'>
      <div className='col-6 mx-auto'>
        <h4 className='heading-ft mx-auto'>
          Enter your email address to subscribe to
          <br />
          the Girl Scouts of the USA newsletter.
        </h4>
        <div className='mx-auto' id='input-ft'>
          <Box
            component='form'
            sx={{
              '& > :not(style)': { m: 1, width: '380px', height: '35px' },
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              color='success'
              id='outlined-basic'
              label='Enter Your email address'
              variant='outlined'
            />
          </Box>
          <div className='ms-1 mt-4'>
            <GeneralBtn
              className=''
              Name='SUBSCRIBE'
              width='390px'
              backgroundcolor='transparent'
              color='black'
              height='60px'
              font='30px'
            />
          </div>
        </div>
        <p className='thankyou'></p>
        <div className='social-icon'>
          <a href='https://www.instagram.com'>
            <img
              src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-instagram-D.png'
              alt='Instagram'
            />
          </a>
          <a href='https://www.twitter.com'>
            <img
              src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-twitter-D.png'
              alt='Twitter'
            />
          </a>
          <a href='https://www.linkedin.com'>
            <img
              src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-LinkedIn-D.png'
              alt='LinkedIn'
            />
          </a>
          <a href='https://www.youtube.com'>
            <img
              src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-youtube-D.png'
              alt='YouTube'
            />
          </a>
          <a href='https://www.pinterest.com'>
            <img
              src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-pinterest-D.png'
              alt='Pinterest'
            />
          </a>
          <a href='https://www.facebook.com'>
            <img
              src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-facebook-D.png'
              alt='Facebook'
            />
          </a>
          <a href='https://www.blogger.com'>
            <img
              src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-blogger.png'
              alt='Blogger'
            />
          </a>
        </div>
        <ul className='contact-list pb-3'>
          {list.map((item) => (
            <li key={item.id} className='pb-1'>
              <a href='#' className='list-style'>
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterInput;
