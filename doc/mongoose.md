![ LocalLibrary 模型](http://ww1.sinaimg.cn/large/727a42dbly1g3w6egu8ufj213a0ven2k.jpg)

## Mongoose 入门

### 安装 Mongoose

```$ npm install mongoose```

### 连接到 MongoDB

Mongoose 需要连接到 MongoDB 数据库。可以 require() 之，并通过 mongoose.connect() 连接到本地数据库，如下。

```
// 导入 mongoose 模块
const mongoose = require('mongoose');

// 设置默认 mongoose 连接
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB);
// 让 mongoose 使用全局 Promise 库
mongoose.Promise = global.Promise;
// 取得默认连接
const db = mongoose.connection;

// 将连接与错误事件绑定（以获得连接错误的提示）
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));
```
