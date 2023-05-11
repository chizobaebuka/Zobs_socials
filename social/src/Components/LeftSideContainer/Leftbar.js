import React from 'react';
import "./leftbar.css";
import Image from "../Images/Profile.png";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image4.jpg";
import Image4 from "../Images/image3.jpg";
import Image5 from "../Images/image5.jpg";
import Image6 from "../Images/image6.jpg";
export default function Leftbar() {
  return (
    <div className='leftbar'>
        <div className='NotificationsContainer'>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <p style={{marginLeft: "-14px"}}>Notifications</p>
                <p style={{color: "#aaa", marginLeft: "40px"}}>See all</p>
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image5}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>David liked your post</p>
                <img src={`${Image1}`} className='likeimage' alt="" />
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>Madan started following you</p>
                <img src={`${Image2}`} className='followinguserimage' alt="" />
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image2}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>sarah liked your post</p>
                <img src={`${Image3}`} className='likeimage' alt="" />
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>Gentle started following you</p>
                <img src={`${Image4}`} className='followinguserimage' alt="" />
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image6}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>Noble liked your post</p>
                <img src={`${Image5}`} className='likeimage' alt="" />
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image3}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>Sherlock started following you</p>
                <img src={`${Image6}`} className='followinguserimage' alt="" />
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image2}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>Nonso liked your post</p>
                <img src={`${Image3}`} className='likeimage' alt="" />
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image5}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>Debbie started following you</p>
                <img src={`${Image2}`} className='followinguserimage' alt="" />
            </div>
            <div style={{display: "flex", alignItems: "center", marginTop:-13}}>
                <img src={`${Image4}`} className='notificationimg' alt="" />
                <p style={{marginLeft: "5px", color: "#aaa", fontSize:13, textAlign: 'start', width: '120px'}}>Esther liked your post</p>
                <img src={`${Image1}`} className='likeimage' alt="" />
            </div>
            
             
        </div>

        <div className='NotificationsContainer'>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <p style={{marginLeft: "-20px"}}>Explore</p>
                <p style={{color: "#aaa", marginLeft: "40px"}}>See all</p>
            </div>

            <div>
                <img src={`${Image}`} className='exploreImage' alt="" />
                <img src={`${Image1}`} className='exploreImage' alt="" />
                <img src={`${Image2}`} className='exploreImage' alt="" />
                <img src={`${Image3}`} className='exploreImage' alt="" />
                <img src={`${Image4}`} className='exploreImage' alt="" />
                <img src={`${Image5}`} className='exploreImage' alt="" />
                <img src={`${Image6}`} className='exploreImage' alt="" />
                <img src={`${Image}`} className='exploreImage' alt="" />
            </div>
            
             
        </div> 
    </div>
  );
};
