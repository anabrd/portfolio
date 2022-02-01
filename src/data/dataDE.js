const dataDE = [{
  id: 0,
  title: 'Landing',
  heading: 'Home',
  subheading: 'Ana Brdar',
  description: 'Full-Stack Webentwicklerin',
},
{
  id: 1,
  title: 'About',
  heading: 'Über mich',
  description: ['I am a full-stack web developer with strong focus on front-end technologies. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
  subheading: 'Werkzeuge',
  content: [
    ['html', 'css', 'sass', 'bootstrap'],
    ['javascript', 'jquery', 'react.js', 'redux'],
    ['node.js', 'express', 'mongoDB'],
    ['git', 'github', 'npm'],
    ['figma', 'notion', 'slack', 'toggl'],
  ],
},
{
  id: 2,
  title: 'Projects',
  heading: 'Projekte',
  description: 'lorem ipsum',
  content: [{
    name: 'Time Tracker App',
    description: 'App zur Zeiterfassung und Erstellung von Berichten, die mit dem MERN-Stack erstellt wurde.',
    tools: 'React.js, Chart.js, api-to-go',
    links: ['https://github.com/anabrd/time-tracker-app', 'https://a-time-tracker-app.herokuapp.com/'],
  },
  {
    name: 'Snakes and Ladders',
    description: 'Das klassische Brettspiel, erstellt in diesem Projekt als pure JavaScript-Webseite.',
    tools: 'JavaScript, Vectary',
    links: ['https://github.com/anabrd/snakes-and-ladders', 'https://anabrd.github.io/snakes-and-ladders/'],
  },
  {
    name: 'Roughly the Size Of',
    description: 'TBA',
    tools: 'TBA',
    links: ['TBA', 'TBA'],
  },
  {
    name: 'TBA',
    description: 'Plattform für den Austausch von persönlichen Lernfahrplänen.',
    tools: 'React.js, TBA',
    links: ['TBA', 'TBA'],
  },
  ],
},
{
  id: 3,
  title: 'Contact',
  heading: 'Kontakt',
  description: 'Melden Sie sich.',
  contactForm: [{
    name: 'name',
    label: 'Your Name',
    type: 'text',
    placeholder: 'Bitte geben Sie Ihre Name ein',
  },
  {
    name: 'e-mail',
    label: 'Your Email',
    type: 'email',
    placeholder: 'Bitte geben Sie Ihre E-mailadresse ein',
  },
  {
    name: 'nachricht',
    label: 'Your Message',
    type: 'text',
    placeholder: 'Bitte geben Sie Ihre Nachricht ein',
  },
  ],
  contactLinks: [{
    name: 'Lebenslauf',
    link: 'TBA',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/anabrdar/',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/anabrd',
  },
  ],
},
];

export default dataDE;
