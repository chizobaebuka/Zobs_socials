import React from 'react';
import "./Navbar.css";
import SearchIcon from "../Images/search.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import ProfileImage from "../Images/Profile.png";

export default function Navbar() {
  return (
    <div className='mainNavbar'>
        <div className='LogoContainer'>
            <p>McZoba Social</p>
        </div>
        <div>
            <div className='searchInputContainer'>
                <img src={`${SearchIcon }`} className='searchIcon' alt="" />
                <input type="text" className='searchInput' placeholder='Search your friends... ' name="" id="" />
            </div>
        </div>
        <div className='IconsContainer'>
            <img src={`${Notifications }`} className='Icons' alt="" />
            <img src={`${Message }`} className='Icons' alt="" />
            <div style={{display: 'flex', alignItems: 'center'}}> 
                <img src={`${ProfileImage }`} className='ProfileImage' alt="" />
                <p style={{marginLeft: "5px"}}>Marcos</p>
            </div>
        </div>
    </div>
  )
}
