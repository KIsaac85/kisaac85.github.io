import React from "react"
import image1 from "./images/2.jpg"



function Aboutme() {
    return (
      <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
    	<div className="container" style={{display:"flex"}}>
    		<div className="row d-flex"></div>
      <div className="col-md-6 col-lg-5 d-flex">
    				<div className="img-about img d-flex align-items-stretch">
    					<div className="overlay"></div>
	    				<div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage:`url(${image1}`}}>
	    				</div>
    				</div>
    			</div>
    <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
    <div className="row justify-content-start pb-3">
    <div className="col-md-12 heading-section">
      <h1 className="big">About</h1>
    <h2 className="mb-4">About Me</h2>
    <p>Better late than never.</p>
    <ul className="about-info mt-4 px-md-0 px-2">
        <li className="d-flex"><span>Name:</span> <span>Karim Isaac</span></li>
        <li className="d-flex"><span>Date of birth:</span> <span>February 02, 1985</span></li>
        <li className="d-flex"><span>Address:</span> <span>Cairo Egypt</span></li>
        <li className="d-flex"><span>Email:</span> <span>karim_isaac85@hotmail.com</span></li>
        <li className="d-flex"><span>Phone: </span> <span>+2012-240-33-791</span></li>
    </ul>
    </div>
    </div>
   
    </div>
    </div>

    </section>
    )
}

export default Aboutme;