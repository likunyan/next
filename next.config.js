require('dotenv').config();

module.exports = {
  env: {
    apiUrl: 'https://api.233.sx',
    NEXT_EXAMPLE_TEST:
    process.env.NEXT_EXAMPLE_TEST,
  },
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    return config
  }
};
