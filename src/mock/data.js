import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rashad J Madison | Software Engineer - Frontend Developer - QA Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Welcome to my Portfolio site. I am a engineer with diverse talents, always looking for opportunities to create, test and design software. Here you will find an up-to-date resume and examples of my current work. ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  img: 'logo.png',
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'RashadMadisonFullstackReactApplication_img.png',
    title: 'React Fullstack Application',
    info:
      'Built a client in react.js for a SQL Rest api. This application has sign up and sign in functionality for users. It also allows users to create books, make changes to them, view and delete them. ',
    info2:
      'This application is one of the most challenging ones that I have made. Creating this gave me an understanding of front and backend technologies and how they communicate.',
    url: '',
    repo: 'https://github.com/rashadmad/REACT-Fullstack-Application', // if no repo, the button will not show up
    skills: ['REACT', 'JavaScript', 'sqlite3', 'Node.js'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonRestAPI_img.png',
    title: 'Rest API',
    info:
      'Utilizing Express.js and SQL I created a REST API that gives users CRUD functionalities over items in a school database.',
    info2:
      'This was my first backend database. Creating amplified my understand of software as a whole',
    url: '',
    repo: 'https://github.com/rashadmad/REST-API', // if no repo, the button will not show up
    skills: ['Express.js', 'sqlite3', 'JavaScript', 'Node.js'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonRandomQuoteGenerator_img.png',
    title: 'Random Quote Generator',
    info:
      'project that displays random famous quotes from many African American Leaders. I used vanilla JavScript to create this. it was a requirement of the TAP(treehouse apprenticeship program). At the time it was Black history month and I wanted to show my appreciation of the many african american heros over the years. This project gave me the opportunity to get used to dealing with json like data structures',
    info2: '',
    url: 'https://rashadmad.github.io/Public-API-Requests-project-5/',
    repo: 'https://github.com/rashadmad/Public-API-Requests-project-5', // if no repo, the button will not show up
    skills: ['JQuery', 'HTML5', 'CSS', 'JavaScript'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonPublicAPI_img.png',
    title: 'Random User api Project',
    info:
      'Pagination of multiple student list items with search. This project continues the trend of dealing with common obstacles with data. Usually one would use a library for a pagination and search. But getting the opportunity to see how all of that goes together was eye opening.',
    info2: '',
    url: 'https://rashadmad.github.io/Treehouse-project-pagination-unit-02/',
    repo: 'https://github.com/rashadmad/Treehouse-project-pagination-unit-02', // if no repo, the button will not show up
    skills: ['JSON', 'JavaScript'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonFitnessSite_img.png',
    title: 'Fitness site',
    info:
      'Example of some of my client work. I developed a website for the Fulton Fithouse gym. This site was completed in Bootstrap with a helping hand of JavScript.',
    info2:
      'An important part of this project was discussing with the client and ascertaining his specific business needs.',
    url: 'https://rashadmad.github.io/FitnessSite/',
    repo: 'https://github.com/rashadmad/FitnessSite', // if no repo, the button will not show up
    skills: ['Bootstrap', 'HTML5', 'CSS', 'JavaScript'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonPhraseHunter_img.png',
    title: 'Phrase Hunter',
    info:
      'Similar to wheel of fortune this is a fully functional game where you guess. This project called for me to utilize object oriented programing with JavaScript. I had to create a negative feedback system(for incorrect guesses), multiple states and gives the user the ability to add data to it.',
    info2: '',
    url: 'https://rashadmad.github.io/Oop-game-treehouse-project-4/',
    repo: 'https://github.com/rashadmad/Oop-game-treehouse-project-4', // if no repo, the button will not show up
    skills: ['OOP', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonPagination_img.png',
    title: 'Pagination Project',
    info:
      'Pagination of multiple student list items with search. This project continues the trend of dealing with common obstacles with data. Usually one would use a library for a pagination and search. But getting the opportunity to see how all of that goes together was eye opening.',
    info2: '',
    url: 'https://rashadmad.github.io/Treehouse-project-pagination-unit-02/',
    repo: 'https://github.com/rashadmad/Treehouse-project-pagination-unit-02', // if no repo, the button will not show up
    skills: ['JSON', 'JavaScript'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonOopGame.png',
    title: 'Classic Arcade Game Clone',
    info:
      'This game was my first experience with OOP in javScript. The game requires multiple changes to state as it has a game win and lose lifecycle',
    info2: '',
    url: 'https://rashadmad.github.io/Treehouse-project-pagination-unit-02/',
    repo: 'https://github.com/rashadmad/Treehouse-project-pagination-unit-02', // if no repo, the button will not show up
    skills: ['JSON', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonInteractiveForm.png',
    title: 'Interactive Form',
    info:
      'This interactive form project was a challenge for me. It truly pushed my dom-manipulation skills with vanilla JavScript. Form validation can surprisingly be complex. I appreciated the opportunity to learn regex. I was proud of events being disabled when another event during that same time was selected.',
    info2: '',
    url: 'https://rashadmad.github.io/interactive-form-v2/',
    repo: 'https://github.com/rashadmad/interactive-form-v2', // if no repo, the button will not show up
    skills: ['Regex', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    id: nanoid(),
    img: 'RashadMadisonMatchingGame_img.png',
    title: 'Matching Game',
    info: 'Card matching game that shows my knowledge of JavaScript and CSS animations.',
    info2: 'What I am most proud of here is developing something that works and looks awesome',
    url: 'https://rashadmad.github.io/Public-API-Requests-project-5/',
    repo: 'https://github.com/rashadmad/Public-API-Requests-project-5', // if no repo, the button will not show up
    skills: ['HTML5', 'CSS', 'JavaScript'],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
