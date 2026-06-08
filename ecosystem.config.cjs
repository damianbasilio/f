const path = require("path");

module.exports = {
  apps: [
    {
      name: "outreach-pipeline",
      script: "lib/daily-pipeline.mjs",
      cwd: __dirname,
      watch: false,
      restart_delay: 5000,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
      },
    },
    {
      name: "outreach-dashboard",
      script: "scripts/server.mjs",
      cwd: __dirname,
      watch: false,
      restart_delay: 5000,
      max_restarts: 10,
      env: {
        NODE_ENV: "production",
        PORT: 3456,
      },
    },
  ],
};
