import React, { useState , useEffect} from 'react'
import image1 from "./images/2.jpg"


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
        <span className="subheading">Hello!</span>
      <h1 className="mb-4 mt-3">I'm <span>Karim Isaac</span></h1>
       <h2 className="mb-4" >{role}</h2>
       <p>
         <a href="#" className="">Hire me</a> 
         <a href="#" className="">My works</a></p>
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
