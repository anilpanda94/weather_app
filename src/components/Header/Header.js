import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './Header.styled';
import wifi from './wifi.svg';
import signal from './signal.svg';
import battery from './battery.svg';

const Header = () => (
 <HeaderWrapper>
     <header className='mobile-header'>
          <span className='time'>1:40</span>
          <ul>
            <li><img src={signal} alt=''></img></li>
            <li><img src={wifi} alt=''></img></li>
            <li><img src={battery} alt=''></img></li>
          </ul>
        </header>
 </HeaderWrapper>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
