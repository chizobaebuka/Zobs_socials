import React from 'react';
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar';
import Leftbar from '../../Components/LeftSideContainer/Leftbar';
import MainPost from '../../Components/MainPostContainer/MainPost';
import Rightbar from '../../Components/RightSideContainer/Rightbar';

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='ComponentContainer'>
          <Leftbar />
          <MainPost />
          <Rightbar />
        </div>
    </div>
  )
}
