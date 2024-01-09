import {
  frontend,
  backend,
  data,
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
    title: "Data Engineer",
    icon: data,
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
      "Developing web applications using JavaScript, React and Node.js",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with other developers to create high-quality and robust applications",
      "Developing automated tests and writing software documentation",
    ],
  },
  {
    title: "QA Software Engineer",
    company_name: "Jalasoft | Bolivia",
    icon: jalasoft,
    iconBg: "#E6DEDD",
    date: "Feb 2018 - Feb 2020",
    points: [
      "Performing different testing techniques (functional, performance, regression, end-to-end, white/black box) and automated tests using tools like Git, Selenium, Jira, SQL.",
      "Analyzing product requirements from the customer's perspective and verified the acceptance criteria from the technical side using Scrum.",
      "Collaborating with different teams (Front-end, Back-end, DevOps, and Automation, ETL) and gained experience in CI/CD tools (Jenkins) and SDLC/ETL processes.",
    ],
  },
  {
    title: "IT Technician",
    company_name: "Soft Computers | Bolivia",
    icon: softComputers,
    iconBg: "#E6DEDD",
    date: "Apr 2017 - Feb 2018",
    points: [
      "Providing technical support for hardware and software, including operating systems installation (Linux, Windows) and virtualization.",
      "Linux SysAdmin, Networking and Infrastructure tasks (Identifying and fixing network issues)",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Alquivago",
    description:
      "Web application that allows users to search and compare long-term rental properties from multiple sources in Montevideo - Uruguay, providing a convenient and efficient solution for housing searches.",
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
      "A simple web application that allows users to take notes, tag, and filter them.",
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

export { services, technologies, experiences, testimonials, projects };
