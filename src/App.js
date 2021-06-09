import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'
import dataEN from './data/dataEN'

function App() {
  let activeData = dataEN;

  useEffect(() => {
    setTimeout(function() {
      let viewport = document.querySelector("meta[name=viewport]");
      viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
    }, 200)
  }, [])

  return (
    <Router>
      <header>
        <Navbar 
        data = {activeData}
        />
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
