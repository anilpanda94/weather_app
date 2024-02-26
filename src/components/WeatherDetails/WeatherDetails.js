import React from 'react';
import { WeatherDetailsWrapper } from './WeatherDetails.styled';

const WeatherDetails = () => (
 <WeatherDetailsWrapper>
<section className='inner-weather-details'>
   <div className='row'>
      <div className='col-lg-12 w-100'>
         <div className='details-box'>
            <h3 className='heading-details'>Air Quality</h3>
            <h2 className='risk-heading'>3-Low health Risk</h2>
            <div className='temp-meter'><span className='indicator'></span></div>
            <hr/>
            <a href="#" className='link-forward'>See more </a>
         </div>
      </div>
   </div>
   <div className='row'>
      <div className='col-lg-6 w-50'>
         <div className='details-box'>
            <h3 className='heading-details'>UV Index</h3>
            <h2 className='risk-heading'>4<br/>Moderate</h2>
            <div className='temp-meter'><span className='indicator'></span></div>            
         </div>
      </div>

      <div className='col-lg-6 w-50'>
         <div className='details-box'>
            <h3 className='heading-details'>Sunrise</h3>
            <h2 className='risk-heading'>5:28 PM</h2>
            
            
           <span className='sunset-time'>Sunset: 7:25pm</span>
         </div>
      </div>
   </div>

   <div className='row'>
      <div className='col-lg-6 w-50'>
         <div className='details-box'>
            <h3 className='heading-details'>Wind</h3>
                    
         </div>
      </div>

      <div className='col-lg-6 w-50'>
         <div className='details-box'>
            <h3 className='heading-details'>Rainfall</h3>
            <h2 className='risk-heading'>1.8 mm<br/>In last Hour</h2>
            
            
           <span className='sunset-time'>1.2 mm expected in<br/> 24 hr</span>
         </div>
      </div>
   </div>


   {/* <div className='row'>
      <div className='col-lg-6 w-50'>
         <div className='details-box'>
            <h3 className='heading-details'>Feels like</h3>
            <h2 className='risk-heading'>19°</h2>
            <span className='sunset-time'>Similar to the actual <br/>temperature</span>          
         </div>
      </div>

      <div className='col-lg-6 w-50'>
         <div className='details-box'>
            <h3 className='heading-details'>Humidity</h3>
            <h2 className='risk-heading'>90%</h2>
            
            
           <span className='sunset-time'>The dew point is 17 <br/>Right now</span>
         </div>
      </div>
   </div> */}
</section>   
 </WeatherDetailsWrapper>
);



export default WeatherDetails;
