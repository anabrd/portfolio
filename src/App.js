import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'
import dataDE from './data/dataDE'
import dataEN from './data/dataEN'

function App() {
  const [activeLang, setActiveLang] = useState("EN");
  const [activeData, setActiveData] = useState(dataEN);

  useEffect(() => {
    if (activeLang == "EN") {
      setActiveData(dataEN);
    } else if (activeLang == "DE") {
      setActiveData(dataDE);
    }
  }, [activeLang])

  useEffect(() => {
    setTimeout(function () {
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
    }, 300);
  }, [])

  return (
    <Router>
      <header>
        <Navbar 
        data = {activeData} 
        activeLang = {activeLang}
        setActiveLang = {setActiveLang}/>
      </header>
      <main>
        <Landing data = {activeData} />
        <About data = {activeData}/>
        <Projects data = {activeData}/>
        <Contact data = {activeData}/>
      </main>
    </Router>
  );
}

export default App;
