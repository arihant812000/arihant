import React , {Fragment } from 'react';
import Navbars from "./components/Navbar";
import './App.css';
import Routes from "./components/Routes";
import Particles from "react-particles-js"
import Footer from "./components/Footer";
const App = () => {
 
  return(
    <Fragment>
      <Particles
     params={{
	    "particles": {
	        "number": {
	            "value": 75
          },
          "color":{
            "value":"#ccccff"
          },
          "line_linked":{
            "color":"#ccccff"
          },
	        "size": {
	            "value": 5
	        }
	    },
	   
  }} 
  // height="100%"
  className="canvas"
      />
      <Navbars />

    <Routes style={{width:"100%"}}/>
    
   <Footer/>
     </Fragment>
)}

export default App;
