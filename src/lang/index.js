import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.js'
import zh from './zh.js'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': { ...zhLocale, ...zh },
    'en': { ...enLocale, ...en }
  }
})

// 设置element-ui组件的国际化
ElementLocale.i18n((key, value) => i18n.t(key, value))
window.$t = (key, value) => i18n.t(key, value)

export default i18n