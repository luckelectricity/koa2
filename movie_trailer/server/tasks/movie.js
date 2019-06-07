const cp = require('child_process')
const { resolve } = require('path')

;(async () => {
  const script = resolve(__dirname, '../crawler/trailer-list.js')
  const child = cp.fork(script, [])
  let inworked = false

  child.on('error', err => {
    if(inworked) return
    inworked = true
  })

  child.on('exit', code => {
    if(inworked) return
    inworked = true
    let err = code === 0 ? null : new Error('exit code ' + code)
    console.log(err);
  })
  child.on('message', data => {
    let result = data.result
    console.log(result);
  })
})()
