import React   from 'react';
import "../styles/feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import { useState , useEffect } from "react";
import db from '../firebase';
import {  getDocs ,collection } from "firebase/firestore";


const Feed = () => {
const [posts,setPosts]=useState([]);

  /*const getPosts= async() =>{
    const colRef = collection(db,'posts');
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(docs => {
      setPosts(docs.data());
      console.log(docs.data());
      }) 
  } */
async function getPosts() {
    const snapshot = await db.collection('posts').get()
    snapshot.forEach(doc => {
       const document = { [doc.id]: doc.data() };
       setPosts([...posts,document])
    })
}



useEffect(()=>{
  getPosts();
        

},[])

  return (
    <div className='feed'>
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <Post 
        displayName={posts.displayName}
        userName={posts.userName}
        verified={posts.verified}
        image={posts.image}
        text={posts.text}
        avatar={posts.avatar}

      />
      
    </div>
  )
}

export default Feed
