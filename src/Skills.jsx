import React from "react";
import skillsImage from "./images/skills.png"


function Skills() {
    return(
        <section  id="skills-section" className="main-animate main-animate-range-40 main-top-space-10" >
			<div className="main-flex-column main-whole-width main-relative-position">
			
          <div className="main-flex-column main-whole-width main-relative-position main-bottom-space">
          	<h1 className="resume-middle main-title-shadow skills-title-shadow-mob">Skills</h1>
            <h2 className="resume-middle main-title main-font-title main-font-title-mob">My Skills</h2>
			</div>
			<div>
			</div>
		  
		  <div style={{justifyContent:"center", display:"flex"}}><img className="Skills-image" src={skillsImage} style={{}}></img></div>
       
			</div>
		</section>
    )
}

export default Skills;