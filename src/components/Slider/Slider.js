import React from 'react';
import { SliderWrapper } from './Slider.styled';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import temp1 from './temp1.svg';
import temp2 from './temp2.svg';
import temp3 from './temp3.svg';
import temp4 from './temp4.svg';
import temp5 from './temp5.svg';




const Slider = () => (
 <SliderWrapper>
   <OwlCarousel className='owl-theme' items={5.5} margin={1}  pagination={false}>
    <div class='item'>
       <div className='climate-box'>
         <span className='time'>12 AM</span>
         <img src={temp1} class="temp-img" alt='temp1'/>
         <span className='temp-change'>30%</span>
         <span className='temp'>19°</span>
       </div>
    </div>
    <div class='item'>
    <div className='climate-box current'>
         <span className='time'>Now</span>
         <img src={temp2} class="temp-img" alt='temp2'/>
         {/* <span className='temp-change'>30%</span> */}
         <span className='temp'>19°</span>
       </div>
    </div>
    <div class='item'>
    <div className='climate-box'>
         <span className='time'>12 AM</span>
         <img src={temp3} class="temp-img" alt='temp3'/>
         
         <span className='temp'>19°</span>
       </div>
    </div>
    <div class='item'>
    <div className='climate-box'>
         <span className='time'>12 AM</span>
         <img src={temp4} class="temp-img" alt='temp4'/>
        
         <span className='temp'>19°</span>
       </div>
    </div>
    <div class='item'>
    <div className='climate-box'>
         <span className='time'>12 AM</span>
         <img src={temp5} class="temp-img" alt='temp5'/>
         
         <span className='temp'>19°</span>
       </div>
    </div>
    <div class='item'>
    <div className='climate-box'>
         <span className='time'>12 AM</span>
         <img src={temp1} class="temp-img" alt='temp1'/>
         
         <span className='temp'>19°</span>
       </div>
    </div>
</OwlCarousel>
 </SliderWrapper>
);

export default Slider;
