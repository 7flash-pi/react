import React, { useRef, useState } from 'react'
import '../style/VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

const VideoCard = () => {

  const videoRef=useRef(null);
  const [isVideoPlaying,setIsVideoPlaying]=useState(false);

  const onVideoPress=()=>{
    if(isVideoPlaying){
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }else{
      videoRef.current.play();
      setIsVideoPlaying(true);
    }

  }

  return (
    <div className='videoCard'>
      <VideoHeader />
        <video 
         ref={videoRef}
         onClick={onVideoPress}
         className='videocard_player'
         src='./reels.mp4'
          loop alt="ig Reel Video" />

       <VideoFooter />
    
      
    </div>
    
  )
}

export default VideoCard
