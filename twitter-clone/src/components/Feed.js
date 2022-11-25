import React from 'react';
import "../styles/feed.css";
import TweetBox from './TweetBox';
import Post from './Post';


const Feed = () => {
  return (
    <div className='feed'>
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />

    </div>
  )
}

export default Feed
