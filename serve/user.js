const express = require('express')
const Mock = require('mockjs')
const router = express.Router()

router.get('/info', (req, res) => {
  res.json({
    code: 200,
    userInfo: {}
  })
})

module.exports = router
