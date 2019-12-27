import "./VideoItem.css";
import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui container">
        <div class="ui active dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="video-detail ui embed">
        <iframe
          title="video player"
          width="560"
          height="315"
          src={videoSrc}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
