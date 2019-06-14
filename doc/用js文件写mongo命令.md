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

### multi选项
<span style='color:red;font-size:20px'>这时候每个数据都发生了改变，multi是有ture和false两个值，true代表全部修改，false代表只修改一个（默认值）</span>

给每个都添加一项的时候用到

```
db.workmate.update({},{$set:{interset:[]}},{multi:true})
```

### upsert选项

upsert是在找不到值的情况下，直接插入这条数据。比如我们这时候又来了一个新同事xiaoWang，我们这时候修改他的信息，age设置成20岁，但集合中并没有这条数据。这时候可以使用upsert选项直接添加。

```
db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})
```
upsert也有两个值：true代表没有就添加，false代表没有不添加(默认值)。
