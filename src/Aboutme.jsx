import React from "react"
import image1 from "./images/2.jpg"
import Slide from '@mui/material/Slide';


function Aboutme() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  
    return (
  
      <section id="about-section" className="main-flex-row main-top-space main-animate main-animate-range-40 about-flexMob-col" onScroll={handleChange}>
    	
    		
      
    <img className="main-mob-image" src={`${image1}`} alt="personal photo"></img>
   

    <div className="main-flex-column  main-relative-position" >
      <h1 className="main-title-shadow">About</h1>
      <h2 className="main-title main-font-title">About Me</h2>
      <div className="about-paragrapgh-list">  
      <p>I am civil engineer interested in digital transformation of construction</p>
      <ul id="about-list">
        <li><span>Name:</span> </li>
        <li><span  className="main-grey-textt">Karim Isaac</span></li>
        <li><span>Date of birth:</span> </li>
        <li><span className="main-grey-text">February 02, 1985</span></li>
        <li><span>Address:</span></li>
        <li> <span className="main-grey-text">Cairo Egypt</span></li>
        <li><span>Email:</span> </li>
        <li><span className="main-grey-text">karim_isaac85@hotmail.com</span></li>
        <li><span>Phone: </span> </li>
        <li><span className="main-grey-text">+2012-240-33-791</span></li>
    </ul>
    </div>
    </div>
    
    
    </section>
    
    )
}

export default Aboutme;