const dataEN = [{
        id: 0,
        title: "Landing",
        heading: "Home",
        subheading: "Ana Brdar",
        description: "Berlin-based Web Developer"
    },
    {
        id: 1,
        title: "About",
        heading: "About",
        description: [
            {
                regular:"I am a full-stack web developer with strong focus on ", 
                strong: "front-end technologies."
            }, 
            {
                regular:"A while back, I decided to part ways with my career as a translator and shift my focus from natural to programming languages. I enrolled in an intensive one-year course focused on ",
                strong: "MERN stack.",
            },
            {
                regular: "Since then, I've been building project using mainly ",
                strong: "JavaScript and React."
            }, 
            {
                regular: "Aside from my experience in developing SPAs, I have a growing interest in ",
                strong: "backend technologies and mobile app development."
            }
        ],
        subheading: "Tools & technologies",
        content: [
            ["HTML", "CSS", "Sass", "Bootstrap"],
            ["JavaScript", "React.js"],
            ["Node.js", "Express.js", "MongoDB", "Socket.io"],
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
                name: "get it done",
                description: "Full-stack task management app with authentication.",
                tools: "React, Material-UI, Node.js, Express, MongoDB",
                links: ["https://github.com/anabrd/get-it-done-app", "https://anabrd.github.io/get-it-done-app/"]
            },
            {
                name: "Snakes and Ladders",
                description: "Classic board game reimagined as a pure JavaScript web page.",
                tools: "HTML, CSS, JavaScript, Vectary",
                links: ["https://github.com/anabrd/snakes-and-ladders", "https://anabrd.github.io/snakes-and-ladders/"]
            },
            {
                name: "Portfolio",
                description: "Personal webpage showcasing skills and projects.",
                tools: "React, React Spring",
                links: ["https://github.com/anabrd/react-portfolio", "https://anabrd.github.io/react-portfolio/"]
            },
            {
                name: "Roughly the Size Of",
                description: "Country to US State comparison.",
                tools: "Bootstrap, Python/Flask, SQLite",
                links: ["https://github.com/anabrd/roughly-the-size-of", "https://roughlythesizeof.herokuapp.com/"]
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
                path: "./Ana_Brdar_CV.pdf"
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