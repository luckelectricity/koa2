const mongoose = require('mongoose');
const db = 'mongodb://localhost/douban-trailer';
mongoose.Promise = global.Promise;

exports.connect = () => {
  let maxConnectTimes = 0;
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(db);
    mongoose.connection.on('disconnected', () => {
      maxConnectTimes++;
      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error('db数据库挂了');
      }
    });
    mongoose.connection.on('error', err => {
      maxConnectTimes++;
      if (maxConnectTimes < 5) {
        mongoose.connect(db);
      } else {
        throw new Error('db数据库挂了');
      }
    });
    mongoose.connection.on('open', () => {
      // const Kele = mongoose.model('kele', {name: String})
      // const xiaokele = new Kele({name: '小可乐'})
      // xiaokele.save().then(() => {
      //   console.log('爸爸');
      // })
      resolve();
      console.log('mongodb 打开成功');
    });
  });
};
