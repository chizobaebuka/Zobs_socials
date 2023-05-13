import React from 'react';
import "./ProfileLeftbar.css";
import Image from "../Images/Profile.png";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image4.jpg";
import Image4 from "../Images/image3.jpg";
import Image5 from "../Images/image5.jpg";
import Image6 from "../Images/image6.jpg";

export default function ProfileLeftbar() {
  return (
    <div className='ProfileLeftbar'>
        <div className='NotificationsContainer'>
            <img src={`${Image}`} className='ProfilePageCover' alt="" />
            <div style={{display:"flex", alignItems:"center", marginTop:-30}}>
                <img src={`${Image2}`} className='ProfilepageImage' alt="" />
                <div>
                    <p style={{marginLeft:6, marginTop:20, color:"white", textAlign:"start"}}>Doreen</p>
                    <p style={{marginLeft:6, marginTop:20, color:"white", textAlign:"start", marginTop:-16, fontSize:11}}>FullStack Developer</p>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:'space-between'}}>
                <p style={{color:"white", marginLeft:20, fontSize:"14px" }}>Profile Views</p>
                <p style={{color:"white", marginRight:20, fontSize:"12px", marginTop:17}}>2341</p>
            </div>

            <div style={{display:"flex", justifyContent:'space-between', marginTop:-20}}>
                <p style={{color:"white", marginLeft:20, fontSize:"14px" }}>Friends</p>
                <p style={{color:"white", marginRight:20, fontSize:"12px", marginTop:17}}>229</p>
            </div>

            <div style={{marginTop:-20}}>
                <p style={{color:"white", marginLeft:10, fontSize:"14px", marginRight:30, marginTop:30, textAlign:"start" }}>User Bio</p>
                <p style={{color:"white", fontSize:"12px", marginTop:-10, textAlign:"start", marginLeft:"10px"}}>I would rather be loved for whom I am than to be loved for a charade.</p>
            </div>
            <button style={{width:"100%", paddingTop:7, paddingBottom:7, border:"none",backgroundColor:"green", color:"white"}}>Edit Bio</button>
        </div>

        <div className='NotificationsContainer'>
            <h3 style={{color:"white"}}>Your friends</h3>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <p style={{marginLeft:10, color:"white"}}>Friends</p>
                <p style={{marginRight:10, color:"#aaa"}}>See all</p>
            </div>
            <div style={{display:"flex", flexWrap:"wrap", marginLeft:5}}>
                <div style={{marginLeft:4}}>
                    <img src={`${Image1}`} className='friendimage' alt="" />
                    <p style={{color:"white", marginTop:-2}}>Dan Jace</p>
                </div>
                <div style={{marginLeft:4}}>
                    <img src={`${Image2}`} className='friendimage' alt="" />
                    <p style={{color:"white", marginTop:-2}}>James</p>
                </div>
                <div style={{marginLeft:4}}>
                    <img src={`${Image3}`} className='friendimage' alt="" />
                    <p style={{color:"white", marginTop:-2}}>Sandra</p>
                </div>
                <div style={{marginLeft:4}}>
                    <img src={`${Image4}`} className='friendimage' alt="" />
                    <p style={{color:"white", marginTop:-2}}>Baddie</p>
                </div>
                <div style={{marginLeft:4}}>
                    <img src={`${Image5}`} className='friendimage' alt="" />
                    <p style={{color:"white", marginTop:-2}}>Fred</p>
                </div>
                <div style={{marginLeft:4}}>
                    <img src={`${Image6}`} className='friendimage' alt="" />
                    <p style={{color:"white", marginTop:-2}}>Fredo</p>
                </div>
            </div>
        </div> 
    </div>
  );
};
