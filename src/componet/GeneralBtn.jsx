import React, { useState } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import '../App.css';

const GeneralBtn = (props) => {
  const [hovered1, nextIsHovered1] = useState(false);

  const handleMouseEnter1 = () => {
    nextIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    nextIsHovered1(false);
  };

  const btn = () => {
    return (
      <div>
        {hovered1 ? (
          <div className=''>
            <button
              className='general-btn'
              onMouseLeave={handleMouseLeave1}
              onMouseEnter={handleMouseEnter1}
              style={{
                backgroundColor: props.backgroundcolor,
                width: props.width,
                color: props.color,
                fontSize: props.font,
                height: props.height,
                border: 'none',
              }}
            >
              {props.Name}
              <span>
                <KeyboardDoubleArrowRightIcon
                  style={{ fontSize: 25 }}
                  className='mb-1'
                />
              </span>
            </button>
          </div>
        ) : (
          <>
            <button
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              className='general-btn'
              style={{
                backgroundColor: props.backgroundcolor,
                width: props.width,
                color: props.color,
                fontSize: props.font,
                height: props.height,
                border: 'none',
              }}
            >
              {props.Name}
            </button>
          </>
        )}
      </div>
    );
  };

  return btn();
};
export default GeneralBtn;
