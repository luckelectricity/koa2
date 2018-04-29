const Koa = require('koa')
const app = new Koa()
const { ejsTpl, htmlTpl, pugTpl } = require("./tpl")
const ejs = require('ejs')
// const pug = require('pug')
app.use(async (ctx,next)=>{
  ctx.type = "text/html;charset=utf-8"
  ctx.body = ejs.render(ejsTpl, {
    you: 'electricity',
    me: '刘欢'
  })
})
app.listen(2333)
