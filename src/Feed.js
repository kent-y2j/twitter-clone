import React, { useState, useEffect } from "react";
import TweetBox from './TweetBox';
import Post from './Post';
import "./Feed.css";



function Feed() {

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2> Home </h2>
      </div>

      {/* Tweetbox */}
      <TweetBox />

      {/*Post*/}
      <Post 
        displayName="kent"
        username="kenttesting"
        verified={true}
        text="its working!!!!"
        avatar="https://geekflare.com/wp-content/uploads/2022/10/Coding.png"
        image="https://media3.giphy.com/media/j5L4RHeV8Q5tmepRVb/giphy.gif?cid=ecf05e47ilgch6hr2dsis1hbk5enzw5aezh2n9xejkhgtkzr&ep=v1_gifs_search&rid=giphy.gif&ct=g"
       />


    </div>
  );
}

export default Feed;
