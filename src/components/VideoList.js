import React from 'react';
import VideoItem from './VideoItem';

//refactored line below instead of using props we deconstruct to {videos}
const VideoList = ({videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.VideoId} onVideoSelect={onVideoSelect} video={video}/>;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
