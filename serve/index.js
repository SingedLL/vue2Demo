const express = require('express')
const app = express()
const router = express.Router()

// 解决跨域
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

router.use('/user', require('./user'))
app.use('/api', router)

app.listen(8089, function (err) {
  if (err) {
    console.log('服务器启动失败', err)
  } else {
    console.log('服务器已启动, 端口: 8089')
  }
})
