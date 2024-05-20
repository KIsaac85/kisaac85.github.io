import React from "react";





function projectCard(props) {
    return(
		<div class="">
			<div className="card col-md-6" style={{width: "25rem"}}>
 			 <img className="card-img-top" src={props.picture} alt="Card image cap"/>
 			 <div className="card-body">
  			  <h5 className="card-title">Card title</h5>
  			  <p className="card-text">{props.description}</p>
  			  <a href={`//${props.websiteLink}`} className="btn btn-primary" >Site</a>
  			  <a href={`//${props.codeLink}`} className="btn btn-primary">Code</a>
				</div>
			</div>	  
		</div>
    )
}

export default projectCard;