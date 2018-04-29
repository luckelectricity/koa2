module.exports = `
doctype html
html
  head
    meta(charset="utf-8")
    <title>koa Server HTML</title>
    meta(name="viewport" content="width=device-width,initial-scale=1,user-scalable=0")
    link(href="https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet")
    script(src="https://cdn.bootcss.com/jquery/3.2.0/jquery.min.js")
    script(src="https://cdn.bootcss.com/bootstrap/4.1.0/js/bootstrap.bundle.min.js")
  body
    .container
      .row
        .col-md-8
          h1 Hi #{you}
          p this is #{me}
        .col-md-4
          p 测试动态 pug 模板引擎
`
