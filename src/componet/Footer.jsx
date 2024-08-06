import React, { useState } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../App.css';
import FooterBtn from './FooterBtn';
import FooterInput from './FooterInput';
import CopyRight from './CopyRight';
const Footer = () => {
  return (
    <footer>
      <div className='main-ft'>
        <FooterBtn />
        <FooterInput />
        <CopyRight />
      </div>
    </footer>
  );
};
export default Footer;
