import React   from 'react';
import "../styles/feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import { useState , useEffect } from "react";
import db from '../firebase';
import {  onSnapshot, collection, query } from "firebase/firestore";


const Feed = () => {
const [posts,setPosts]=useState([]);

useEffect(() => {
        const q = query(collection(db, "posts"))
     const unsub = onSnapshot(q, (querySnapshot) => {
     const newPosts=querySnapshot.docs.map(d => d.data());
     setPosts(newPosts);
     console.log(posts);;
  });
},[])


  return (
    <div className='feed'>
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />

    {posts.map((singlePost)=>
      <Post key={singlePost.text}
        displayName={singlePost.displayName}
        userName={singlePost.userName}
        verified={singlePost.verified}
        image={singlePost.image}
        text={singlePost.text}
        avatar={singlePost.avatar}

      />

    )}
      

    
      
    </div>
  )
}

export default Feed
