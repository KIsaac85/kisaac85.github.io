import { useState } from 'react'
import AboutMe from './Aboutme.jsx'
import Home from "./Home.jsx"
import Heading from './Header.jsx'
import Resume from './Resume.jsx'
import Skills from './Skills.jsx'
import Projects from "./Projects.jsx"
import ContactMe from './ContactMe.jsx'

function App() {
 

  return (

    <div>   
       <Heading/>
    <Home />
    <AboutMe/>
    <Resume/>
    <Skills/>
    <Projects/>
    <ContactMe/>
    </div>

   

  )
}

export default App
