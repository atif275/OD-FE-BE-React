import { React } from 'react';
import backgroundVideo from '../video/video2.mp4'
import "./DetectionStyles.css";
const Detection=()=>{
    return(
        <div className= "detectionpage">
        
        {/* <video autoPlay loop muted id = 'video'>
            <source src={backgroundVideo} type='video/mp4'/>
        </video> */}
        <div className="bg-overlay"></div>
        <div className="detectiontext">
            <h1>Detection</h1>
            <h3>Powered By Advance AI tools</h3>
        </div>
        
        </div>
    );
}

export default Detection;