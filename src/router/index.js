import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由按需加载
export default new Router({
    routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/market_list'
		},
        {
			path: '/market_list',
			name: 'market_list',
			component: () => import(/* webpackChunkName: 'market_list' */ '@/components/market_list.vue')
        },
		{
			path: '/history_list',
			name: 'history_list',
			component: () => import(/* webpackChunkName: 'history_list' */ '@/components/history_list.vue')
        }
    ]
})
