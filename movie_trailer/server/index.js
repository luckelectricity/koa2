const Koa = require('koa');
const app = new Koa();
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl');
const pug = require('pug');
app.use(async (ctx, next) => {
  ctx.type = 'text/html; charset=utf-8';
  ctx.body = pug.render(pugTpl, {
    you: '刘欢',
    me: 'luckelectricity'
  });
});

app.listen(3000, () => {
  console.log('请打开3000端口');
});
