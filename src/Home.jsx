import React, { useState , useEffect} from 'react'
import image1 from "./images/2.jpg"
import { Stack} from '@mui/material';
import  StyledButton  from './js/ButtonStyle';


function Home() {
  const [role, setRole] = useState("A Freelance Full Stack Web Developer")

  // const interval = setInterval(() => {
  //   role =="A Freelance Full Stack Web Developer"? 
  //     setRole("Bim App Dev") 
    
  //   :setRole("A Freelance Full Stack Web Developer")},5000)
  // // console.log(document.visibilityState);

  //    if (document.visibilityState == 'hidden') {
  //     clearInterval(interval);

  //   }
    
 

  

  
useEffect(()=>{
  //Implementing the setInterval method
  const interval = setInterval(() => {
    if ((document.visibilityState === 'visible')) {
      role ==="A Freelance Full Stack Web Developer"?
      setRole("Bim App Dev") 

    : setRole("A Freelance Full Stack Web Developer")

    }
    
     else if (document.visibilityState === 'hidden') 
      clearInterval(interval);
    
    
}, 5000);


},[role]);

  return (
  
              
  <div className="" id="home" >  
      <div className='text' >
        <span className="">Hello!</span>
      <h1 className="">I'm <span>Karim Isaac</span></h1>
       <h2 className="" >{role}</h2>
       
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
