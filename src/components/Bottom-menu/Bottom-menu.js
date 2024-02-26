import React from 'react';
// import PropTypes from 'prop-types';
import { BottomMenuWrapper } from './Bottom-menu.styled';
import ul1 from './ul1.svg';
import ul3 from './ul3.svg';
import activeul2 from './activeul2.svg';

const BottomMenu = () => (
 <BottomMenuWrapper>
    <div className='menu-footer'>
      <ul className='menu'>
         <li>
            <a href='#'>
               <img src={ul1} alt="ul1"/>
            </a>
         </li>
         <li className='active'>
            <a href='#'>
               <img src={activeul2} alt="ul2"/>
            </a>
         </li>
         <li>
            <a href='#'>
               <img src={ul3} alt="ul3"/>
            </a>
         </li>
      </ul>
    </div>
 </BottomMenuWrapper>
);

export default BottomMenu;
