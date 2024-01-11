import {
  frontend,
  backend,
  data,
  devops,
  design,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  softComputers,
  jalasoft,
  dev,
  carrent,
  jobit,
  tripguide,
  threejs,
  alquivago,
  notesapp,
  web3d,
  holberton,
  incos,
  umss,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "DevOps",
    icon: devops,
  },
  {
    title: "3D Designer (Hobbyist)",
    icon: design,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Freelance | Uruguay",
    icon: dev,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "RESPONSIBILITIES",
      "Developing web applications with technologies such as Python, JavaScript, React and Node.js.",
      "Implementing unit tests using Jest (BDD/TDD patterns) and writing software documentation.",
      "IMPACT AND ACHIEVEMENTS",
      "Collaborated with other developers to create more complex and robust solutions (check Alquivago project).",
      "Containerized with Docker and deployed with Vercel 3+ applications applying diverse technologies.",
    ],
  },
  {
    title: "QA Software Engineer",
    company_name: "Jalasoft | Bolivia",
    icon: jalasoft,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - Feb 2020",
    points: [
      "RESPONSIBILITIES",
      "Analyze and perform different testing techniques (functional, performance, regression, end-to-end, white/black box) and automated tests using tools like Git, Selenium, Jira, and SQL.",
      "IMPACT AND ACHIEVEMENTS",
      "Career Progression from Trainee to Junior QA Tester within 3 months and eventually achieved an open-ended contract as a QA Software Engineer.",
      "Collaborated with different teams (Front-end, Back-end, DevOps, and Automation, ETL) acquiring experience in CI/CD tools (Jenkins) and SDLC/ETL processes.",
      "Created a technical manual for the testing team, detailing the steps to configure a virtualized local environment for ETL testing.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Soft Computers | Bolivia",
    icon: softComputers,
    iconBg: "#E6DEDD",
    date: "Apr 2017 - Feb 2018",
    points: [
      "RESPONSIBILITIES",
      "Providing technical support for hardware and software, including operating systems installation (Linux, Windows) and virtualization.",
      "Performing Linux SysAdmin, Networking and Infrastructure tasks (Identifying and fixing network issues)",
      "IMPACT AND ACHIEVEMENTS",
      "Suggested and implemented a Ticketing System to manage support requests.",

    ],
  },
];

const courses = [
  {
    title: "Software Developer",
    institution: "Holberton School | Uruguay",
    icon: holberton,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Nov 2023",
    points: [
    ],
  },
  {
    title: "IT Technician",
    institution: "Instituto Alvarez Plata | Bolivia",
    icon: incos,
    iconBg: "#E6DEDD",
    date: "Feb 2015 - Dic 2017",
    points: [
    ],
  },
  {
    title: "Electronics Engineer",
    institution: "Universidad Mayor de San Simón | Bolivia",
    icon: umss,
    iconBg: "#E6DEDD",
    date: "Feb 2011 - Dic 2016",
    points: [
    ],
  },
];
const projects = [
  {
    name: "Alquivago",
    description:
      "Web application that allows users to search and compare long-term rental properties from multiple sources in Montevideo - Uruguay.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "yellow-text-gradient",
      },
    ],
    image: alquivago,
    demo_link: 'https://alquivago.vercel.app/',
    source_code_link: "https://github.com/cristian-encalada/Alquivago",
    // https://alquivago-landing.vercel.app/
  },
  {
    name: "3D Web App",
    description:
      "3D application with fun interactive parts, such a floating island and a fox that moves when you type. It can be used as a landing page for a new game or product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "yellow-text-gradient",
      },
    ],
    image: web3d,
    demo_link: 'https://cristian-encalada-portfolio.vercel.app/',
    source_code_link: "https://github.com/cristian-encalada/3D-react-app",
  },
  {
    name: "Notes App",
    description:
      "A simple web application that allows users to take notes, tag, and filter them. The application stores the notes in a remote database for data availability.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "yellow-text-gradient",
      },
    ],
    image: notesapp,
    demo_link: 'https://notes-app-react-ce.vercel.app/',
    source_code_link: "https://github.com/cristian-encalada/notes-web-app",
  },
];

export { services, technologies, experiences, courses, projects };
