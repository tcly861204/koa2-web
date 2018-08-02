const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'www.baidu.com';
});

app.listen(81);
