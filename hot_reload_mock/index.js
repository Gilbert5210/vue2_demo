const fs = require('fs')
const path = require('path')
const cors = require('cors')
const express = require('express')
const Mock = require('mockjs') // mockjs 导入依赖模块

var app = express()
app.use(cors())

app.get(/\/api\.*/, function (req, res, next) {
  const reqPath = req.path.replace(/\/api/ig, '')
  const filePath = path.resolve(__dirname, `./mocks${reqPath}.js`)
  if (!fs.existsSync(filePath)) {
    // res.send('文件不存在')
    next()
    return
  }

  let data = require(filePath)
  if (data.mock) {
    res.send(Mock.mock(data))
  } else {
    next()
  }
})

var server = app.listen(9099, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})