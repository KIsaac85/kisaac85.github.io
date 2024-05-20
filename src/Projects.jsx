import React from "react";
import Card from "./projectCard.jsx";
import projectsData from "./js/projectsData"

function cards(card){
	return(<Card 
		key = {card.id}
		picture={card.picSource}
		description={card.description}
		websiteLink={card.link}
		codeLink={card.websiteCode}/>)
}

function Projects() {
	
	return(
		<div id="projects-section" className="row">
			{projectsData.map(cards)}
		</div>
    )
}

export default Projects;