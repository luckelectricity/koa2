const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  let url = ctx.request.url;
  if (url == '/a') {
    ctx.body = '你好， koa。' + url;
  } else {
    ctx.body = '再见， koa。' + url;
  }
});

app.listen(3000);
console.log('请运行localhost:3000,打开页面');
