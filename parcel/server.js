const Koa = require('koa')
const app = new Koa()

const serve = require("koa-static")

const { resolve } = require('path')

app.use(serve(resolve(__dirname,'./'),{
  extension: 'pug'
}))
app.listen(4466)
