const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')
const { connect } = require("./database/init")

// 执行数据库文件
;(async ()=> {
  await connect()
})()

app.use(views(resolve(__dirname,'./views'),{
  extension: 'pug'
}))

app.use(async (ctx,next)=>{
  await ctx.render('index',{
    you: '刘欢',
    me: '四碗饭'
  })
})

app.listen(2333)
