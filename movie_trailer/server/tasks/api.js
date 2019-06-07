// https://douban.uieee.com
// /v2/movie/subject/1764796
const rp = require('request-promise-native')

async function fetchMovie(item) {
  const url = `https://douban.uieee.com/v2/movie/subject/${item.doubanId}`
  const res = await rp(url)
  return res
}

;(async () => {
  let movies = [{ doubanId: 27605698,
    title: '西虹市首富',
    rate: 6.6,
    poster:
     'https://img1.doubanio.com/view/photo/l_ratio_poster/public/p2529206747.jpg' },
  { doubanId: 27053945,
    title: '我们',
    rate: 6.7,
    poster:
     'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2551094671.jpg' }]
  movies.map(async movie => {
    let movieDate = await fetchMovie(movie)
    console.log(JSON.parse(movieDate));
  })
})()
