import React from 'react';
import "./ProfileMainPost.css";
import coverImage from "../Images/Profile.png";
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';

export default function ProfileMainPost() {
  return (
    <div className='profileMainPostContainer'>
        <div>
            <img src={`${coverImage}`} className='profileCoverImage' alt="" />
            <h2 style={{marginTop:-43, color:"white", textAlign:"start", marginLeft:"28px"}}>Your Profile</h2>
        </div>
        <ContentPost/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
