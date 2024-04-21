import React, { useState , useEffect} from 'react'




function Home(props) {
  const [role, setRole] = useState("A Freelance Full Stack Web Developer")

useEffect(()=>{
  //Implementing the setInterval method
  const interval = setInterval(() => {
    if (role ==="A Freelance Full Stack Web Developer") {
      setRole("Bim App Dev") 
    } 
    else setRole("A Freelance Full Stack Web Developer")
 
}, 5000);

//Clearing the interval
  return () => clearInterval(interval);
});

  return (

    <div>
      <span class="subheading">Hello!</span>
      <h1 class="mb-4 mt-3">I'm <span>Karim Isaac</span></h1>
       <h2 class="mb-4">{role}</h2>
    </div>

  )
}

export default Home
