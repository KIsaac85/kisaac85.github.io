import React, {useEffect,useState} from "react";
import {Link} from "react-scroll";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


 function Heading() {
   useEffect(() => {checkScreenWidth()}, []);
   let mediaQuery = window.matchMedia("(max-width: 1200px)");

   const [isClicked, setIsClicked] = useState(false);
   const [classNameCSS, setClassNameCSS] = useState("");
   const [classNameULCSS, setClassNameULCSS] = useState("");
   const  [hideButton,setHideButton]=useState("");
   const  [hideList,setHideList]=useState("");
   
   
   function gotclicked() {
    
     isClicked?setIsClicked(false):setIsClicked(true)
     isClicked? setClassNameCSS("navbar-items-columns"):setClassNameCSS("nav-button-hide");
     isClicked? setClassNameULCSS("ulCol"):setClassNameULCSS("");
     //isClicked? setHideButton(""):setHideButton("nav-button-hide")
     isClicked&& setHideList("")
      console.log(isClicked);
     }
     
     
     

    
  function checkScreenWidth() {
    mediaQuery.matches?setHideButton(""):setHideButton("nav-button-hide")
    mediaQuery.matches?setHideList("nav-button-hide"):setHideList("navbar-items")
    !mediaQuery.matches&&setClassNameULCSS("")
    !mediaQuery.matches&&setClassNameCSS("")
  };
    

  mediaQuery.addEventListener("change", function() {checkScreenWidth()});
  
   
   
    return(    

<nav>  

   
      <a className="navbar-brand" href="#" >Karim</a>
      <DensityMediumIcon className={`navbar-icon ${ hideButton}`} onClick={gotclicked} />

    <div className = {`  ${classNameCSS} ${hideList}` } >
      <ul className={`${classNameULCSS}`} >

        <li>
          <Link className="nav-link" to="home" spy={true} smooth={true} offset={50} duration={500}  aria-current="page" href="#"><span>Home</span></Link>
        </li>

        <li >
          <Link  className="nav-link" to="about-section" spy={true} smooth={true} offset={50} duration={500}   href="#"><span>About</span></Link>
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