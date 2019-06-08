const OSS = require('ali-oss');
const nanoid = require('nanoid');
const config = require('../config');
const http = require('http');
const fs = require('fs');
const { resolve } = require('path');
let client = new OSS(config.aliOss);

const download = async (url, callback) => {
  http
    .get(url, function(res) {
      var data = '';
      res.setEncoding('binary');
      res.on('data', function(chunk) {
        data += chunk;
      });
      res.on('end', function() {
        callback(data);
      });
    })
    .on('error', function(err) {
      console.log(err);
    });
};
async function put() {
  const movies = [
    {
      poster:
        'http://img3.doubanio.com/view/photo/l_ratio_poster/public/p2554525534.jpg',
      video:
        'http://vt1.doubanio.com/201906081056/2a499d5eaf4ca4fd27066615a164c574/view/movie/M/402420838.mp4',
      doubanId: '30163509',
      cover: 'http://img3.doubanio.com/img/trailer/medium/2547128825.jpg'
    }
  ];
  movies.map(async (movie, index) => {
    try {
      // object表示上传到OSS的Object名称，localfile表示本地文件或者文件路径
      // let videoData = await client.put(nanoid() + '.mp4', movie.video);
      // console.log('put success: %j', videoData);
      await download(movie.video, async data => {
        let src = resolve(__dirname, `../../images/video${index}.mp4`);
        fs.writeFile(src, data, 'binary', function(err) {
          console.log(`保存video${index}.mp4失败`);
        });

        let videoData = await client.put(nanoid() + '.mp4', src);
        console.log('get success: %j', videoData);
      });
      await download(movie.poster, async data => {
        let src = resolve(__dirname, `../../images/poster${index}.jpg`);
        fs.writeFile(src, data, 'binary', function(err) {
          console.log('保存图片失败');
        });

        let posterData = await client.put(nanoid() + '.jpg', src);
        console.log('get success: %j', posterData);
      });
      await download(movie.poster, async data => {
        let src = resolve(__dirname, `../../images/cover${index}.jpg`);
        fs.writeFile(src, data, 'binary', function(err) {
          console.log('保存图片失败');
        });

        let coverData = await client.put(nanoid() + '.jpg', src);
        console.log('get success: %j', coverData);
      });
      // let coverData = await client.put(nanoid() + '.jpg', movie.cover);
      // console.log('get success: %j', coverData);
      if (videoData.key) {
        movie.videoKey = videoData.key;
      }
      if (posterData.key) {
        movie.posterKey = posterData.key;
      }
      if (coverData.key) {
        movie.coverKey = coverData.key;
      }
      console.log(movie);
    } catch (e) {
      console.error('error: %j', e);
    }
  });
}
put();

// 以下为七牛云的代码
//

//
//

// download(
//   'http://img3.doubanio.com/view/photo/l_ratio_poster/public/p2554525534.jpg',
//   data => {
//     fs.writeFile(resolve(__dirname, `../../images/${}.jpg`), data, 'binary', function(err) {
//       console.log(err);
//     });
//   }
// );
// const bucket = config.qiniu.bucket;

// const mac = new aliOss.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK);

// const cfg = new qiniu.conf.Config();
// const client = new qiniu.rs.BucketManager(mac, cfg);

// const uploadToQiniu = async (url, key) => {
//   return new Promise((resolve, reject) => {
//     client.fetch(url, bucket, key, (err, ret, info) => {
//       if (err) {
//         reject(err);
//       } else {
//         if (info.statusCode === 200) {
//           resolve({ key });
//         } else {
//           reject(info);
//         }
//       }
//     });
//   });
// };

// (async () => {
//   const movies = [
//     {
//       poster:
//         'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2554525534.jpg',
//       video:
//         'http://vt1.doubanio.com/201906081056/2a499d5eaf4ca4fd27066615a164c574/view/movie/M/402420838.mp4',
//       doubanId: '30163509',
//       cover: 'https://img3.doubanio.com/img/trailer/medium/2547128825.jpg'
//     }
//   ];
//   movies.map(async movie => {
//     if (movie.video && !movie.key) {
//       try {
//         let videoData = await uploadToQiniu(movie.video, nanoid() + '.mp4');
//         let posterData = await uploadToQiniu(movie.poster, nanoid() + '.jpg');
//         let coverData = await uploadToQiniu(movie.cover, nanoid() + '.jpg');
//         if (videoData.key) {
//           movie.videoKey = videoData.key;
//         }
//         if (posterData.key) {
//           movie.posterKey = posterData.key;
//         }
//         if (coverData.key) {
//           movie.coverKey = coverData.key;
//         }
//         console.log(movie);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   });
// })();
// 抓取资源
// @link https://developer.qiniu.com/kodo/api/1263/fetch
// @param resUrl 资源链接
// @param bucket 空间名称
// @param key    文件名称
// @param callbackFunc(err, respBody, respInfo) 回调函数
// BucketManager.prototype.fetch = function(resUrl, bucket, key, callbackFunc) {
//   var useCache = false;
//   var that = this;
//   if (this.config.zone) {
//     if (this.config.zoneExpire == -1) {
//       useCache = true;
//     } else {
//       if (!util.isTimestampExpired(this.config.zoneExpire)) {
//         useCache = true;
//       }
//     }
//   }

//   if (useCache) {
//     fetchReq(this.mac, this.config, resUrl, bucket, key, callbackFunc);
//   } else {
//     zone.getZoneInfo(this.mac.accessKey, bucket, function(
//       err,
//       cZoneInfo,
//       cZoneExpire
//     ) {
//       if (err) {
//         callbackFunc(err, null, null);
//         return;
//       }

//       //update object
//       that.config.zone = cZoneInfo;
//       that.config.zoneExpire = cZoneExpire;
//       //req
//       fetchReq(that.mac, that.config, resUrl, bucket, key, callbackFunc);
//     });
//   }
// };

// function fetchReq(mac, config, resUrl, bucket, key, callbackFunc) {
//   var scheme = config.useHttpsDomain ? 'https://' : 'http://';
//   var encodedEntryURI = util.encodedEntry(bucket, key);
//   var encodedResURL = util.urlsafeBase64Encode(resUrl);
//   var requestURI =
//     scheme +
//     config.zone.ioHost +
//     '/fetch/' +
//     encodedResURL +
//     '/to/' +
//     encodedEntryURI;
//   var digest = util.generateAccessToken(mac, requestURI, null);
//   rpc.postWithoutForm(requestURI, digest, callbackFunc);
// }
