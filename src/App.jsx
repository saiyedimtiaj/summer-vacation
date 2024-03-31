import React from 'react';
import Banner from './Component/Right/Banner';
import Navbar from './Component/Left/Navbar/Navbar';
import Searcbar from './Component/Left/SearcBar/Searcbar';
import Carousel from './Component/Left/Carousel/Carousel';
import AniImg from './Component/Left/AnimateImage/AniImg';

const App = () => {
  return (
    <div className='flex min-h-screen'>
      <div className='lg:w-1/2 w-full pb-5 lg:pb-1'>
        <Navbar/>
        <AniImg/>
        <Searcbar/>
        <Carousel/>
      </div>
      <div className='w-1/2 hidden lg:block'>
      <Banner/>
      </div>
    </div>
  );
};

export default App;