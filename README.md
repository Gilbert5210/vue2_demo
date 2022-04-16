# trading_system

> 交易系统

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 技术栈

```markdown
vue2.0 + vue-cli + vue-router + axios + element-ui + vue-i18n + mockjs
```



## 系统描述

1. 改demo主要简单的实现金融产品交易系统的行情信息 和 下单的整个流程，只是demo，所以数据这一块使用mockjs来模拟前端数据



## 后续可优化点

1. 行情信息的大数据量优化场景
2. 点击提交购买和卖的接口和事件可以做防抖处理



## 数据安全

1. 预防xss/csrf攻击
2. 常见方式：
   - 设置`httpOnly`
   - 黑白名单
   - Referer Check
   - 验证码（二次确认）
   - `csrfToken`手段



## 响应速度

1. 页面加载速度的话，从浏览器输入url到渲染整个页面的全过程找到切入点；最终在两个大的方向上入手：网络通信更快 & 拿到数据后渲染更快

2. 订单页面的数据更新，可以通过接口调用后返回最新的数据，然后通过对象引用的方式直接更新该项数据（减少不必要的获取全量数据）
3. 大数据量的列表中，可以采用虚拟滚动的方式来做dom节点渲染优化，让10W级数据都一样丝滑



## 简单易用

1. 默认回填了市场详情的一些基本数据，可让用户快速下单
