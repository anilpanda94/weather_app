import React from 'react';
import { LocationWeatherWrapper } from './LocationWeather.styled';
import Cloud1 from '../LocationWeather/cloud1.svg';
import Cloud2 from '../LocationWeather/cloud2.svg';
import Cloud3 from '../LocationWeather/cloud3.svg';
import Cloud4 from '../LocationWeather/cloud4.svg';


const LocationWeather = () => (
 <LocationWeatherWrapper>
    <section className='weather_details'>
      <div className='weather_box'>
         <div className='inner_content'>
         <h3 className='temp'>19°</h3>
         <h5 className='high-low'>H:21° L:-19°</h5>
         <p className='location'>Coimbatore, India 
         <span className='type'>Mid Rain</span>
         </p>
         <img src={Cloud1} alt='cloud1' className='cloud_icon'></img>
         </div>
      </div>

      <div className='weather_box'>
         <div className='inner_content'>
         <h3 className='temp'>19°</h3>
         <h5 className='high-low'>H:21° L:-19°</h5>
         <p className='location'>Coimbatore, India 
         <span className='type'>Mid Rain</span>
         </p>
         <img src={Cloud2} alt='cloud2' className='cloud_icon'></img>
         </div>
      </div>

      <div className='weather_box'>
         <div className='inner_content'>
         <h3 className='temp'>19°</h3>
         <h5 className='high-low'>H:21° L:-19°</h5>
         <p className='location'>Coimbatore, India 
         <span className='type'>Mid Rain</span>
         </p>
         <img src={Cloud3} alt='cloud3' className='cloud_icon'></img>
         </div>
      </div>
    </section>
 </LocationWeatherWrapper>
);

LocationWeather.propTypes = {};

LocationWeather.defaultProps = {};

export default LocationWeather;
