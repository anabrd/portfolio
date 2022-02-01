const dataEN = [{
  id: 0,
  title: 'Landing',
  heading: 'Home',
  subheading: 'Ana Brdar',
  description: 'Berlin-based Web Developer',
},
{
  id: 1,
  title: 'About',
  heading: 'About',
  description: [
    {
      regular: 'Hi! My name is Ana and I am a software engineer.',
    },
    {
      regular: 'A while back, I decided to part ways with my career as a translator and shift my focus from natural to programming languages. I enrolled in an intensive one-year web development course.',
    },
    {
      regular: 'Since then, I have been working as an engineer with fullstack capabilites.',
    },
    {
      regular: 'I enjoy exploring the intersection of techology, linguistics and language learning in my spare time.',
    },
  ],
  subheading: 'Tools & technologies',
  content: [
    ['HTML', 'CSS', 'Bootstrap'],
    ['JavaScript', 'React.js', 'Typescript'],
    ['Node.js', 'Express.js', 'MongoDB'],
    ['Git', 'GitHub', 'Bitbucket', 'jest'],
    ['Figma', 'Notion', 'Slack', 'Toggl'],
  ],
},
{
  id: 2,
  title: 'Projects',
  heading: 'Projects',
  description: 'Portfolio of projects.',
  content: [{
    name: 'get it done',
    description: 'Full-stack task management app with authentication.',
    tools: 'React, Material-UI, Node.js, Express, MongoDB',
    links: ['https://github.com/anabrd/get-it-done-app', 'https://anabrd.github.io/get-it-done-app/'],
  },
  {
    name: 'Snakes and Ladders',
    description: 'Classic board game reimagined as a pure JavaScript web page.',
    tools: 'HTML, CSS, JavaScript, Vectary',
    links: ['https://github.com/anabrd/snakes-and-ladders', 'https://anabrd.github.io/snakes-and-ladders/'],
  },
  {
    name: 'Paved',
    description: 'App for sharing curated learning paths. Collaboration project.',
    tools: 'React, Material-UI, Node.js, Express, MongoDB',
    links: ['https://github.com/Paved-Team/paved', 'https://paved-2021.herokuapp.com/'],
  },
  {
    name: 'Roughly the Size Of',
    description: 'Country to US State comparison.',
    tools: 'Bootstrap, Python/Flask, SQLite',
    links: ['https://github.com/anabrd/roughly-the-size-of', 'https://roughlythesizeof.herokuapp.com/'],
  },
  ],
},
{
  id: 3,
  title: 'Contact',
  heading: 'Contact',
  description: 'Get in touch.',
  contactForm: [{
    name: 'name',
    label: 'Your Name',
    type: 'text',
    placeholder: 'Please enter your name',
  },
  {
    name: 'email',
    label: 'Your Email',
    type: 'email',
    placeholder: 'Please enter your email',
  },
  {
    name: 'message',
    label: 'Your Message',
    type: 'text',
    placeholder: 'Please enter your message',
  },
  ],
  contactLinks: [{
    name: 'CV',
    path: './Ana_Brdar_CV.pdf',
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/anabrdar/',
  },
  {
    name: 'GitHub',
    path: 'https://github.com/anabrd',
  },
  ],
},
];

export default dataEN;
