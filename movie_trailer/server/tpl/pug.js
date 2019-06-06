module.exports = `
doctype html
html
  head
    meta(charset="UTF-8")
    meta(name="viewport" content="width=device-width, initial-scale=1.0")
    meta(http-equiv="X-UA-Compatible" content="ie=edge")
    link(href="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap-grid.css" rel="stylesheet")
    title 测试pug模板
body
  .container
    .row
      .col-md-8
        h1 Hi #{you}
        p This is #{me}
      .col-md-4
        p 测试pug 模板页面
script(src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js")
script(src="https://cdn.bootcss.com/twitter-bootstrap/4.3.1/js/bootstrap.bundle.js")
`;
