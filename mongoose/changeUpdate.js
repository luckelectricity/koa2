// var workmate1 = {
//   name: 'JSPang',
//   age: 33,
//   sex: 1,
//   job: '前端',
//   skill: {
//     skillOne: 'HTML+CSS',
//     SkillTwo: 'JavaScript',
//     SkillThree: 'PHP'
//   },
//   regeditTime: new Date()
// };

// var workmate2 = {
//   name: 'ShengLei',
//   age: 30,
//   sex: 1,
//   job: 'JAVA后端',
//   skill: {
//     skillOne: 'HTML+CSS',
//     SkillTwo: 'J2EE',
//     SkillThree: 'PPT'
//   },
//   regeditTime: new Date()
// };

// var workmate3 = {
//   name: 'MinJie',
//   age: 20,
//   sex: 1,
//   job: 'UI设计',
//   skill: {
//     skillOne: 'PhotoShop',
//     SkillTwo: 'UI',
//     SkillThree: 'Word+Excel+PPT'
//   },
//   regeditTime: new Date()
// };

var db = connect('company');
// var workmateArray = [workmate1, workmate2, workmate3]; //1 创建插入数据
// db.workmate.insert(workmateArray); // 1 插入数据
// db.workmate.update({ name: 'MinJie' }, { $set: { sex: 2, age: 21 } }); // 2 修改数据
// db.workmate.update(
//   { name: 'MinJie' },
//   { $set: { 'skill.SkillThree': 'Word+PPT' } }
// ); // 3 修改嵌套内容(内嵌文档)，和外部一样道理
// db.workmate.update({ name: 'MinJie' }, { $unset: { age: '' } }); // 4 删除年龄，姑娘还是不说年龄了吧
// db.workmate.update({ name: 'MinJie' }, { $set: { age: 21 } }); // 5 都上班的，别搞特殊，写上,如果要计算，必须是数字

// db.workmate.update({ name: 'MinJie' }, { $inc: { age: -3} }); // 6 老娘永远18岁,只能改变Number类型的啊混蛋

// db.workmate.update({}, { $set: { interset: [] } }, { multi: true }); // 7 混蛋啊，每个人爱好统计下，这样团建好玩啊。

// db.workmate.update(
//   { name: 'liuhuan' },
//   { $set: { age: 18,
//   sex: 1,
//   job: '前端',
//   skill: {
//     skillOne: 'HTML+CSS',
//     SkillTwo: 'JavaScript',
//     SkillThree: 'Node'
//   },
//   regeditTime: new Date()} },
//   { upsert: true }
// ); // 8 混蛋啊，新来了个同事，给我添加进去他的信息

print('[SUCCESS]: The data was inserted successfully.');