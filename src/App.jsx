import { useState } from 'react'
import Aboutme from './Aboutme.jsx'
import Home from "./Home.jsx"
import Heading from './Header.jsx'
import Resume from './Resume.jsx'
import Skills from './Skills.jsx'


function App() {
 

  return (

    <div>
    <Heading/>
    <Home />
    <Aboutme/>
    <Resume/>
  <Skills/>
   </div>
  )
}

export default App
