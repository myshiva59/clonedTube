import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  renderVideos = video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onSelect={this.props.onSelect}
      />
    );
  };
  render() {
    return (
      <div className="ui relaxed divide list">
        {this.props.videos.map(this.renderVideos)}
      </div>
    );
  }
}

export default VideoList;
