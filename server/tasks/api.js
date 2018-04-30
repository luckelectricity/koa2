const rp = require("request-promise-native")

async function fetchMovie (item) {
  const url = `http://api.douban.com/v2/movie/subject/${item.doubanId}`

  const res = await rp(url)

  return res
}

;(async () => {
  let movies = [
    { doubanId: 27160683,
    title: '忍者蝙蝠侠',
    rate: 7.3,
    poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2506695706.jpg' },
    { doubanId: 30200070,
      title: '书迷',
      rate: 8.5,
      poster: 'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2519763955.jpg' }]
      movies.map(async movie => {
        let movieData = await fetchMovie(movie)
        try{
          movieData = JSON.parse(movieData)
          console.log(movieData.tag);
          console.log(movieData.summary);
        } catch (err) {
          console.log(err);
        }

        console.log(movieData);
      })

})()
