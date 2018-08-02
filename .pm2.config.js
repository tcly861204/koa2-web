module.exports = {
  apps : [{
    name      : 'dev',
    script    : 'app.js',
    log_date_format: "YYYY-MM-DD HH:mm Z",
    error_file: "log/node-app.stderr.log",
    out_file: "log/node-app.stdout.log",
    watch: true,
    merge_logs: true,
    exec_interpreter: "node",
    exec_mode: "fork",
    autorestart: true,
    vizion: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],
  deploy : {
    production : {
      user : 'tcly861204',
      host : 'localhost:3000',
      ref  : 'origin/master',
      repo : 'git@github.com:koa2-web.git',
      path : 'E:/github/koa2',
      'post-deploy' : 'npm install && pm2 reload .pm2.config.js --env production'
    }
  }
};
