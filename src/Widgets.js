import React from 'react';
import'./Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="Widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
      <h2>What's Happpening</h2>
      <TwitterTweetEmbed tweetId={"1692431667548528661"} />

      <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/elonmusk"}
          options={{ text: "#X is awesome", via: "elonmusk" }}
        />

      </div>
    </div>
  );
}

export default Widgets;
