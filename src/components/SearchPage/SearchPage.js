import React from "react";
import "./SearchPage.css";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training 👉 https://event.webinarjam.com/register..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRMD_IVV-27y7bIzbZESPlIyee1g"
      />

      <VideoRow
        views="102K"
        subs="1.1M"
        description="Join the REACT challenge (7th September) 👉 https://www.cleverprogrammer.com/5-da...
        In this FREE LIVE training, Sonny and David will build a MERN Tik-Tok Clone LIVE  and deploy it on firebase & heroku! 🚀🔥 ."
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="🔴 Build a TIK TOK Clone with MERN Stack (MongoDB, Express, React, Node JS)"
        image="https://i.ytimg.com/vi/g8yGxDMyGiE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4Qu5KrFzHTo0gEnmUUyvcdNVW0A"
      />

      <VideoRow
        views="2.2M"
        subs="1.1M"
        description="🚀  Learn React JS for FREE: https://www.cleverprogrammer.com/free...
        If you want to enroll in an EPIC Python course where you can have exercises and projects all under one account & for FREE... Click this link: https://cleverprogrammer.teachable.co..."
        timestamp="2 years ago"
        channel="Clever Programmer"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-xXKxkdEcnQSRc2t89jCM32_R5g"
      />

      <VideoRow
        views="80K"
        subs="1.1M"
        description="⭐ Join the BEST Discord Community for Developers on the planet 👉  https://www.cleverprogrammer.com/discord
        🔻 All images included in the Tesla Clone: https://drive.google.com/drive/folder..."
        timestamp="9 months ago"
        channel="Clever Programmer"
        title="🔴 Building the Tesla Clone with ReactJS (Redux + Styled Components)"
        image="https://i.ytimg.com/vi/lUeS9Wsj6dk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3xGLuOPq3VycdTCW-tNOVpLB_nw"
      />

      <VideoRow
        views="427K"
        subs="1.1M"
        description="🚀  Learn React JS for FREE: https://www.cleverprogrammer.com/free...
        ⭐  Join the BEST Discord Community for Developers on the planet 👉  https://www.cleverprogrammer.com/discord"
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="🔴 How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)"
        image="https://i.ytimg.com/vi/XtMThy8QKqU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCI2d1IF5Sf3lU40MmoKNGHxHk09g"
      />
      <hr />
    </div>
  );
}

export default SearchPage;
