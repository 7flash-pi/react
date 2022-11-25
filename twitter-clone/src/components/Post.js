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
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI432NVuvy_67OPXUVhtUBMA83m2cS-m5-Q&usqp=CAU'/>
      </div>
      <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>Sifu Raza{" "}
                     <span className='post__headerSpecial'>
                         <VerifiedRounded  className='post_badge'/>@SifuRaza   </span>
                     </h3>
                </div>

                <div className="post__headerDescription">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure libero dolores quos consequatur blanditiis fuga hic quisquam animi, dolorem et.</p>
                </div>
            </div>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCSoAcwVcztL6bDnd9BCVb6xaov4RFH7aDw&usqp=CAU" alt="" />

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
