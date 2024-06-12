import React, {useEffect,useState} from "react";
import {Link} from "react-scroll";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
 function Heading() {
  const [isClicked, setIsClicked] = useState(false);

  const [classNameCSS, setClassNameCSS] = useState("");
  const [classNameULCSS, setClassNameULCSS] = useState("");
  const [buttonDisplay, setButtonDisplay] = useState(false);

  const[sizeChange,setSizeChange]=useState(false);

  let mediaQuery = window.matchMedia("(max-width: 1200px)").matches;
  
  function gotclicked() {
    !isClicked?setIsClicked(true):setIsClicked(false)
  isClicked? setClassNameCSS("navbar-items-columns"):setClassNameCSS("");
  isClicked? setClassNameULCSS("ulCol"):setClassNameULCSS("");
}
function myFunction() {
  if (mediaQuery.matches) { // If media query matches
      setButtonDisplay(false)
  } else {
      setButtonDisplay(true)
  }
}

// Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 1200px)")

// // Call listener function at run time
// myFunction(x);

// // Attach listener function on state changes
// x.addEventListener ("change", function() {
//   myFunction(x);
// });

    return(    

<nav>  

   
      <a className="navbar-brand" href="#" >Karim</a>
      <DensityMediumIcon className="navbar-icon" onClick={gotclicked} />
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button> */}
    <div className = {`navbar-items  ${ classNameCSS}`} >
      <ul className={`${classNameULCSS}`} >

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