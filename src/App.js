import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Navbar } from './components/Navbar'
import Section from './components/Section'
import Landing from './components/Landing'

function App() {

  let dataEN = [
    {
      id: 1,
      title: "About",
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

  let dataDE = [
    // TBA
  ]

  return (
    <Router>
      <Navbar />
      <main>
        <Landing />
        <Section title = "about" />
        <Section title = "projects" />
        <Section title = "contact" />
      </main>
    </Router>
  );
}

export default App;
