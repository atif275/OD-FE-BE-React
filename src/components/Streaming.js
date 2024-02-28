import { React } from 'react';
import backgroundVideo from '../video/video1.mp4'
import img from '../video/img.png'
import "./StreamingStyles.css";
import { render } from '@testing-library/react';
import { Component } from "react";
class Streaming extends Component {
 
   startStream = () =>{
    
        document.getElementById('videoStream').src = {img}; 
        // fetch('/start_stream')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Start Stream:', data);
        //         document.getElementById('videoStream').src = '/video_feed';  
        //     });
    }
    
 stopStream = () =>{
    
        document.getElementById('videoStream').src = ''; 
        // fetch('/stop_stream')
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Stop Stream:', data);
        //         document.getElementById('videoStream').src = ''; 
        //     });
    }
    render(){
    return(
        <div className= "streamingpage">
        
        <div class="button-container">
            <button id="startButton" onclick={this.startStream}>Start Stream</button>
            <button id="stopButton" onclick={this.stopStream}>Stop Stream</button>
        </div>
        <picture>
        <source srcSet='' />
        <img id="videoStream" src={''} alt="Descriptive text for the image" />
      </picture>
        {/* <img id="videoStream" alt="Video Stream"></img> */}
        
        </div>
    );

    }

}
export default Streaming;