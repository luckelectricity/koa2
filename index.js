const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
    ctx.body = '你好， koa。'
})

app.listen(3000)
console.log('请运行localhost:3000,打开页面');
