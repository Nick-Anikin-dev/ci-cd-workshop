module.exports = {
  apps : [{
    name: 'app',
    script: 'dist/main.js',
    env_production: {
      PORT: 3000,
    }
  }],
};
