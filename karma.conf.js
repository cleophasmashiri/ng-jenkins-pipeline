process.env.CHROME_BIN = '/usr/bin/chromium-browser';
module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    // other configuration options
  });
};
