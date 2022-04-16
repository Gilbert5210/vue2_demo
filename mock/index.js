const Mock = require('mockjs') // mockjs 导入依赖模块
const util = require('./util') // 自定义工具模块
// 返回一个函数
module.exports = function(app) {
    // 监听 marketList 请求
    app.get('/marketList', function (rep, res) {
        // 每次响应请求时读取mock data的json文件
        // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        let json = util.getJsonFile('./marketList.json')
        // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json))
    })

    // 监听 historyList 请求
    app.get('/historyList', function (rep, res) {
        // 每次响应请求时读取mock data的json文件
        // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        let json = util.getJsonFile('./historyList.json')
        // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json))
    })

    app.post('/buy', function (rep, res) {
        // 每次响应请求时读取mock data的json文件
        // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        let json = util.getJsonFile('./buy.json')
        // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json))
    })

    app.post('/sell', function (rep, res) {
        // 每次响应请求时读取mock data的json文件
        // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
        let json = util.getJsonFile('./sell.json')
        // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
        res.json(Mock.mock(json))
    })
}
