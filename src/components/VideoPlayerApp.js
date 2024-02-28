import React, { useState, useEffect } from 'react';
import backgroundVideo from "../video/video4.mp4";
const VideoPlayerApp = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(backgroundVideo);
    console.log(backgroundVideo);
  useEffect(() => {
    fetch('http://localhost:8000/api/videos')
      .then(response => response.json())
      .then(data => {
        setVideos(data);
        if (data.length > 0) {
          setCurrentVideo(data[0].url);
        }
      })
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const handleVideoChange = (videoUrl) => {
    console.log(videoUrl);
    setCurrentVideo(videoUrl);
  };

  return (
    <div>
      <video width="750" controls src={currentVideo} autoPlay />
      <div className="video-thumbnails">
        {videos.map(video => (
          <div key={video.id} onClick={() => handleVideoChange(video.url)} className="video-thumbnail">
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayerApp;
