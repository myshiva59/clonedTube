import "./VideoItem.css";
import React from "react";

function VideoItem({ video, onSelect }) {
  return (
    <div className="video-item item" onClick={() => onSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title.slice(0, 50)}</div>
        <div className="description">
          {video.snippet.description.slice(0, 50)}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
