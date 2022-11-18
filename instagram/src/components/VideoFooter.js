import React from 'react';
import '../style/VideoFooter.css';

import { Button, Avatar } from '@mui/material';
import { MusicNote } from '@mui/icons-material';
import Ticker from 'react-ticker';


const VideoFooter = ({channel, avatarSrc, song, likes, shares}) => {
  return (
    <div className='videoFooter'>
      <div className="videoFooter_text">
        <Avatar srcSet={avatarSrc}/>
        <h3>{channel} •<Button>Follow</Button></h3>
        
      </div>
      
    </div>
  )
}

export default VideoFooter
