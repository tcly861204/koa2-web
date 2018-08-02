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
      host : 'tcly861204.com',
      ref  : 'origin/master',
      repo : 'git@github.com:tcly861204/koa2-web.git',
      path : '/usr/src/koa2-web',
      'post-deploy' : 'npm install && pm2 reload .pm2.config.js --env production'
    }
  }
};
