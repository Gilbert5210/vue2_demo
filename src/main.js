import Vue from 'vue'
import i18n from './lang/index'
import App from './App'
import router from './router'
import elementUI from './common/element_ui'
import './style/index.less'
import myAxios from './common/util/axios'

Vue.prototype.$axios = myAxios()
Vue.use(elementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
