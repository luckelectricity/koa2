### 新建一个goTask.js文件。文件内容如下：

```
var userName="jspang";    //声明一个登录名
var timeStamp=Date.parse(new Date());     //声明登录时的时间戳
var jsonDdatabase={"loginUnser":userName,"loginTime":timeStamp}; //组成JSON字符串
var db = connect('log');   //链接数据库
db.login.insert(jsonDdatabase);  //插入数据

print('[demo]log  print success');  //没有错误显示成功
```

### 执行JS文件

```
mongo goTask.js
```


### 批量插入：

```
db.test.insert([
    {"_id":1},
    {"_id":2},
    {"_id":3}
])
```

### update修改器
写入大量数据后，发现有问题，就需要修改器。
```
db.workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}})
```

### 修改嵌套内容(内嵌文档)

```
db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})
```

### $unset用于将key删除

```
db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})
```

### $inc对数字进行计算

<span style='color:red;font-size:20px'>它是对value值的修改，但是修改的必须是数字，字符串是不起效果的</span>
```
db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})
```
