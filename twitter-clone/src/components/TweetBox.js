import React , { useState } from 'react';
import '../styles/tweetbox.css'
import { Avatar,Button } from '@mui/material';
import db from '../firebase';
import { doc, addDoc,collection} from 'firebase/firestore';

const TweetBox = () => {
  const [tweetDesc,setTweetDesc]=useState('');
  const [imgUrl,setImgUrl]=useState('');

  const sendTweet=async(e)=>{
    e.preventDefault();
          await addDoc(collection(db,'posts'),{
            displayName:'Ashish Raj' ,
            userName:'7lash' ,
            text: tweetDesc ,
            image: imgUrl,
            verified:true ,
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThrHxSnxSJWZ3xXBACzaG48dzoeSlYAJstmQ&usqp=CAU",
          
          });
    setTweetDesc('');
    setImgUrl('');
    
}



  return (
    <div className='tweetbox'>
      <form >
        <div className="tweetbox__input">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI432NVuvy_67OPXUVhtUBMA83m2cS-m5-Q&usqp=CAU" />
            <input 
            onChange={e => setTweetDesc(e.target.value)}
            value={tweetDesc} 
            type="text" 
            placeholder=" whats's Hapenning? " />
        </div>
         <input 
         onChange={e => setImgUrl(e.target.value)}
         value={imgUrl}
         type="text" 
         placeholder='Optional : Enter image URL '  
         className='tweetbox__imageInput' />
        <Button type="submit"  onClick={sendTweet}  className='tweetbox__Btn'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
