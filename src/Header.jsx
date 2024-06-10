import React, {useEffect} from "react";
import {Link} from "react-scroll";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
 function Heading() {
//   useEffect(() => {
//     window.addEventListener('scroll', function () {
//       var header = this.document.querySelector("header");
//       header.classList.toggle("sticky",this.window.scrollY>0)
//     });
   
//   }, []);

    return(    

<nav>  

   
      <a className="navbar-brand" href="#">Karim</a>
      <DensityMediumIcon className="navbar-icon" />
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button> */}
    <div className="navbar-items">
      <ul>

        <li >
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="nav-link " aria-current="page" href="#"><span>Home</span></Link>
        </li>

        <li >
          <Link to="about-section" spy={true} smooth={true} offset={50} duration={500} a className="nav-link" href="#"><span>About</span></Link>
        </li>
    
        <li>
          <Link to="resume-section" spy={true} smooth={true} offset={50} duration={500} className="nav-link" href="#" ><span>Resume</span></Link>
        </li>
        <li>
          <Link to="skills-section" spy={true} smooth={true} offset={50} duration={500} className="nav-link" href="#" ><span>Skills</span></Link>
        </li>
        <li>
          <Link to="projects-section" spy={true} smooth={true} offset={50} duration={500} className="nav-link" href="#" ><span>Projects</span></Link>
        </li>        
        
        <li>
          <Link to="contact-section" spy={true} smooth={true} offset={50} duration={500} className="nav-link" href="#" ><span>Contact</span></Link>
        </li>
      </ul>
      
    </div>
  
  
</nav>


    
  )
}
export default Heading;