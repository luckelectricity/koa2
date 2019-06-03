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


