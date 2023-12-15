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
        regular: 'A while back, I decided to part ways with my career as a translator and shift my focus from natural to programming languages.',
      },
      {
        regular: 'Since then, I have been working as a full-stack engineer.',
      },
      {
        regular: 'I enjoy exploring the intersection of techology, linguistics and language learning in my spare time.',
      },
    ],
    subheading: 'Tools & technologies',
    content: [
      ['JavaScript', 'TypeScript', 'Node.js'],
      ['GraphQL', 'NestJS', 'Prisma'],
      ['PostgreSQL', 'Jest', 'MongoDB'],
      ['Git', 'GitHub', 'Bitbucket'],
      ['Figma', 'Jira', 'Slack', 'Notion'],
    ],
  },
  {
    id: 2,
    title: 'Projects',
    heading: 'Projects',
    description: 'Portfolio of projects.',
    content: [
      {
        name: 'Roughly the Size Of',
        description: 'Country to US State comparison.',
        tools: 'Bootstrap, Python/Flask, Jinja, SQLite',
        links: ['https://github.com/anabrd/roughly-the-size-of', 'https://roughly-the-size-of-cdf85c2c6396.herokuapp.com/'],
      },
      {
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
    }
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
