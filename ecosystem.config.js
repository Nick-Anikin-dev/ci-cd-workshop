module.exports = {
  apps : [{
    name: 'realworld',
    script: 'dist/main.js',
    env_production: {
      PORT: 3000
    }
  }],
};
