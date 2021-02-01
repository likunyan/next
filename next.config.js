require("dotenv").config();

module.exports = {
  env: {
    apiUrl: "https://api.233.sx",
    NEXT_APP_NAME: process.env.NEXT_APP_NAME,
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };
    return config;
  },
};
