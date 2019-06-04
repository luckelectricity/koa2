# koa2
koa2 练习项目

------

### cookie
----
#### set
    ctx.cookies.set(name, value, [options])
    通过 options 设置 cookie name 的 value :

    maxAge 一个数字表示从 Date.now() 得到的毫秒数
    signed cookie 签名值
    expires cookie 过期的 Date
    path cookie 路径, 默认是'/'
    domain cookie 域名
    secure 安全 cookie
    httpOnly 服务器可访问 cookie, 默认是 true
    overwrite 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。

#### get

    ctx.cookies.get(name, [options])
    通过 options 获取 cookie name:

    signed 所请求的cookie应该被签名


参考这个链接：
[Koa2进阶学习笔记](https://chenshenhai.github.io/koa2-note/)

中间件
----
[koa-router](https://www.npmjs.com/package/koa-router) 不解释，自己看文档

[koa-static](https://www.npmjs.com/package/koa-static) 静态文件服务的中间件

[koa-session-minimal](https://www.npmjs.com/package/koa-session-minimal) 适用于koa2 的session中间件，提供存储介质的读写接口 。

[koa-mysql-session](https://www.npmjs.com/package/koa-mysql-session) 为koa-session-minimal中间件提供MySQL数据库的session数据读写操作。
将sessionId和对于的数据存到数据库

测试模块
----
[mocha](https://www.npmjs.com/package/mocha) 模块是测试框架

[chai](https://www.npmjs.com/package/chai)模块是用来进行测试结果断言库，比如一个判断 1 + 1 是否等于 2

[supertest](https://www.npmjs.com/package/supertest) 模块是http请求测试库，用来请求API接口

debug
----

node --inspect index.js 这样就能在chrome进行debug
