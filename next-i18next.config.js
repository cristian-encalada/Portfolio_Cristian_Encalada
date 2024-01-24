module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  localePath: require('path').resolve('./public/locales'),
};
