import {
  BrowserRouter as Router
} from "react-router-dom";
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './index.css'

function App() {

  let dataEN = [
    {
      id: 0,
      title: "Landing",
      heading: "",
      subheading: "Ana Brdar",
      description: "Berlin-based Web Developer"
    },
    {
      id: 1,
      title: "About",
      heading: "About",
      description: "I am a full-stack web developer with strong focus on front-end technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      subheading: "Tools & technologies",
      content: [["HTML", "CSS", "Sass", "Bootstrap"], 
                ["JavaScript","JQuery", "React.js", "Redux"], 
                ["Node.js", "Express.js", "MongoDB"],
                ["Git", "GitHub", "NPM"], 
                ["Figma", "Notion", "Slack", "Toggl"]]
    }, 
    {
      id: 2,
      title: "Projects",
      heading: "Projects",
      description: "Portfolio of projects.",
      content: [
        {
          name: "Time Tracker App",
          description: "App for tracking time and generating reports built with MERN stack.",
          tools: "React.js, Chart.js, api-to-go",
          links: ["https://github.com/anabrd/time-tracker-app", "https://a-time-tracker-app.herokuapp.com/"]
        },
        {
          name: "Snakes and Ladders",
          description: "Classic board game reimagined as a pure JavaScript web page.",
          tools: "JavaScript, Vectary",
          links: ["https://github.com/anabrd/snakes-and-ladders", "https://anabrd.github.io/snakes-and-ladders/"]
        },
        {
          name: "Roughly the Size Of",
          description: "Country to US State comparison.",
          tools: "Python/Flask, SQLite, Bootstrap",
          links: ["TBA", "TBA"]
        },
        {
          name: "TBA",
          description: "Platform for sharing personal learning roadmaps.",
          tools: "React.js, TBA",
          links: ["TBA", "TBA"]
        }
      ]
    },
    {
      id: 3,
      title: "Contact",
      heading: "Contact",
      description: "Get in touch.",
      contactForm: 
        [
          {
            name: "name",
            label: "Your Name",
            type: "text",
            placeholder: "Please enter your name"
          },
          {
            name: "email",
            label: "Your Email",
            type: "email",
            placeholder: "Please enter your email"
          },
          {
            name: "message",
            label: "Your Message",
            type: "text",
            placeholder: "Please enter your message"
          },
          {
            label: "Submit",
            type: "submit",
            placeholder: ""
          }
        ],
      contactLinks: 
        [
          {
            name: "CV",
            path: "TBA"
          },
          {
            name: "LinkedIn",
            path: "https://www.linkedin.com/in/anabrdar/"
          },
          {
            name: "GitHub",
            path: "https://github.com/anabrd"
          }
        ] 
      }
  ]

  let dataDE = [
    {
      id: 0,
      title: "Landing",
      heading: "",
      subheading: "Ana Brdar",
      description: "Full Stack Webentwicklerin"
    },
    {
      id: 1,
      title: "About",
      heading: "Über Mich",
      description: "lorem ipsum",
      subheading: "Werkzeuge",
      content: [["html", "css", "sass", "bootstrap"], 
                ["javascript","jquery", "react.js", "redux"], 
                ["node.js", "express", "mongoDB"],
                ["git", "github", "npm"], 
                ["figma", "notion", "slack", "toggl"]]
    }, 
    {
      id: 2,
      title: "Projects",
      heading: "Projekte",
      description: "lorem ipsum",
      content: [
        {
          name: "Time Tracker App",
          description: "App for tracking time and generating reports built with MERN stack.",
          tools: "React.js, Chart.js, api-to-go",
          links: ["https://github.com/anabrd/time-tracker-app", "https://a-time-tracker-app.herokuapp.com/"]
        },
        {
          name: "Snakes and Ladders",
          description: "Classic board game reimagined as a pure JavaScript web page.",
          tools: "JavaScript, Vectary",
          links: ["https://github.com/anabrd/snakes-and-ladders", "https://anabrd.github.io/snakes-and-ladders/"]
        },
        {
          name: "Roughly the Size Of",
          description: "Country to US State comparison.",
          tools: "Python/Flask, SQLite, Bootstrap",
          links: ["TBA", "TBA"]
        },
        {
          name: "Know Flow",
          description: "Platform for sharing personal learning roadmaps.",
          tools: "React.js, TBA",
          links: ["TBA", "TBA"]
        }
      ]
    },
    {
      id: 3,
      title: "Contact",
      heading: "Kontakt",
      description: "Get in touch.",
      contactForm: [
        {
          label: "Your Name",
          placeholder: "Please enter your name"
        },
        {
          label: "Your Email",
          placeholder: "Please enter your email"
        },
        {
          label: "Your Message",
          placeholder: "Please enter your message"
        }
      ],
      contactLinks: [
        {
          name: "Lebenslauf",
          link: "TBA"
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/anabrdar/"
        },
        {
          name: "GitHub",
          link: "https://github.com/anabrd"
        }
      ]
    }
  ]

  const [activeLang, setActiveLang] = useState("EN");
  const [activeData, setActiveData] = useState(dataEN);

  useEffect(() => {
    if (activeLang == "EN") {
      setActiveData(dataEN)
    } else if (activeLang == "DE") {
      setActiveData(dataDE)
    }

  }, [activeLang])

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
