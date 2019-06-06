const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  ctx.body = '电影预告'
})

app.listen(3000, () => {
  console.log('请打开3000端口');
})
