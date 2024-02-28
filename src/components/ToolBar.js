import { Component } from "react";
import "./ToolBarStyles.css";
import axios from 'axios';
import React, { useState } from 'react';
// import {Link} from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ToolBar = () => {
  const [streaming, setStreaming] = useState(false);
  const startStream = () => {
    axios.get('/start_stream')
      .then(response => {
        console.log('Start Stream:', response.data);
        document.getElementById('videoStream').src = '/video_feed';
        setStreaming(true);
      })
      .catch(error => console.error('Error:', error));
  };

  const stopStream = () => {
    axios.get('/stop_stream')
      .then(response => {
        console.log('Stop Stream:', response.data);
        document.getElementById('videoStream').src = '';
        setStreaming(false);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <div id="toolbar">
        <button id="button">
          <svg
            width="20px"
            height="auto"
            viewBox="0 0 17 18"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M4.443.359a.181.181 0 0 0-.345.012 4.392 4.392 0 0 1-2.884 2.984L1.07 3.4c-.173.055-.17.3.004.352l.062.018a4.35 4.35 0 0 1 2.962 3.014.18.18 0 0 0 .343.012l.065-.184a4.622 4.622 0 0 1 2.949-2.856c.175-.055.173-.303 0-.363A4.862 4.862 0 0 1 4.489.484L4.443.36Zm9.877 10.706a.137.137 0 0 0-.262.01 3.327 3.327 0 0 1-2.185 2.26l-.108.034a.14.14 0 0 0 .003.267l.047.014a3.296 3.296 0 0 1 2.244 2.283.136.136 0 0 0 .26.01l.049-.14a3.502 3.502 0 0 1 2.234-2.164c.132-.042.131-.23 0-.275a3.683 3.683 0 0 1-2.248-2.204l-.035-.095Z"
                fill="currentColor"
              ></path>
              <path
                data-follow-fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.167 1.988 1.089 13.066a2.5 2.5 0 0 0 0 3.535l.143.143a2.5 2.5 0 0 0 3.536 0L15.845 5.667l-3.678-3.679ZM8.78 7.732l-6.512 6.512a.833.833 0 0 0 0 1.178l.143.143a.833.833 0 0 0 1.178 0l6.512-6.512L8.78 7.732Zm2.607.036-1.322-1.322 2.102-2.1 1.321 1.32-2.101 2.102Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <button id="button">
          <svg
            width="20px"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            class="iconpark-icon"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M13 14.586V3h-2v11.586l-4.293-4.293-1.414 1.414 6 6a1 1 0 0 0 1.414 0l6-6-1.414-1.414L13 14.586Z"
                fill="currentColor"
              ></path>
              <path
                data-follow-fill="currentColor"
                d="M7 22a4 4 0 0 1-4-4h2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2h2a4 4 0 0 1-4 4H7Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <button id="button">
          <svg
            width="20px"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
            font-size="20"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M12 2c1.508 0 2.937.334 4.22.931l-1.532 1.532a8 8 0 1 0 4.901 4.998l1.543-1.543A9.964 9.964 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Z"
                fill="currentColor"
              ></path>
              <path
                data-follow-fill="currentColor"
                d="M18.014 4.621a.5.5 0 0 1 .707 0l.707.707a.5.5 0 0 1 0 .708l-4.345 4.345a3.502 3.502 0 0 1-5.554 4.14 3.5 3.5 0 0 1 4.14-5.555l4.345-4.345Zm-7.07 8.486a1.5 1.5 0 1 0 2.12-2.122 1.5 1.5 0 0 0-2.12 2.122Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <button id="button">
          <svg
            width="20px"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="m20 10-1-2H5l-1 2h16Zm-2-4-1-2H7L6 6h12Z"
                fill="currentColor"
              ></path>
              <path
                data-follow-fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 12h18v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6Zm2 2h14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <div id="space">|</div>

        <button id="button">
          <svg
            width="20px"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M8.94 3.146a.5.5 0 0 1 .707 0l.707.708a.5.5 0 0 1 0 .707L7.914 7H13.5a6.5 6.5 0 0 1 0 13H6.224l.535-2H13.5a4.5 4.5 0 0 0 0-9H7.914l2.44 2.44a.5.5 0 0 1 0 .706l-.707.708a.5.5 0 0 1-.708 0l-4.5-4.5a.5.5 0 0 1 0-.708l4.5-4.5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <button id="button">
          <svg
            width="20"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M15.354 3.146a.5.5 0 0 0-.707 0l-.707.708a.5.5 0 0 0 0 .707L16.379 7h-5.586a6.5 6.5 0 0 0 0 13h7.277l-.536-2h-6.741a4.5 4.5 0 0 1 0-9h5.586l-2.44 2.44a.5.5 0 0 0 0 .706l.708.708a.5.5 0 0 0 .707 0l4.5-4.5a.5.5 0 0 0 0-.708l-4.5-4.5Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <div id="space">|</div>

        <button id="button">
          <svg
            width="20"
            height="auto"
            viewBox="0 0 20 20"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 4.167H5A.833.833 0 0 0 4.167 5v10c0 .46.373.833.833.833h10c.46 0 .833-.373.833-.833V5A.833.833 0 0 0 15 4.167ZM5 2.5A2.5 2.5 0 0 0 2.5 5v10A2.5 2.5 0 0 0 5 17.5h10a2.5 2.5 0 0 0 2.5-2.5V5A2.5 2.5 0 0 0 15 2.5H5Zm3.455 4.045-1.91 1.91a.417.417 0 0 1-.712-.294V6.25c0-.23.187-.417.417-.417h1.91c.372 0 .558.45.295.712Zm3.09 6.91 1.91-1.91a.417.417 0 0 1 .712.294v1.911c0 .23-.187.417-.417.417h-1.91a.417.417 0 0 1-.295-.712Zm-5-1.91 1.91 1.91a.417.417 0 0 1-.294.712H6.25a.417.417 0 0 1-.417-.417v-1.91c0-.372.45-.558.712-.295Zm6.91-3.09-1.91-1.91a.417.417 0 0 1 .294-.712h1.911c.23 0 .417.187.417.417v1.91a.417.417 0 0 1-.712.295Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <button id="button">
          <svg
            width="20"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            class="iconpark-icon"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M15 12V7a3 3 0 1 0-6 0v5a3 3 0 1 0 6 0ZM12 2a5 5 0 0 0-5 5v5a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5ZM5 13c.276 0 .497.225.527.5.292 2.74 2.965 5.063 6.473 5.063s6.181-2.324 6.473-5.064c.03-.274.25-.499.527-.499h1c.276 0 .502.225.482.5-.269 3.737-3.532 6.593-7.482 7.01v1.99a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1.99c-3.95-.417-7.213-3.273-7.482-7.01A.474.474 0 0 1 4 13h1Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <button id="button">
          <svg
            width="20"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            class="draft-menu-list-item-icon"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M19 7a3 3 0 0 1 3 3v3h-2v-3a1 1 0 0 0-1-1h-7.5a1 1 0 0 1-1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7v2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3H19Z"
                fill="currentColor"
              ></path>
              <path
                data-follow-fill="currentColor"
                d="M19.56 22.854a.5.5 0 0 1-.706 0l-.708-.708a.5.5 0 0 1 0-.707L19.586 20H14.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h5.086l-1.44-1.44a.5.5 0 0 1 0-.706l.708-.708a.5.5 0 0 1 .707 0l3.146 3.147a1 1 0 0 1 0 1.414l-3.146 3.147Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <div id="space">|</div>

        <button id="button" onClick={startStream}>
          <svg
            width="20"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M20 11.134a1 1 0 0 1 0 1.732L6.5 20.66a1 1 0 0 1-1.5-.866V4.206a1 1 0 0 1 1.5-.866L20 11.134Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <button id="button" onClick={stopStream}>
          <svg
            width="20"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Zm11 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>

        <div id="space">|</div>

        <button id="button">
          <svg
            width="20px"
            height="auto"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            role="presentation"
            xmlns="http://www.w3.org/2000/svg"
            class="lv_feedback-icon"
            id="logo"
          >
            <g>
              <path
                data-follow-fill="currentColor"
                d="M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM12 6a4 4 0 0 0-3.969 3.501c-.034.274.193.499.469.499h1c.276 0 .494-.227.562-.495A2.001 2.001 0 0 1 14 10c0 .566-.135.847-.269 1.025-.162.216-.39.379-.786.643l-.04.026c-.352.235-.85.567-1.236 1.081-.35.466-.573 1.029-.645 1.726-.027.274.2.499.476.499h1c.276 0 .49-.227.544-.497.05-.253.138-.412.225-.528.162-.216.39-.379.786-.643l.04-.026c.352-.235.85-.567 1.236-1.081.43-.572.669-1.29.669-2.225a4 4 0 0 0-4-4Z"
                fill="currentColor"
              ></path>
              <path
                data-follow-fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>
        <div> 
        <div  id ="pipeline" className="relative ml-60 ">
          <select
            
            className="bg-custom-gray py-1 px-1 ml-8 rounded text-white"
            style={{ border: "0.1px solid gray" }}
          >
            <option value="volvo">Yolo Fast Object Detection</option>
            <option value="saab">Histogram Oriented Gradients </option>
            <option value="opel">Faster R-CNN</option>
            <option value="audi">Single Shot Detector (SSD)</option>
          </select>
        </div>
        
        
      </div>
      
        </div>
      <img id="videoStream" />
      {/* <picture>
        <source srcSet='' />
        <img id="videoStream" src={''} alt="Descriptive text for the image" />
      </picture> */}
    </>
  );
};

export default ToolBar;
