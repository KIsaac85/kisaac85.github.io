import React from "react";







function certificate(props) {
    return(


		<div className="resume-degree-container">
    					<span className="resume-date">{props.year}</span>
    					<h2>{props.certificate}</h2>
    					<span >{props.university}</span>
    					<p>{props.description}</p>
    	</div>
    )
}

export default certificate;