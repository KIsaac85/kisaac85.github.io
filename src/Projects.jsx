import React from "react";
import Card from "./projectCard.jsx";
import projectsData from "./js/projectsData"

function cards(card){
	
	return(
	
		<div className="" key = {card.id}>
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
		<section id="projects-section" className="ftco-section">
		<div className="container">
		<div className="row">
			{projectsData.map(cards)}
		</div>
		</div>
			
		</section>
    )
}

export default Projects;