import React from "react";
import bootstrap from "./images/bootstrap-icons.png"
import dices from "./images/dices.jpg"
import ejs from "./images/ejs.jpeg"
import REST from "./images/REST-API.png"
import API from "./images/API.png"
import ReactJp from "./images/React.png";

function Projects() {
    return(
        <section className="ftco-section ftco-project" id="projects-section">
    	<div className="container">
    		<div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ">
          	<h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">My Projects</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-4">
    				<div className="project img  d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${dices}`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Dice Game</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>
  				<div className="col-md-8">
    				<div className="project img  d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${bootstrap}`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Bootstrap</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
  				</div>

    			<div className="col-md-8">
    				<div className="project img  d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${REST}`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>

    				<div className="project img  d-flex justify-content-center align-items-center" style={{backgroundImage:  `url(${API}`}}>
    					<div className="overlay"></div>
	    				<div className="text text-center p-4">
	    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
	    					<span>Web Design</span>
	    				</div>
    				</div>
    			</div>
    			<div className="col-md-4">
    				<div className="row">
    					<div className="col-md-12">
		    				<div className="project img  d-flex justify-content-center align-items-center" style={{backgroundImage:  `url(${ejs}`}}>
		    					<div className="overlay"></div>
			    				<div className="text text-center p-4">
			    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
			    					<span>Web Design</span>
			    				</div>
		    				</div>
	    				</div>
	    				<div className="col-md-12">
		    				<div className="project img  d-flex justify-content-center align-items-center" style={{backgroundImage:  `url(${ReactJp}`}}>
		    					<div className="overlay"></div>
			    				<div className="text text-center p-4">
			    					<h3><a href="#">Branding &amp; Illustration Design</a></h3>
			    					<span>Web Design</span>
			    				</div>
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>
    )
}

export default Projects;