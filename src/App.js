import home from './home-icon.svg';
import React from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import Slider from '../src/components/Slider/Slider';
import BottomMenu from '../src/components/Bottom-menu/Bottom-menu';
import WeatherDetails from '../src/components/WeatherDetails/WeatherDetails';
import HeaderInner from '../src/components/HeaderInner/HeaderInner';
import LocationWeather from '../src/components/LocationWeather/LocationWeather';



// import { Button, Drawer } from '@mui/material';
// const item={
//   items: [<img src={home} alt="The Last of us"/>,
//          <img src={home} alt="GTA V"/>,
//          <img src={home} alt="GTA V"/>
// ]
// }

function App() {
  // const [state, setState] = React.useState(true);

  // const openDrawer = () => {
  //   setState(!state);
  // };
  
  return (
    <div className="App">
      <div className="App">
      <div className='screen bg1'>
        <Header/>
        
        <section className='main-screen'>
          <h3 className='location'>Coimbatore</h3>
          <h1 className='temperature'>19°</h1>
          <h4 className='weather-text'>Mostly Clear</h4>
          <p className='temperature-details'><span>H:24°</span><span>L:18°</span></p>
        </section>
       
        <div className='drawer-bottom'>
        <div className='bg'></div>   
        <div className='content-inner'>
        <div className='top-head'>
          <span>Hourly Forecast</span>
          <span>Weekly Forecast</span>
        </div>
        <Slider/>
        <BottomMenu/>
        </div> 
        </div>
       <div className='icon-home'><img src={home} alt='' className='floating-icon'></img></div>
      </div>

      <div className='screen bg2'>
      <Header/>
        <section className='main-screen'>
          <h3 className='location'>Coimbatore</h3>
          <h1 className='weather'>19° | Mostly Clear</h1>
          <WeatherDetails/>
        </section>
       
        
      </div>
      <div className='screen bg2'>
        <Header/>
        <section className='main-screen'>
          <HeaderInner/>
          <LocationWeather/>
        </section>
       
        
      </div>
    </div>
    </div>
  );
}

export default App;
