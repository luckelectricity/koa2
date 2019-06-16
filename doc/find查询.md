## 查询：find的不等修饰符

### 简单查找：

比如我们现在要查找数据中技能一会HTML+CSS的所有人。那我们直接进行查找加条件就可以了。
```
db.workmate.find({"skill.skillOne":"HTML+CSS"})
```

### 筛选字段

现在返回来的数据项太多，太乱，有时候我们的程序并不需要这么多选项。比如我们只需要姓名和技能就可以了。这时候我们需要写第二个参数，看下面的代码。

```
db.workmate.find(
    {"skill.skillOne":"HTML+CSS"},
    {name:true,"skill.skillOne":true}
)
```
细心的小伙伴会发现还不够完美，多了一个ID字段，这个也不是我们想要的，这时候只要把_id:false就可以了。当然这里的false和true，也可以用0和1表示。

```
db.workmate.find(
    {"skill.skillOne":"HTML+CSS"},
    {name:true,"skill.skillOne":true,_id:false}
)
```

不等修饰符

    > 小于($lt):英文全称less-than
    > 小于等于($lte)：英文全称less-than-equal
    > 大于($gt):英文全称greater-than
    > 大于等于($gte):英文全称greater-than-equal
    > 不等于($ne):英文全称not-equal

我们现在要查找一下，公司内年龄小于30大于25岁的人员。看下面的代码。
```
db.workmate.find(
    {age:{$lte:30,$gte:25}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)
```

### 日期查找

MongoDB也提供了方便的日期查找方法，现在我们要查找注册日期大于2018年1月10日的数据，我们可以这样写代码。

```
var startDate= new Date('01/01/2018');
db.workmate.find(
    {regeditTime:{$gt:startDate}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)
```


## 查询：find的多条件查询

### $in修饰符
in修饰符可以轻松解决一键多值的查询情况。就如上面我们讲的例子，现在要查询同事中年龄是25岁和33岁的信息。
不是25-33（X） 是25 和 33这两个年龄
```
db.workmate.find({age:{$in:[25,33]}},
    {name:1,"skill.skillOne":1,age:1,_id:0}
)
```

### $or修饰符

它用来查询多个键值的情况，就比如查询同事中大于30岁或者会做PHP的信息。主要区别是两个Key值。$in修饰符是一个Key值，这个需要去比较记忆。

```
db.workmate.find({$or:[
    {age:{$gte:30}},
    {"skill.skillThree":'PHP'}
]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)

```

### $and修饰符

$and用来查找几个key值都满足的情况，比如要查询同事中大于30岁并且会做PHP的信息，这时需要注意的是这两项必须全部满足。当然写法还是比较简单的。只要把上面代码中的or换成and就可以了。

```
db.workmate.find({$and:[
    {age:{$gte:30}},
    {"skill.skillThree":'PHP'}
]},
    {name:1,"skill.skillThree":1,age:1,_id:0}
)
```

### $not修饰符

它用来查询除条件之外的值，比如我们现在要查找除年龄大于20岁，小于30岁的人员信息。需要注意的是$not修饰符不能应用在条件语句中，只能在外边进行查询使用。
```
db.workmate.find({
    age:{
        $not:{
            $lte:30,
            $gte:20
        }
    }
},
{name:1,"skill.skillOne":1,age:1,_id:0}
)
```
