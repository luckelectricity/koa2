const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const Router = require('koa-router');
const path = require('path')
let home = new Router();

function render() {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, './list.html'), 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

home.get('/', async ctx => {
  let html = await render();
  ctx.body = html;
});

app.use(home.routes()).use(home.allowedMethods());

app.listen(3000, () => {
  console.log(123);
});
