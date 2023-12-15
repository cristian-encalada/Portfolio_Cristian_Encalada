export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Some projects`,
    title: `I've worked on`,
    image: {
      src: '/static/images/main_apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I contributed on',
    title: 'Alquivago',
    image: {
      src: '/static/images/projects/alquivago/alquivago_demo.webp',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I built my`,
    title: 'Personal website',
    image: {
      src: '/static/images/projects/blog/personal_website.webp',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I made a`,
    title: 'Command Line Interpreter',
    image: {
      src: '/static/images/projects/cli_interpreter/CCli.webp',
      width: 600,
      height: 717,
    },
  },
];
