const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  let url = ctx.request.url;
  let req_query = ctx.request.query;
  let req_querystring = ctx.request.querystring;
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;
  ctx.body = {
    url,
    req_query,
    req_querystring,
    ctx_query,
    ctx_querystring
  };
});

app.listen(3000, () => {
  console.log(123);
});
