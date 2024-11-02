// BackgroundVideo.js
import React from "react";
import "./video.css";

function Video() {
  return (
    <div className="video-container">
      <h1 className="heading">Navigate your next</h1>
      <video className="video" autoPlay loop muted>
        <source src="https://cdn.pixabay.com/video/2018/02/19/14385-256955049_large.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
