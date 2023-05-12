import React from 'react';
import "./ContentPost.css";
import ProfileImage from "../Images/Profile.png";
import ImageIcon from "../Images/gallery.png"
import emojiIcon from "../Images/cat-face.png"
import videoIcon from "../Images/video.png"

export default function ContentPost() {
  return (
    <div>
        <div className='contentUploadContainer'>
            <div style={{display:"flex", alignItems:"center", padding:10}}>
                <img src={`${ProfileImage}`} className='profileImage' alt="" />
                <input type="text" className="contentWritingPart" placeholder='Write your Thoughts....'/>
            </div>
            <div style={{display:"flex", marginLeft:"10px"}}>
                <div>     
                    <img src={`${ImageIcon}`} className='icons' alt="" />
                    <img src={`${emojiIcon}`} className='icons' alt="" />
                    <img src={`${videoIcon}`} className='icons' alt="" />
                    <button style={{marginLeft:"35px", paddingLeft:"15px", paddingRight:"15px", paddingTop:6, paddingBottom:6, border:"none", backgroundColor:"black", color:"white", borderRadius:"10px", cursor:"pointer" }}>Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}
