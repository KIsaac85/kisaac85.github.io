import React from "react";
import skillsImage from "./images/skills.png"


function Skills() {
    return(
        <section className="" id="skills-section">
			<div className="main-container">
			
          <div className="main-container">
          	<h1 className="resume-middle main-title-shadow">Skills</h1>

			</div>
			<div>
				
            <h2 className="resume-middle main-title main-font-title">My Skills</h2>
			</div>
		  
		  <div style={{justifyContent:"center", display:"flex"}}><img className="" src={skillsImage} style={{width:"50rem"}}></img></div>
       {/* 
				<div className="">
					
							<h3>C#</h3>
							<div className="">
							 	<div className="" role="" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
							    <span>90%</span>

						</div>
					</div>
					<div className="">
						
							<h3>jQuery</h3>
							<div className="">
							 	<div className="" role="progressbar" aria-valuenow="85"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
							    <span>85%</span>
							  	
							</div>
						</div>
					</div>
					<div className="">
						
							<h3>HTML5</h3>
							<div className="progress">
							 	<div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
							    <span>95%</span>
							  	
							</div>
						</div>
					</div>
					<div className="">
						
							<h3>CSS3</h3>
							<div className="">
							 	<div className="" role="progressbar" aria-valuenow="90"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
							    <span>90%</span>
							  	</div>
							
						</div>
					</div>
					<div className="">
						
							<h3>Javascript</h3>
							<div className="">
							 	<div className="" role="progressbar" aria-valuenow="70"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    <span>70%</span>
							  	</div>
							
						</div>
					</div>
					<div className="">
						
							<h3>Bootstrap</h3>
							<div className="progress">
							 	<div className="" role="progressbar" aria-valuenow="80"
							  	aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
							    <span>80%</span>
							  
							</div>
							
						</div>
					</div>
				</div>
				 */}
			</div>
		</section>
    )
}

export default Skills;