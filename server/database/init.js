const mongoose = require('mongoose')
const db = 'mongodb://localhost/douban-text'
mongoose.Promise = global.Promise

exports.connect = () => {
  let maxConnertTimes = 0

  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true)
    }
    // 连接数据库
    mongoose.connect(db)

    // 断开重连
    mongoose.connection.on('disconnected', () => {
      maxConnertTimes++
      if (maxConnertTimes < 5){
        mongoose.connect(db)
      }else{
        throw new Error('骚年,数据库挂了')
      }
    })

    mongoose.connection.on("error", err => {
      console.log(err);
    });

    mongoose.connection.on("open", () => {
      // const Dog = mongoose.model('Dog', {name:String})
      // const doga = new Dog({name:'luck'})
      // doga.save().then(() => {
      //   console.log("汪")
      // })
      resolve()
      console.log("数据库连接成功");
    });
  })
}
