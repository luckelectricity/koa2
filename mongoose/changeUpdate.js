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
// db.workmate.update({ name: 'liuhuan' }, { $push: { interest: 'playGame' } }); // 9 给刘欢同学添加玩游戏的爱好

// db.workmate.update(
//   { name: 'MinJie' },
//   { $push: { 'skill.skillFour': 'draw' } }
// ); // 10 $push修饰符还可以为内嵌文档增加值

// db.workmate.update(
//   { name: 'MinJie', interest: { $ne: 'playGame' } },
//   { $push: { interest: 'Game' } }
// ); // 11 如果爱好都有这个了，就别傻乎乎添加啦
// db.workmate.update(
//   { name: 'liuhuan' },
//   { $addToSet: { interest: 'readBook' } }
// ); // 12 查找是否存在，不存在就push上去

// var newInterset = ['Sing', 'Dance', 'Code'];
// db.workmate.update(
//   { name: 'liuhuan' },
//   { $addToSet: { interest: { $each: newInterset } } }
// ); // 13 使用 $each 追加
// db.workmate.update({ name: 'liuhuan' }, { $pop: { interest: 1 } }); // 14 删除最后一个 code
// db.workmate.update({ name: 'liuhuan' }, { $set: { 'interest.2': 'Code' } }); // 15 按照数组位置修改

// db.workmate.update({ sex: 1 }, { $set: { money: 1000 } }, false, true);
// var resultMessage = db.runCommand({ getLastError: 1 });
// printjson(resultMessage);  // 16 更新成没成，要给我说下呀
// var resultMessage = db.runCommand({ ping: 1 });
// printjson(resultMessage); // 17 如果数据库连接成功会返回 { "ok" : 1 }
// print('[SUCCESS]: The data was inserted successfully.');

var myModify = {
  findAndModify: 'workmate',
  query: { sex: 1 },
  sort: {age: -1},
  update: {$inc: {money: 200}},
  new: true
};

var resultMessage = db.runCommand(myModify);

printjson(resultMessage);
