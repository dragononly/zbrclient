import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	scrollBehavior(to, from, savedPosition) {
		// 解决路由跳转后 会滚动到底部
		if (savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	},
	routes: [{
			path: '/c54',
			name: 'c54',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/pagec/c54.vue')
		},
		{
			path: '/c53',
			name: 'c53',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/pagec/c53.vue')
		},
		{
			path: '/c52',
			name: 'c52',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/pagec/c52.vue')
		},
		{
			path: '/',
			name: 'home',
			component: Home,

		},
		{
			path: '/c51',
			name: 'c51',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/pagec/c51.vue')
		},
		{
			path: '/showsearch',
			name: 'showsearch',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/showsearch.vue')
		},
		{
			path: '/Home2',
			name: 'Home2',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/Home2.vue'),
			meta: {
				keepAlive: true
			}
		},
		{
			path: '/adminma',
			name: 'adminma',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/adminma.vue')
		},
		{
			path: '/c1',
			name: 'c1',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/pagec/c1.vue')
		},
		{
			path: '/c3',
			name: 'c3',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/pagec/c3.vue')
		},
		{
			path: '/m1',
			name: 'm1',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/m3/m1.vue')
		},
		{
			path: '/m2',
			name: 'm2',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/m3/m2.vue')
		},
		{
			path: '/c4',
			name: 'c4',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/pagec/c4.vue')
		},
		{
			path: '/c2',
			name: 'c2',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/pagec/c2.vue')
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/page/about.vue')
		},
		{
			path: '/test',
			name: 'test',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/test.vue')
		},
		{
			path: '/p1',
			name: 'p1',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/page/p1.vue')
		},
		{
			path: '/p21',
			name: 'p21',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/page/p21.vue')
		},

		{
			path: '/p3',
			name: 'p3',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/page/p3.vue')
		},
		{
			path: '/p4',
			name: 'p4',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/page/p4.vue')
		},
		{
			path: '/p5',
			name: 'p5',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/page/p5.vue')
		},
		{
			path: '/login',
			name: 'login',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/user/login.vue')
		},
		{
			path: '/reg',
			name: 'reg',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/user/reg.vue')
		},
	],
	// mode: 'history',
	//   scrollBehavior (to, from, savedPosition) {
	//     if (savedPosition) {
	//       return savedPosition
	//     } else {
	//       return { x: 0, y: 0 }
	//     }
	//   }
})
