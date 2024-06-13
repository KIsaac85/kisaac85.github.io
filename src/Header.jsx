import React, {useEffect,useState} from "react";
import {Link} from "react-scroll";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


 function Heading() {
   useEffect(() => {checkScreenWidth()}, []);
   let mediaQuery = window.matchMedia("(max-width: 1200px)");

   const [isClicked, setIsClicked] = useState(false);
   const [classNameCSS, setClassNameCSS] = useState("");
   const [classNameULCSS, setClassNameULCSS] = useState("");
   const  [hide,setHide]=useState("");
   
   
   function gotclicked() {
    
     isClicked?setIsClicked(true):setIsClicked(false)
     isClicked? setClassNameCSS("navbar-items-columns"):setClassNameCSS("");
     isClicked? setClassNameULCSS("ulCol"):setClassNameULCSS("");
     isClicked? setHide("nav-button-hide"):setHide("")
     }
     
     
     

    
  function checkScreenWidth() {mediaQuery.matches?setHide("nav-button-hide"):setHide("")};


  mediaQuery.addEventListener("change", function() {checkScreenWidth()});
  
   
   
    return(    

<nav>  

   
      <a className="navbar-brand" href="#" >Karim</a>
      <DensityMediumIcon className={`navbar-icon ${ hide}`} onClick={gotclicked} />
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
       </button> */}
    <div className = {`navbar-items  ${classNameCSS} ${hide}` } >
      <ul className={`${classNameULCSS}`} >

        <li>
          <Link className="nav-link" to="home" spy={true} smooth={true} offset={50} duration={500}  aria-current="page" href="#"><span>Home</span></Link>
        </li>

        <li >
          <Link  className="nav-link" to="about-section" spy={true} smooth={true} offset={50} duration={500} a  href="#"><span>About</span></Link>
        </li>
    
        <li>
          <Link className="nav-link" to="resume-section" spy={true} smooth={true} offset={50} duration={500} href="#" ><span>Resume</span></Link>
        </li>
        <li>
          <Link className="nav-link" to="skills-section" spy={true} smooth={true} offset={50} duration={500} href="#" ><span>Skills</span></Link>
        </li>
        <li>
          <Link className="nav-link" to="projects-section" spy={true} smooth={true} offset={50} duration={500} href="#" ><span>Projects</span></Link>
        </li>        
        
        <li>
          <Link className="nav-link" to="contact-section" spy={true} smooth={true} offset={50} duration={500} href="#" ><span>Contact</span></Link>
        </li>
      </ul>
      
    </div>
  
  
</nav>


    
  )
}
export default Heading;