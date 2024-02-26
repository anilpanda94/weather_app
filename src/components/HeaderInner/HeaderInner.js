import React from 'react';
import { HeaderInnerWrapper } from './HeaderInner.styled';
import back from './back.svg';
import openMenu from './open-menu.svg';
import SearchBar from '../../components/SearchBar/SearchBar';

const HeaderInner = () => (
 <HeaderInnerWrapper>
    <section className='heading_inner'>
      <h3 className='back-text-menu'><img src={back} alt=''></img> Weather <a href='#'><img src={openMenu} alt=''></img></a></h3>
    </section>
    <SearchBar/>
 </HeaderInnerWrapper>
);
export default HeaderInner;
