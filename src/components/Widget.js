import React, { useEffect, useRef, useState } from "react";
import "./widgetStyles.css"; // Make sure this path matches the location of your CSS file
import img from "../video/img2.png";
import video from "../video/video.mp4";
import video1 from "../video/video1.mp4";
import video2 from "../video/video2.mp4";
import video3 from "../video/video3.mp4";
import video4 from "../video/video4.mp4";
import video5 from "../video/video5.mp4";
import json from '../data/video.json';
import json1 from '../data/video1.json';
import json2 from '../data/video2.json';
import json3 from '../data/video3.json';
import json4 from '../data/video4.json';
import json5 from '../data/video5.json';

const videos = [
    { id: 0, title: 'Video ', src: video, data: json },
    { id: 1, title: 'Video 1', src: video1, data: json1 },
    { id: 2, title: 'Video 2', src: video2, data: json2 },
    { id: 3, title: 'Video 3', src: video3, data: json3 },
    { id: 4, title: 'Video 4', src: video4, data: json4 },
    { id: 5, title: 'Video 5', src: video5, data: json5 }
];
const drones=[
  {id:0 , drone:'WatchfulWing',  model: "Main ODJ577 A model", altitude:"60M" , temperature:"70F" , speed: "40KN"},
  {id:1 , drone:'StealthScout1', model: "Main ODJ677 A model", altitude:"65M" , temperature:"75F" , speed: "45KN"},
  {id:2 , drone:'StealthScout2', model: "Main ODJ777 A model", altitude:"70M" , temperature:"80F" , speed: "50KN"},
  {id:3 , drone:'SentinelEye',  model: "Main OVM123 A model", altitude:"90M" , temperature:"60F" , speed: "40KN"},
  {id:4 , drone:'StealthScout3',  model: "Main ODJ000 A model", altitude:"200M" , temperature:"90F" , speed: "60KN"},
  {id:5 , drone:'StealthScout4',  model: "Main ODJ999 A model", altitude:"50M" , temperature:"70F" , speed: "20KN"},
  {id:6 , drone:'WatchfulWing2',  model: "Main ODJ616 A model", altitude:"400M" , temperature:"50F" , speed: "10KN"},
  {id:7 , drone:'WatchfulWing3',  model: "Main ABC987 K model", altitude:"30M" , temperature:"100F" , speed: "30KN"}
]

const Widget = ({ onVideoSelect }) => {
  const eventsRef = useRef(null);

  useEffect(() => {
    const events = eventsRef.current;

    const handleMouseDown = (e) => {
      events.style.cursor = "grabbing";
      const isDown = true;
      const startX = e.pageX - events.offsetLeft;
      const startY = e.pageY - events.offsetTop;
      const scrollLeft = events.scrollLeft;
      const scrollTop = events.scrollTop;

      const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - events.offsetLeft;
        const y = e.pageY - events.offsetTop;
        const walkX = (x - startX) * 1;
        const walkY = (y - startY) * 1;
        events.scrollLeft = scrollLeft - walkX;
        events.scrollTop = scrollTop - walkY;
      };

      const handleMouseUpOrLeave = () => {
        events.style.cursor = "grab";
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUpOrLeave);
        window.removeEventListener("mouseleave", handleMouseUpOrLeave);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUpOrLeave);
      window.addEventListener("mouseleave", handleMouseUpOrLeave);
    };

    events.addEventListener("mousedown", handleMouseDown);

    return () => {
      events.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  // Handling the scroll buttons
  const scroll = (offset) => {
    eventsRef.current.scrollBy({ top: 0, left: offset, behavior: "smooth" });
  };

  return (
    <div className="container">
      {/* <div className="top-bar">
        <h2>Upcoming events</h2>
        <button type="button" onClick={() => scroll(-200)} className="action-button--horizontal-scroll">Left</button>
        <button type="button" onClick={() => scroll(200)} className="action-button--horizontal-scroll">Right</button>
      </div> */}
      <div ref={eventsRef} id="events" className="events">
        {/* Map your events here */}
        <a
          href="#the-weeknd"
          className="event"
          onClick={() => onVideoSelect({ src: video1, data: json1, drone:drones[0]  })}
        >
          <div className="event_image">
            <video controls autoPlay loop muted>
              <source src={video1} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
          </div>
          <div className="event-description">
            <h2>WatchfulWing</h2>
            <div className="bottom-stats">Main ODJ577 A model</div>
          </div>
        </a>
        <a
          href="#the-weeknd"
          className="event"
          onClick={() => onVideoSelect({ src: video2, data: json2 , drone:drones[1]})}
        >
          <div className="event_image">
            <video controls autoPlay loop muted>
              <source src={video2} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
          </div>
          <div className="event-description">
            <h2>StealthScout1</h2>
            <div className="bottom-stats">Main ODJ677 A model</div>
          </div>
        </a>
        <a href="#the-weeknd" className="event" onClick={() => onVideoSelect({ src: video3, data: json3 , drone:drones[2]})}>
          <div className="event_image">
            <video controls autoPlay loop muted>
              <source src={video3} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
          </div>
          <div className="event-description">
            <h2>StealthScout2</h2>
            <div className="bottom-stats">Main ODJ777 A model</div>
          </div>
        </a>
        <a href="#the-weeknd" className="event" onClick={() => onVideoSelect({ src: video, data: json , drone:drones[3]})}>
          <div className="event_image">
            <video controls autoPlay loop muted>
              <source src={video} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
          </div>
          <div className="event-description">
            <h2>SentinelEye</h2>
            <div className="bottom-stats">Main OVM123 A model</div>
          </div>
        </a>

        <a href="#the-weeknd" className="event" onClick={() => onVideoSelect({ src: video4, data: json4, drone:drones[4]})}>
          <div className="event_image">
            <video controls autoPlay loop muted>
              <source src={video4} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
          </div>
          <div className="event-description">
            <h2>StealthScout3</h2>
            <div className="bottom-stats">Main ODJ000 A model</div>
          </div>
        </a>

        <a href="#the-weeknd" className="event" onClick={() => onVideoSelect({ src: video5, data: json5 , drone:drones[5]})}>
          <div className="event_image">
            <video controls autoPlay loop muted>
              <source src={video5} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
          </div>
          <div className="event-description">
            <h2>StealthScout4</h2>
            <div className="bottom-stats">Main ODJ999 A model</div>
          </div>
        </a>

        <a href="#the-weeknd" className="event" onClick={() => onVideoSelect({ src: video1, data: json1, drone:drones[6] })}>
          <div className="event_image">
            <video controls autoPlay loop muted>
              <source src={video1} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
          </div>
          <div className="event-description">
            <h2>WatchfulWing2</h2>
            <div className="bottom-stats">Main ODJ616 A model</div>
          </div>
        </a>

        <a href="#the-weeknd" className="event"  onClick={() => onVideoSelect({ src: video2, data: json2 , drone:drones[7]})}>
          <div className="event_image">
            <video controls autoPlay loop muted>
              <source src={video2} />
            </video>
            {/* <img src={img} alt="The Weeknd" /> */}
          </div>
          <div className="event-description">
            <h2>WatchfulWing3</h2>
            <div className="bottom-stats">Main ABC987 K model</div>
          </div>
        </a>

        {/* More events */}
      </div>
    </div>
  );
};

export default Widget;
