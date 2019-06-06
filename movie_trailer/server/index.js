const Koa = require('koa');
const app = new Koa();
const nomal = require('./tpl/nomal');

app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8';
  ctx.body = nomal;
});

app.listen(3000, () => {
  console.log('请打开3000端口');
});
