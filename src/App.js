import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Streaming from "./components/Streaming";
//import Detection from "./components/Detection";
import SideMenu from "./components/SideMenu";
import ToolBar from "./components/ToolBar";
import About from "./components/About";
import RightSideBar from "./components/RightSideBar";
import Widget from "./components/Widget";
import VideoPlayerApp from "./components/VideoPlayerApp";
import Map from "./components/Map";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      
      
      <Router>
        
        <ToolBar/>
        <SideMenu/>
        
        
        
        
       
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            
            
          </Routes>
        </Router>
    </div>
  );
}