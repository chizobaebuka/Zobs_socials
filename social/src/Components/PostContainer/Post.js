import React, {useState} from 'react';
import "./Post.css";
import ProfileImage from "../Images/Profile.png";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import ShareIcon from "../Images/share.png";
import MoreOption from "../Images/more.png";
import anotherLikeIcon from "../Images/setLike.png"

export default function Post() {
    const [like, setLike] = useState(LikeIcon);
    const [count, setCount] = useState(10);
    const [comments, setComments] = useState([]);
    const [commentWriting, setCommentWriting] = useState('');
    const [show, setShow] = useState(false);

    const handleLike = () => {
        if(like === LikeIcon){
            setLike(anotherLikeIcon);
            setCount(count + 1)
        }else{
            setLike(LikeIcon);
            setCount(count - 1)
        }
    }

    const addComment = () => {
        const comment = {
            "id": "61fsbf23123125123123",
            "username": "dorcas",
            "title": `${commentWriting}`
        }
        setComments(comments.concat(comment))
    }

    const handleComment = () => {
        addComment();
    }

    const handleShow = () => {
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    // console.log(comments);

    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>
                <div>
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
                        <img src={`${ProfileImage}`} className='PostImage' alt="" />
                        <div>
                            <p style={{ marginLeft: "5px", textAlign: "start" }}>Marcos</p>
                            <p style={{ fontSize: "10px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}>Following by Dorcas</p>
                        </div>
                        <img src={`${MoreOption}`} className='moreicons' alt="" />
                    </div>
                    <p style={{ textAlign: "start", width: "96%", marginLeft: 6, marginTop: 0 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi earum quo fugit doloribus corrupti iure.....</p>
                    <img src={`${ProfileImage}`} className='PostImages' alt="" />
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <img src={`${like}`} className='iconsForPost' onClick={handleLike} alt="" />
                                <p style={{ marginLeft: "6px" }}>{count} Likes </p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", marginLeft: 20, cursor: "pointer" }}>
                                <img src={`${CommentIcon}`} className='iconsForPost' onClick={handleShow} alt="" />
                                <p style={{ marginLeft: "6px" }}>88k Comments</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: 180, cursor: "pointer" }}>
                            <img src={`${ShareIcon}`} className='iconsForPost' alt="" />
                            <p style={{ marginLeft: "6px" }}>Share</p>
                        </div>
                    </div>
                    {show === true ? 
                        <div style={{padding: "10px"}}>
                            <div style={{display:"flex", alignItems:'center'}}>
                                <img src={`${ProfileImage}`} className='PostImage' alt="" />
                                {/* <p style={{marginLeft:"6px"}}>Dorcas</p> */}
                                <input className='commentInput' placeholder='Add a comment' type="text" onChange={(e) => setCommentWriting(e.target.value)}/>
                                <button className='addButtonbtn' onClick={handleComment} >Post</button>
                            </div>
                            {comments.map((item) => (
                                <div style={{alignItems:'center'}}>
                                    <div style={{display:"flex", alignItems:"center"}}>
                                        <img src={`${ProfileImage}`} className='PostImage' alt="" />
                                        <p style={{marginLeft:"6px",fontSize:15, fontWeight:"bold", marginTop:6}}>{item.username}</p>  
                                    </div>
                                    <p style={{marginLeft:"55px", textAlign:"start", marginTop:-16}}>{item.title}</p>
                                    <p style={{marginLeft:"55px", textAlign:"start ", marginTop:-10, color:"#aaa", fontSize:11}}>Reply</p>
                                    
                                </div>
                            ))}
                        </div> : ``
                    }
                </div>
            </div>
        </div>
    );
};
