import React from 'react';
import '../styles/post.css';
import { Avatar,  } from '@mui/material';
import { VerifiedRounded } from '@mui/icons-material'; 
import { ChatBubbleOutline } from '@mui/icons-material';
import { Repeat } from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';
import { Publish } from '@mui/icons-material';

const Post = ({displayName,
    userName,
    verified,
    image,
    text,
    avatar  }) => {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>{displayName}{" "}
                     <span className='post__headerSpecial'>
                       { verified && <VerifiedRounded  className='post_badge'/> }  @{userName}   </span>
                     </h3>
                </div>

                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>

            <img src={image} alt="" />

            <div className="post__footer">
                <ChatBubbleOutline fontSize='small'/>
                <Repeat fontSize='small'/>
                <FavoriteBorder fontSize='small'/>
                <Publish     fontSize='small'/>

            </div>
      </div>
    </div>
  )
}

export default Post
