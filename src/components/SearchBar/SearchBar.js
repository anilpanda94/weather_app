import React from 'react';
import { SearchBarWrapper } from './SearchBar.styled';

const SearchBar = () => (
 <SearchBarWrapper>
<div className='input-group'>
   <input className='seaarchBar' type='text' placeholder='Search for a city or airport'></input>
</div>
</SearchBarWrapper>
);
export default SearchBar;
