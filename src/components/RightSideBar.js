import React, { useState, useEffect, useRef } from "react";
import "./RightSideBarStyles.css";
import VerticalTimeline from "./VerticleTimeline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TimeLine from "./TimeLine";
import placeholderImgg from "../video/img7.png";
import temp from "../video/temp.png";
import alt from "../video/alt.png";
import speed from "../video/speed.png";
import { FaCircle } from "react-icons/fa";

const RightSideBar = ({ videoRef, data, drone }) => {
  const colors = [
    "text-blue-500",
    "text-red-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
  ]; // Add more colors as needed

  const renderDetailOrDash = (detail) => {
    return detail ? detail : "*****";
  };
  const [detectedObjects, setDetectedObjects] = useState([]);
  const [selectedImageSrc, setSelectedImageSrc] = useState(null);

  // const [processedTimes, setProcessedTimes] = useState(new Set());

  useEffect(() => {
    setDetectedObjects([]); // Reset on data change to clear previously detected objects

    // Local set to track processed times immediately within the effect
    const processedTimesLocal = new Set();

    const handleTimeUpdate = () => {
      const currentTime = Math.floor(videoRef.current.currentTime);
      // Use the local set to check if this time has already been processed
      if (processedTimesLocal.has(currentTime)) return;

      const currentDetections = data.filter(
        (detection) => detection.time === currentTime
      );

      if (currentDetections.length > 0) {
        const newDetections = currentDetections.flatMap((detection, index) =>
          detection.objects.map((obj, objIndex) => ({
            time: currentTime,
            obj,
            // Assuming each object in the "objects" array has a corresponding entry in the "coordinates" array
            coordinates: detection.coordinates[objIndex],
          }))
        );
        // Update detected objects with new detections
        setDetectedObjects((prevDetectedObjects) => [
          ...prevDetectedObjects,
          ...newDetections,
        ]);
        // Mark this time as processed in the local set
        processedTimesLocal.add(currentTime);
      }
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
    }

    // Cleanup function to remove the event listener
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [videoRef, data]); // Rerun effect when videoRef or data changes

  const getBulletColorClass = (index) => {
    // Cycle through 0 (grey), 1 (yellow), and 2 (red)
    const colorIndex = index % 3;
    switch (colorIndex) {
      case 0:
        return "bullet-color-grey";
      case 1:
        return "bullet-color-yellow";
      case 2:
        return "bullet-color-red";
      default:
        return ""; // Fallback, should not happen
    }
  };

  return (
    <>
      <div id="RightSideBar">
        <div id="box">
          <div className="flex items-center justify-start space-x-3">
            <img
              id="icons"
              src={placeholderImgg} // Replace with your drone image source
              alt="Drone"
              className="w-20 h-20" // Adjust size as needed
            />

            <div className="flex flex-col text-xs">
              <p>{renderDetailOrDash(drone.drone)}</p>
              <p>{drone.model}</p>
            </div>

            <img
              id="icons"
              src={alt} // Replace with your second image source
              alt="altitude Image"
              className="w-20 h-20" // Adjust size as needed
            />

            <div className="flex flex-col text-xs">
              <p>{renderDetailOrDash(drone.altitude)}</p>
            </div>

            <img
              id="icons"
              src={temp} // Replace with your second image source
              alt="temperature Image"
              className="w-20 h-20" // Adjust size as needed
            />

            <div className="flex flex-col text-xs">
              <p>{renderDetailOrDash(drone.temperature)}</p>
            </div>
            <img
              id="icons"
              src={speed} // Replace with your second image source
              alt="speed Image"
              className="w-20 h-20" // Adjust size as needed
            />

            <div className="flex flex-col text-xs">
              <p>{renderDetailOrDash(drone.speed)}</p>
            </div>
          </div>
        </div>

        <div id="TimeLine">
          <TimeLine data={detectedObjects} />
        </div>
        {/* <div>
          <VerticalTimeline data={data}/>

        </div> */}

        <div id="listbar">
          <ul className="detected-object-list">
            {detectedObjects.map((item, index) => (
              <div
                id="each_event"
                className="flex items-start relative cursor-pointer"
                key={index}
                onClick={() => setSelectedImageSrc(item.image)}
              >
                <div className="mr-4 mt-0">
                  <FaCircle
                    className={`text-base ${colors[index % colors.length]}`}
                  />
                </div>
                <div
                  id="data-box"
                  className="flex flex-col mt-2 mb-2 hover:bg-blue-900 hover:bg-opacity-30 "
                >
                  <div id="detected-object-time" className="text-xs">
                    {item.time} sec
                  </div>
                  <div id="detected-object-text" className="text-xs">
                    {item.obj}
                  </div>
                  {item.coordinates && (
                    <div
                      id="detected-object-coord "
                      className="detected-object-coordinates"
                    >
                      {item.coordinates.split("/").map((line, idx) => (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
                {/* Image */}
                {/* <div className="ml-auto">
                  <img
                    src={item.image}
                    alt="Img"
                    className="w-22 h-20 mt-2 mr-3 border"
                  />
                </div> */}
                {/* Vertical line */}
                {index !== data.length - 1 && (
                  <div className="absolute top-4 left-2 bottom-0 w-0.5 bg-gray-700 bg-opacity-200" />
                )}
                {/* Horizontal line */}
                {index !== data.length - 1 && (
                  <div className="absolute left-2 top-24 w-40 h-0.5 bg-gray-700 bg-opacity-200" />
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* <div id="listbar">
          <ul className="detected-object-list">
            {detectedObjects.map((item, index) => (
              <li
                key={index}
                className={`detected-object-card ${getBulletColorClass(index)}`}
              >
                <div className="detected-object-time">{item.time} sec</div>
                <div className="detected-object-text">{item.obj}</div>
                {item.coordinates && (
                  <div className="detected-object-coordinates">
                    {item.coordinates.split("/").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default RightSideBar;
