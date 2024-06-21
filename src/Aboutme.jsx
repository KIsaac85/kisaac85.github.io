import React from "react"
import image1 from "./images/2.jpg"



function Aboutme() {
    return (
      <section className="" id="about-section">
    	<div className="container" >
    		
      <div className="Image-container">
    		<img src={`${image1}`} alt="personal photo"></img>
    	</div>

    <div className="About-Container" >
      <h1 className="About-Shadow">About</h1>
    <h2 className="About-Me"  >About Me</h2>
    <p>Better late than never.</p>
    <ul className="About-List">
        <li className=""><span>Name:</span> </li>
        <li><span  className="greyText">Karim Isaac</span></li>
        <li className=""><span>Date of birth:</span> </li>
        <li><span className="greyText">February 02, 1985</span></li>
        <li className=""><span>Address:</span></li>
        <li> <span className="greyText">Cairo Egypt</span></li>
        <li className=""><span>Email:</span> </li>
        <li><span className="greyText">karim_isaac85@hotmail.com</span></li>
        <li className=""><span>Phone: </span> </li>
        <li><span className="greyText">+2012-240-33-791</span></li>
    </ul>
    </div>
    </div>
    </section>
    )
}

export default Aboutme;