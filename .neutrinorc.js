module.exports = {
  options: {
    mains: {
      index: 'index',
      cli: 'cli',
    },
  },
  use: [
    '@neutrinojs/airbnb-base',
    [
      '@neutrinojs/library',
      {
        name: 'bsn',
        target: 'node',
        libraryTarget: 'commonjs2',
        babel: {
          presets: [
            [
              'babel-preset-env',
              {
                targets: {
                  node: '8.0',
                },
              },
            ],
          ],
        },
      },
    ],
    '@neutrinojs/jest',
  ],
};
