const Koa = require('koa');
const logger = require('koa-logger');
const session = require('koa-session');
const app = new Koa();
app.keys = ['hi liuhuan'];
app.use(logger());
app.use(session(app));
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return;
  let n = ctx.session.views || 0;
  ctx.session.views = ++n;
  ctx.body = '浏览过' + ctx.session.views + '次';
});

app.listen(3000, () => {
  console.log('[demo] test-unit is starting at port 3000');
});
