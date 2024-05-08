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
		
		<div>
			{projectsData.map(cards)}
			
	
		</div>
    
  
    )
}

export default Projects;