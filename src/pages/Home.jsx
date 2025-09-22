import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homebottomtext from '../components/Home/Homebottomtext';
import Homeherotext from '../components/Home/Homeherotext';
import Video from '../components/Home/Video';


function Home() {
  return (
    <>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='w-screen h-screen relative flex flex-col'>
        <Homeherotext />
        <Homebottomtext />
       
      </div>
    </>
  );
}

export default Home;
