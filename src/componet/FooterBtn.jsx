import React, { useState } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../App.css';
import GeneralBtn from './GeneralBtn';
const FooterBtn = () => {
  return (
    <div className='btn-ft'>
      <GeneralBtn
        Name='JOIN'
        width='343px'
        backgroundcolor='#5C1F8B'
        color='white'
        height='70px'
        font='32px'
      />
      <GeneralBtn
        Name='VOLUNTEER'
        width='342px'
        backgroundcolor='#005640'
        color='white'
        height='70px'
        font='32px'
      />
      <GeneralBtn
        Name='DONATE'
        width='343px'
        backgroundcolor='#004987'
        color='white'
        height='70px'
        font='32px'
      />
    </div>
  );
};
export default FooterBtn;
