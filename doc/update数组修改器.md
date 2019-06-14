## update数组修改器

### $push追加数组/内嵌文档值

$push的功能是追加数组中的值，但我们也经常用它操作内嵌稳文档，就是{}对象型的值。先看一个追加数组值的方式，比如我们要给小王加上一个爱好(interset)为画画（draw）：


```
db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})
```

当然$push修饰符还可以为内嵌文档增加值，比如我们现在要给我们的UI，增加一项新的技能skillFour为draw，这时候我们可以操作为：

```
db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})
```

### $ne查找是否存在

它主要的作用是，检查一个值是否存在，如果不存在再执行操作，存在就不执行，这个很容易弄反，记得我刚学的时候就经常弄反这个修改器的作用，给自己增加了很多坑。

```
db.workmate.update({name:'liuhuan',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})
```

### $addToSet 升级版的$ne

它是$ne的升级版本（查找是否存在，不存在就push上去），操作起来更直观和方便，所以再工作中这个要比$en用的多。
```
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:"readBook"}})

```

### $each 批量追加
它可以传入一个数组，一次增加多个值进去，相当于批量操作，性能同样比循环操作要好很多，这个是需要我们注意的，工作中也要先组合成数组，然后用批量的形式进行操作。

```
var newInterset=["Sing","Dance","Code"];
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:{$each:newInterset}}})
```

### $pop 删除数组值

$pop只删除一次，并不是删除所有数组中的值。而且它有两个选项，一个是1和-1。

     1：从数组末端进行删除

    -1：从数组开端进行删除
```
db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})
```

### 数组定位修改
有时候只知道修改数组的第几位，但并不知道是什么，这时候我们可以使用interest.int 的形式。

```
db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})
```
