import React, { useRef, useState } from 'react'
import '../style/VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

const VideoCard = ({channel, song , avatarSrc, likes ,shares , url}) => {

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
         src={url}
          loop alt="ig Reel Video" />

       <VideoFooter 
       channel={channel}
       song={song}  
       avatarSrc={avatarSrc}
       likes={likes} 
       shar={shares}/>
    
      
    </div>
    
  )
}

export default VideoCard
