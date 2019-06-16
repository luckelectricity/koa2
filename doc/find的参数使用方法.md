## 查询：find的参数使用方法

find参数：

    > query：这个就是查询条件，MongoDB默认的第一个参数。
    > fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
    > limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
    > skip:跳过多少个显示，和limit结合可以实现分页。
    > sort：排序方式，从小到大排序使用1，从大到小排序使用-1。

分页Demo：

明白了上面这些选项，现在可以作一个最简单的分页，我们把同事集合（collections）进行分页，每页显示两个，并且按照年龄从小到大的顺序排列。
limit(x).skip(x*n) n=0,1,2,3,4,5...

```
db.workmate.find({},{name:true,age:true,_id:false}).limit(2).skip(2).sort({age:1});
```
limit skip排序有性能问题，根据网上文章到时候解决

### $where修饰符

它是一个非常强大的修饰符，但强大的背后也意味着有风险存在。它可以让我们在条件里使用javascript的方法来进行复杂查询。我们先来看一个最简单的例子，现在要查询年龄大于30岁的人员。

```
db.workmate.find(
    {$where:"this.age>30"},
    {name:true,age:true,_id:false}
)
```

这里的this指向的是workmate（查询集合）本身。这样我们就可以在程序中随意调用。虽然强大和灵活，但是这种查询对于数据库的压力和安全性都会变重，所以在工作中尽量减少$where修饰符的使用。

## 查询：find如何在js文本中使用

### hasNext循环结果

```
var db = connect("company")  //进行链接对应的集合collections
var result = db.workmate.find() //声明变量result，并把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
while(result.hasNext()){
    printjson(result.next())  //用json格式打印结果
}
```

### forEach循环

利用hasNext循环结果，需要借助while的帮助，MongoDB也为我们提供了forEach循环，现在修改上边的代码，使用forEach循环来输出结果。

```
var db = connect("company")  //进行链接对应的集合collections
var result = db.workmate.find() //声明变量result，并把查询结果赋值给result
//利用游标的hasNext()进行循环输出结果。
result.forEach(function(ele){
    printjson(ele)
})
```

作为个人觉的forEach循环更为优雅。这两种方法都是非常不错的,凭借自己爱好进行选择吧。
