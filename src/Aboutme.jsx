import React from "react"
import image1 from "./images/2.jpg"



function Aboutme() {
    return (
      <section className="" id="about-section">
    	<div className="main-container-flex" >
    		
      <div id="about-image-container">
    		<img src={`${image1}`} alt="personal photo"></img>
    	</div>

    <div className="main-container" >
      <h1 className="main-title-shadow">About</h1>
    <h2 className="main-title main-font-title">About Me</h2>
    <p>Better late than never.</p>
    <ul id="about-list">
        <li className=""><span>Name:</span> </li>
        <li><span  className="main-grey-textt">Karim Isaac</span></li>
        <li className=""><span>Date of birth:</span> </li>
        <li><span className="main-grey-text">February 02, 1985</span></li>
        <li className=""><span>Address:</span></li>
        <li> <span className="main-grey-text">Cairo Egypt</span></li>
        <li className=""><span>Email:</span> </li>
        <li><span className="main-grey-text">karim_isaac85@hotmail.com</span></li>
        <li className=""><span>Phone: </span> </li>
        <li><span className="main-grey-text">+2012-240-33-791</span></li>
    </ul>
    </div>
    </div>
    </section>
    )
}

export default Aboutme;