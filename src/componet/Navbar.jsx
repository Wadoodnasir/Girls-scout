import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../App.css';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, nextIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    nextIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    nextIsHovered(false);
  };

  return (
    <>
      <nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='main-div'>
          <div className='logo'>
            {isHovered ? (
              <>
                <img
                  src='https://www.girlscouts.org/content/dam/gsusa/images/header/Mainnavlogo.png'
                  alt='Sorry'
                  className='nav-logo'
                />
              </>
            ) : (
              <>
                <img
                  src='https://www.girlscouts.org/content/dam/gsusa/images/header/mainnavlogo-white.png'
                  alt='Sorry'
                  className='nav-logowhite'
                />
              </>
            )}
          </div>
          <div className='nav-items'>
            <div className='header-eyebrow'>
              <button
                className='btn-style'
                style={{ backgroundColor: '#FF830C' }}
              >
                SHOP
              </button>
              <button
                className='btn-style'
                style={{ backgroundColor: '#D5F267' }}
              >
                DONATE
              </button>
              <LoginIcon className='icon' style={{ fontSize: 33 }} />
              <LocationOnIcon className='icon' style={{ fontSize: 33 }} />
              <div>
                {hovered ? (
                  <>
                    <img
                      src='https://www.girlscouts.org/content/dam/gsusa-redesign/GSWeb-Icons-60px_ES-black.png'
                      className='nav-item-black'
                      alt='sorry'
                    />
                  </>
                ) : (
                  <>
                    <img
                      src='https://www.girlscouts.org/content/dam/gsusa-redesign/GSWeb-Icons-60px_ES-white.png'
                      className='nav-item'
                      alt='sorry'
                    />
                  </>
                )}
              </div>
              <SearchIcon className='icon' style={{ fontSize: 33 }} />
            </div>
            <div className='header-dropdown'>
              <ul className='dropdown-items'>
                <li>Discover</li>
                <KeyboardArrowDownIcon
                  className='icon'
                  style={{ fontSize: 25 }}
                />
                <li>Get involved</li>
                <KeyboardArrowDownIcon
                  className='icon'
                  style={{ fontSize: 25 }}
                />
                <li>Cookies</li>
                <KeyboardArrowDownIcon
                  className='icon'
                  style={{ fontSize: 25 }}
                />
                <li>Support Us</li>
                <KeyboardArrowDownIcon
                  className='icon'
                  style={{ fontSize: 25 }}
                />
                <li>Members</li>
                <KeyboardArrowDownIcon
                  className='icon'
                  style={{ fontSize: 25 }}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
