const puppeteer = require('puppeteer');
const base = 'https://movie.douban.com/subject/';
const doubanId = '30163509';
// const videoUrl = 'https://movie.douban.com/trailer/246013/#content';
const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });
(async () => {
  console.log('开始爬取目标页面');
  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  });
  const page = await browser.newPage();

  await page.goto(base + doubanId, {
    waitUntil: 'networkidle2'
  });

  await sleep(1000);

  const result = await page.evaluate(() => {
    var $ = window.$;
    var item = $('.related-pic-video');
    if (item && item.length > 0) {
      var link = item.attr('href');
      var cover = item
        .attr('style')
        .replace('background-image:url(', '')
        .replace('?)', '');
      return {
        link,
        cover
      };
    }
    return {};
  });
  let video;
  if (result.link) {
    await page.goto(result.link, {
      waitUntil: 'networkidle2'
    });
    console.log('打开之前');
    await sleep(2000);
    video = await page.evaluate(() => {
      var $ = window.$;
      var item = $('source');
      if (item && item.length > 0) {
        return item.attr('src').replace('https', 'http');
      }
      return '';
    });
  }
  const data = {
    video,
    doubanId,
    cover: result.cover.replace('https', 'http')
  };
  browser.close();
  // console.log(result);
  process.send(data);
  process.exit(0);
})();
