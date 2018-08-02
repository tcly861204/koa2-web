const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello Worldnihao';
});

app.listen(81);
