import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import GeneralBtn from './GeneralBtn';

import '../App.css';

const FooterInput = () => {
  const list = [
    'Contact Us',
    'Visit Us',
    'Careers',
    'Leadership',
    'Schools',
    'Scholarships',
    'Sustainability',
    'Financials',
    'Faith',
    'Terms and Conditions',
    'Privacy Policy',
    'Frequently Asked Questions',
    'Press',
    'Blog',
    'Manage Email Preferences',
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
            <></>
          </Box>
          <div className=' ms-1 mt-4'>
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
          <a href=''>
            <img src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-instagram-D.png' />
          </a>
          <a href=''>
            <img src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-twitter-D.png' />
          </a>
          <a href=''>
            <img src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-LinkedIn-D.png' />
          </a>
          <a href=''>
            <img src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-youtube-D.png' />
          </a>
          <a href=''>
            <img src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-pinterest-D.png' />
          </a>
          <a href=''>
            <img src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-facebook-D.png' />
          </a>
          <a href=''>
            <img src='https://www.girlscouts.org/content/dam/gsusa-redesign/social-icon-blogger.png' />
          </a>
        </div>
        <ul className='contact-list pb-3'>
          {list.map((item, index) => (
            <li className='pb-1'>
              <a key={index} href='' className='list-style'>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FooterInput;
