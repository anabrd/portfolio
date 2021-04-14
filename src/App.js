import {
  BrowserRouter as Router
} from "react-router-dom";
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  let dataEN = [
    {
      id: 1,
      title: "About",
      description: "lorem ipsum",
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
      description: "Get in touch.",
      content: [
        {
          contactForm: 
          [
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
          ]
        },
        {
          contactLinks: 
          [
            {
              name: "CV",
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
    }
  ]


  let dataDE = [
    {
      id: 1,
      title: "Über Mich",
      description: "lorem ipsum",
      subheading: "Tools & technologies",
      content: [["html", "css", "sass", "bootstrap"], 
                ["javascript","jquery", "react.js", "redux"], 
                ["node.js", "express", "mongoDB"],
                ["git", "github", "npm"], 
                ["figma", "notion", "slack", "toggl"]]
    }, 
    {
      id: 2,
      title: "Projekte",
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
      title: "Kontakt",
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
          name: "CV",
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

  const [activeLang, setActiveLang] = useState(dataEN);

  

  return (
    <Router>
      <Navbar data = {dataEN}/>
      <main>
        <Landing />
        <About data = {dataEN}/>
        <Projects data = {dataEN}/>
        <Contact data = {dataEN}/>
      </main>
    </Router>
  );
}

export default App;
