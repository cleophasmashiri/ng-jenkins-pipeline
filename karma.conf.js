process.env.CHROME_BIN = '/usr/bin/chromium-browser';
module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    // other configuration options
  });
};
