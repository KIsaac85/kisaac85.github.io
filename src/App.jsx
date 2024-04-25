import { useState } from 'react'
import Aboutme from './Aboutme.jsx'
import Home from "./Home.jsx"
import Heading from './Header.jsx'
import Resume from './Resume.jsx'
import Skills from './Skills.jsx'
import Projects from "./Projects.jsx"

function App() {
 

  return (

    <div>
    <Heading/>
    <Home />
    <Aboutme/>
    <Resume/>
  <Skills/>
  <Projects/>
   </div>
  )
}

export default App
