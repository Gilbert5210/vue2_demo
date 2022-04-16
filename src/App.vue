<template>
  <div id="app">
    <el-select v-model="lang"
		@change="_onLangChange"
		class="lang-select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
	<el-menu :default-active="activeIndex"
			class="menu-wrap"
			mode="horizontal"
			@select="_handleSelect">
		<el-menu-item :index="item.value"
					:key="item.value"
					v-for="item in MENU_LIST_OPTIONS">
					{{$t(item.label)}}
		</el-menu-item>
	</el-menu>
    <router-view class="router-view"/>
  </div>
</template>

<script>
import {MENU_LIST} from './const/menu'

export default {
	name: 'App',
	data () {
		return {
			lang: 'zh',
			options: [
				{
					value: 'zh',
					label: $t('简体中文')
				},
				{
					value: 'en',
					label: 'English'
				}
			],
			activeIndex: MENU_LIST.value.marketList
		}
	},

	computed: {
		MENU_LIST_OPTIONS () {
			return MENU_LIST.options
		}
	},

	mounted() {
		// 刷新的時候可以保持历史的语言
		this._initLang()
		this.activeIndex = this.$router.history.pending.name || MENU_LIST.value.marketList
	},

	methods: {
		_onLangChange (value) {
			this.$i18n.locale = value
			localStorage.setItem('language', value)
		},

		// toDo: 这里可以考虑vuex存储，cookie上获取等等方式
		_initLang () {
			let currLang = localStorage.getItem('language')
			currLang && (this.lang = currLang)
			localStorage.setItem('language', this.lang)
			this.$i18n.locale = this.lang
		},

		_handleSelect (val) {
			this.activeIndex = val
			this.$router.push({
				name: val
			})
		}
	}
}
</script>

<style lang='less' scoped>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	padding: 16px 5%;
	height: calc(100% - 32px);
	text-align: left;

	.lang-select {
		margin-bottom: 12px;
	}

	.router-view {
		height: calc(100% - 52px - 82px);
	}

	.menu-wrap {
		margin-bottom: 12px;
	}
}
</style>
