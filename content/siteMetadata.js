const siteMetadata = {
  title: 'Cristian Encalada',
  author: 'Cristian Encalada',
  headerTitle: 'Cristian Encalada',
  description: 'Software Developer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://cristian-encalada.vercel.app/',
  siteRepo: 'https://github.com/cristian-encalada/dev',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'cris.encalada.camargo@gmail.com',
  github: 'https://github.com/cristian-encalada',
  twitter: 'https://twitter.com/',
  facebook: 'https://facebook.com/',
  linkedin: 'https://www.linkedin.com/in/cristian-encalada-45099616a/',
  spotify: 'https://open.spotify.com/user/31xvb2nhfxowxiz7xopouijljnl4',
  steam: 'https://steamcommunity.com/id/3113TT/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
