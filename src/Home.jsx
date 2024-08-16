import React from 'react'
import image1 from "./images/2.jpg";
import image2 from "./images/1.jpg";
import { Stack} from '@mui/material';
import  StyledButton  from './js/ButtonStyle';
import {Link} from "react-scroll";
import Fade from '@mui/material/Fade';

window.onfocus = ()=> {location.reload();};


function Home() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
    
  };

  const inter = setInterval(()=>{
    
    handleChange()
  },5000)


 

  return (
  
    
              
  <div  id="home-section" className="main-flex-row main-content-center" style={{display:""}}>  
      <div id="hi" style={{}}>
        
      <Fade className='home-relative-position' in={checked}  timeout={2500}>
      <div style={{width:600}}><span>Hello!</span>
      <h1>I'm <span>Karim Isaac</span></h1><h2>Bim App Dev</h2></div></Fade>
      <Fade className='home-relat-position'  in={!checked} timeout={2500}>
      <div style={{width:600}}><span>Hello!</span>
      <h1>I'm Civil Engineer interseted in <span> Digital Construction</span></h1><h2 >A Freelance Full Stack Web Developer</h2></div></Fade>
      
      <Stack className='home-2ndrelative-position'  spacing={2} direction={'row'}>
      <Link to="contact-section" spy={true} smooth={true} offset={50} duration={500}><StyledButton variant="contained">Hire Me</StyledButton></Link>
      <Link to="projects-section" spy={true} smooth={true} offset={50} duration={500}><StyledButton variant="contained">My works</StyledButton></Link> 
     
      </Stack>
      
       </div>
       
      <Fade in={!checked} style={{ position:"relative", }} timeout={2500}><img src={`${image1}`} alt="personal photo"></img></Fade>
      <Fade in={checked} timeout={2500} ><img src={`${image2}`} alt="personal photo"></img></Fade>
     
       
       </div>
	 

  )
}

export default Home
