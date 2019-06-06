const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const { resolve } = require('path');

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}));
app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'liuhuan',
    me: 'huanliu'
  })
});

app.listen(3000, () => {
  console.log('请打开3000端口');
});
