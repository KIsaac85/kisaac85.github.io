import React, {useEffect} from "react";
import {Link} from "react-scroll";

 function Heading() {
//   useEffect(() => {
//     window.addEventListener('scroll', function () {
//       var header = this.document.querySelector("header");
//       header.classList.toggle("sticky",this.window.scrollY>0)
//     });
   
//   }, []);

    return(    

<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target bg-dark" style={{position:"fixed"}}>  <div className="container ">
   
      <a className="navbar-brand" href="#">Karim</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="nav-link " aria-current="page" href="#">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="about-section" spy={true} smooth={true} offset={50} duration={500} a className="nav-link" href="#">About</Link>
        </li>
    
        <li className="nav-item">
          <Link to="resume-section" spy={true} smooth={true} offset={50} duration={500} className="nav-link" href="#" >Resume</Link>
        </li>
        <li className="nav-item">
          <Link to="skills-section" spy={true} smooth={true} offset={50} duration={500} className="nav-link" href="#" >Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="projects-section" spy={true} smooth={true} offset={50} duration={500} className="nav-link" href="#" >Projects</Link>
        </li>        
        
        <li className="nav-item">
          <Link to="contact-section" spy={true} smooth={true} offset={50} duration={500} className="nav-link" href="#" >Contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
  
</nav>


    
  )
}
export default Heading;