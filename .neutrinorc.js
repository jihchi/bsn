module.exports = {
  use: [
    '@neutrinojs/airbnb-base',
    [
      '@neutrinojs/library',
      {
        name: 'bsn'
      }
    ],
    '@neutrinojs/jest'
  ]
};
