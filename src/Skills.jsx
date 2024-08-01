import React from "react";
import skillsImage from "./images/skills.png"


function Skills() {
    return(
        <section  id="skills-section">
			<div className="main-flex-column main-whole-width main-relative-position">
			
          <div className="main-flex-column main-whole-width main-relative-position">
          	<h1 className="resume-middle main-title-shadow">Skills</h1>
            <h2 className="resume-middle main-title main-font-title">My Skills</h2>
			</div>
			<div>
			</div>
		  
		  <div style={{justifyContent:"center", display:"flex"}}><img className="" src={skillsImage} style={{width:"50rem"}}></img></div>
       
			</div>
		</section>
    )
}

export default Skills;