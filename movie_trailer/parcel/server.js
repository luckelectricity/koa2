const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static')
const { resolve } = require('path');

app.use(serve(resolve(__dirname, './')));
app.listen(3000, () => {
  console.log('请打开3000端口');
});
