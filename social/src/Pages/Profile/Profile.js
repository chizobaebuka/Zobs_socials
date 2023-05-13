import React from 'react';
import "./Profile.css";
import Navbar from '../../Components/Navbar/Navbar';
import ProfileLeftbar from '../../Components/ProfileLeftSideContainer/ProfileLeftbar';
import ProfileRightbar from '../../Components/ProfileRightSideContainer/ProfileRightbar';
import ProfileMainPost from '../../Components/ProfileMainPostContainer/ProfileMainPost';

export default function Profile() {
  return (
    <div className='ProfileContainer'>
        <Navbar/>
        <div className='subProfileContainer'>
            <ProfileLeftbar/>
            <ProfileMainPost/>
            <ProfileRightbar/>
        </div>
    </div>
  );
};
