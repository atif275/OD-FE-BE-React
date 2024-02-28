import "./HomeStyles.css";
import TimeLineHome from './TimeLineHome';
import Map from './Map'
import React, { useState, useRef } from 'react';
import placeholderImg from '../video/img6.png';
// import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
// import { EditControl} from "react-leaflet-draw";
// import "leaflet/dist/leaflet.css";
// import "leaflet-draw/dist/leaflet.draw.css";
// import { React } from "react";
import backgroundVideo from "../video/video4.mp4";
import img from "../video/img2.png";
import Widget from "./Widget";
import RightSideBar from "./RightSideBar";
const Home = () => {
  const [currentVideoSrc, setCurrentVideoSrc] = useState({ src: '', data: [] , drone:[] });
  const videoRef = useRef(null);

  const handleVideoSelect = (src) => {
    setCurrentVideoSrc(src);
  };

  return (
    <div className="homepage">
      
       <div id="widget">
        <Widget onVideoSelect={handleVideoSelect} />
       </div>
       {currentVideoSrc.src ? (
        <video id="player" ref={videoRef} src={currentVideoSrc.src} controls autoPlay />
      ) : (
        <img  id = "player" src={placeholderImg} alt=" "  />
      )}
      
      {/* <video  id="player" ref={videoRef} src={currentVideoSrc.src} controls autoPlay /> */}
      {/* <video  id="player" src={currentVideoSrc} controls autoPlay /> */}
      {/* <video id="player" controls autoPlay loop muted>
        <source src={backgroundVideo} />
      </video> */}
      <div id="picture">
        <Map/>

      </div>
      
      {/* <picture id="picture">
        <source srcSet={img} />
        <img src={img} alt="Descriptive text for the image" />
      </picture> */}

      <RightSideBar videoRef={videoRef} data={currentVideoSrc.data} drone={currentVideoSrc.drone}  />
      <div id= "bottom-timeline">
      <TimeLineHome data={currentVideoSrc.data} />

      </div>
      {/* <div id="widget">
        <Widget/>
      </div> */}
      {/* <Widget /> */}

      {/* <div id="video-bar">

      <video id="playerr" controls autoPlay loop muted>
        <source src={backgroundVideo} />
      </video>

      <video id="playerrr" controls autoPlay loop muted>
        <source src={backgroundVideo} />
      </video>
       
      
      </div> */}
      
      

      {/* <div className="bg-overlay"></div>
        <div className="hometext">
            <h1>Echelon Object Detection</h1>
            <h3>Powered By Advance AI tools</h3>
        </div> */}
    </div>
  );
};

export default Home;
