import React from 'react';
import "./ProfileRightbar.css";
import ads from "../Images/ads.jpg";
import Image3 from "../Images/image3.jpg";
import Image2 from "../Images/image2.jpg";
import Image1 from "../Images/image1.jpg";
import Image4 from "../Images/image4.jpg";
import Image5 from "../Images/image5.jpg";
import Image6 from "../Images/image6.jpg";
import addFriends from "../Images/add-user.png";

export default function ProfileRightbar() {
  return (
    <div className='ProfileRightbar'>
        <div className="profilerightcontainer">
            <h3>Friend Request</h3>
            <div>
                <div>
                    <div style={{display:"flex", alignItems:"center", marginLeft:10, cursor:"pointer" }}>
                        <img src={`${Image1}`} className='friendsImage' alt="" />
                        <p style={{textAlign:"start", marginLeft:"10px"}}>Jane wants to be friends with you</p>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around", cursor:"pointer"}}>
                        <button style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
                        <button style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Reject</button>
                    </div>
                </div>
                <div>
                    <div style={{display:"flex", alignItems:"center", marginLeft:10, cursor:"pointer" }}>
                        <img src={`${Image2}`} className='friendsImage' alt="" />
                        <p style={{textAlign:"start", marginLeft:"10px"}}>Jane wants to be friends with you</p>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around", cursor:"pointer"}}>
                        <button style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
                        <button style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Reject</button>
                    </div>
                </div>
                <div>
                    <div style={{display:"flex", alignItems:"center", marginLeft:10, cursor:"pointer" }}>
                        <img src={`${Image4}`} className='friendsImage' alt="" />
                        <p style={{textAlign:"start", marginLeft:"10px"}}>Jane wants to be friends with you</p>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-around", cursor:"pointer"}}>
                        <button style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Accept</button>
                        <button style={{paddingLeft:"20px", paddingRight:"20px", paddingTop:5, paddingBottom:5, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px"}}>Reject</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="rightcontainer2">
            <h3 style={{textAlign:"start", marginLeft:"10px"}}>Suggested for you</h3>
            <div style={{marginTop:"-10px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={`${Image2}`} className='profileImage' alt="" />
                        <div>
                            <p style={{marginLeft:"10px", textAlign:"start"}}>Moses</p>
                            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"-16px" ,fontSize:"11px", color:"#aaa"}}>Suggested for you</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#aaa", padding:"8px", marginRight:13, borderRadius:"50%", cursor:"pointer"}}>
                        <img src={`${addFriends}`} className='addFriend' alt="" />
                    </div>
                </div>
            </div>
            <div style={{marginTop:"-10px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={`${Image1}`} className='profileImage' alt="" />
                        <div>
                            <p style={{marginLeft:"10px", textAlign:"start"}}>Dan Jok</p>
                            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"-16px" ,fontSize:"11px", color:"#aaa"}}>Followed by Suman Yo</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#aaa", padding:"8px", marginRight:13, borderRadius:"50%", cursor:"pointer"}}>
                        <img src={`${addFriends}`} className='addFriend' alt="" />
                    </div>
                </div>
            </div>
            <div style={{marginTop:"-10px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={`${Image4}`} className='profileImage' alt="" />
                        <div>
                            <p style={{marginLeft:"10px", textAlign:"start"}}>James</p>
                            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"-16px" ,fontSize:"11px", color:"#aaa"}}>Followed by Suman Yo</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#aaa", padding:"8px", marginRight:13, borderRadius:"50%", cursor:"pointer"}}>
                        <img src={`${addFriends}`} className='addFriend' alt="" />
                    </div>
                </div>
            </div>
            <div style={{marginTop:"-10px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={`${Image3}`} className='profileImage' alt="" />
                        <div>
                            <p style={{marginLeft:"10px", textAlign:"start"}}>Nelson</p>
                            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"-16px" ,fontSize:"11px", color:"#aaa"}}>Followed by Suman Yo</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#aaa", padding:"8px", marginRight:13, borderRadius:"50%", cursor:"pointer"}}>
                        <img src={`${addFriends}`} className='addFriend' alt="" />
                    </div>
                </div>
            </div>
            <div style={{marginTop:"-10px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={`${Image5}`} className='profileImage' alt="" />
                        <div>
                            <p style={{marginLeft:"10px", textAlign:"start"}}>Madan</p>
                            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"-16px" ,fontSize:"11px", color:"#aaa"}}>Followed by Suman Yo</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#aaa", padding:"8px", marginRight:13, borderRadius:"50%", cursor:"pointer"}}>
                        <img src={`${addFriends}`} className='addFriend' alt="" />
                    </div>
                </div>
            </div>
            <div style={{marginTop:"-10px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={`${Image6}`} className='profileImage' alt="" />
                        <div>
                            <p style={{marginLeft:"10px", textAlign:"start"}}>Eben</p>
                            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"-16px" ,fontSize:"11px", color:"#aaa"}}>Followed by Suman Yo</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#aaa", padding:"8px", marginRight:13, borderRadius:"50%", cursor:"pointer"}}>
                        <img src={`${addFriends}`} className='addFriend' alt="" />
                    </div>
                </div>
            </div>
            <div style={{marginTop:"-10px"}}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={`${Image2 }`} className='profileImage' alt="" />
                        <div>
                            <p style={{marginLeft:"10px", textAlign:"start"}}>Ken</p>
                            <p style={{marginLeft:"10px", textAlign:"start", marginTop:"-16px" ,fontSize:"11px", color:"#aaa"}}>Followed by Suman Yo</p>
                        </div>
                    </div>
                    <div style={{backgroundColor:"#aaa", padding:"8px", marginRight:13, borderRadius:"50%", cursor:"pointer"}}>
                        <img src={`${addFriends}`} className='addFriend' alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  );
};
