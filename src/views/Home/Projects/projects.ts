export type Project = {
  video: string;
  name: string;
  stack: string;
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    video: '/assets/webm/blog.webm',
    name: 'Bilingual Blog (En/Es)',
    stack: 'Next.js | i18next | TailwindCSS',
    description: 'projectDescription1',
    link: 'https://cristianencalada-blog.vercel.app/',
  },
  {
    video: '/assets/webm/alquivago.webm',
    name: 'Alquivago',
    stack: 'Next.js | React | MongoDB | Flask| TailwindCSS | Selenium',
    description: 'projectDescription2',
    link: 'https://alquivago.vercel.app/',
  },
  {
    video: '/assets/webm/app_3d.webm',
    name: '3D Web App',
    stack: 'Vite | React | Three.js | Tailwindcss',
    description: 'projectDescription3',
    link: 'https://thelittleprince-tribute.vercel.app/',
  },
  {
    video: '/assets/webm/overnotes.webm',
    name: 'Stack Overnotes',
    stack: 'MySQL | React | Express | TypeScript',
    description: 'projectDescription4',
    link: 'https://notes-app-react-ce.vercel.app/',
  },
  {
    video: '/assets/webm/svg_buttons.webm',
    name: 'React SVG Buttons',
    stack: 'React | JavaScript | Npm package',
    description: 'projectDescription5',
    link: 'https://cristian-encalada.github.io/react-svg-buttons/',
  },
  {
    video: '/assets/webm/hover_button.webm',
    name: 'React Hover Button',
    stack: 'React | JavaScript | Npm package',
    description: 'projectDescription6',
    link: 'https://cristian-encalada.github.io/react-hover-button/',
  },
];
