const dataEN = [{
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
        description: ["I am a full-stack web developer with strong focus on front-end technologies.", "A while back, I decided to part ways with my career as a translator and shift my focus from natural to programming languages. I enrolled in an intensive one-year course focused on MERN stack. ",
            "Since then, I've been building project using mainly with JavaScript and React.", "Aside from my experience in developing clean, responsive SPAs, I have a growing interest in backend technologies."
        ],
        subheading: "Tools & technologies",
        content: [
            ["HTML", "CSS", "Sass", "Bootstrap"],
            ["JavaScript", "JQuery", "React.js", "Redux"],
            ["Node.js", "Express.js", "MongoDB"],
            ["Git", "GitHub", "NPM"],
            ["Figma", "Notion", "Slack", "Toggl"]
        ]
    },
    {
        id: 2,
        title: "Projects",
        heading: "Projects",
        description: "Portfolio of projects.",
        content: [{
                name: "Time Tracker App",
                description: "App for tracking time and generating reports built with MERN stack.",
                tools: "React.js, Chart.js, Material-UI, api-to-go",
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
                tools: "TBA",
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
        contactForm: [{
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
            }
        ],
        contactLinks: [{
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

export default dataEN;