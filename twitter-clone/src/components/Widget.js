import React from 'react';
import '../styles/Widget.css';
import { Search } from '@mui/icons-material';
import { TwitterTimelineEmbed, 
TwitterShareButton,TwitterTweetEmbed } from 'react-twitter-embed';

const Widget = () => {
  return (
    <div className='widget'>
      <div className="widget__input">
        <Search className='widget__searchIcon'/>  
        <input type="text"
        placeholder='Search Twitter' />  
      </div>
      <div className="widget__widgetContainer">
        <h2>Whats Happening</h2>

        <TwitterTweetEmbed tweetId={"1596365751476068353"} />

        <TwitterTimelineEmbed sourceType='profile'
        screenName='imVkohli'
        options={{height:400}}  />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "Ashish" }}
          className="twitterShare__Btn"
        />

      </div>

    </div>
  )
}

export default Widget
