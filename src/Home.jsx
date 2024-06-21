import React, { useState , useEffect} from 'react'
import image1 from "./images/2.jpg"
import { Stack} from '@mui/material';
import  StyledButton  from './js/ButtonStyle';


function Home() {
  const [role, setRole] = useState("Text A");
  const [className, setClassName] = useState("fade");


    const inter = setInterval(()=>{
      changeHome()
    },5000)


 function changeHome() {
   role ==="A Freelance Full Stack Web Developer"?setRole("Bim App Dev"):setRole("A Freelance Full Stack Web Developer");
   
   clearInterval(inter);
 };

 useEffect(()=>{
  //className&&setClassName("fade")
 },[role])

  return (
  
              
  <div className="" id="home" >  
      <div className='text' >
        <span className="">Hello!</span>
      <h1 className="">I'm <span>Karim Isaac</span></h1>
       <h2 className={`${className}`}>{role}</h2>
       
      <Stack spacing={2} direction={'row'}>
       <StyledButton variant="contained">Hire Me</StyledButton>
       <StyledButton variant="contained">My works</StyledButton>
      </Stack>
         
       </div>
       <div>
        {/* <img style={{width:"500px"}} src={image1}></img> */}
       </div>
       <div className="one-third js-fullheight order-md-last img" style={{backgroundImage:`url(${image1}`}}>
	          		<div className="overlay"></div>
       </div>
       
       </div>
	 

  )
}

export default Home
