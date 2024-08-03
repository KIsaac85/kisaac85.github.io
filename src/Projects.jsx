import React from "react";
import Card from "./projectCard.jsx";
import projectsData from "./js/projectsData"

function cards(card){
	
	return(
	
		<div id="divContainer" key = {card.id} >
			
	<Card 
		title={card.title}
		picture={card.picSource}
		description={card.description}
		websiteLink={card.link}
		codeLink={card.websiteCode}/>
			</div>
			
		)
}

function Projects() {
	
	return(
		<section id="projects-section">
		<div className="main-flex-column main-whole-width main-relative-position">
              <h1 className="resume-middle main-title-shadow">Projects</h1>
              <h2 className="resume-middle main-title main-font-title">Our Projects</h2>
		</div>
		<div className="container">
		<div className="row">
			{projectsData.map(cards)}
		</div>
		</div>
			
		</section>
    )
}

export default Projects;