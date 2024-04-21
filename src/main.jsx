import React, { useState , useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Heading from './Header.jsx'
import Home from "./Home.jsx"
import './index.css'







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading/>
    <Home />
  </React.StrictMode>,
)
