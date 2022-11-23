import React from 'react';
import '../styles/tweetbox.css'
import { Avatar,Button } from '@mui/material';

const TweetBox = () => {
  return (
    <div className='tweetbox'>
      <form >
        <div className="tweetbox__input">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgI432NVuvy_67OPXUVhtUBMA83m2cS-m5-Q&usqp=CAU" />
            <input type="text" placeholder=" whats's Hapenning? " />
            {/*<input type="text" placeholder='Enter image url' /> */}
        </div>
        <Button className='tweetbox__Btn'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
