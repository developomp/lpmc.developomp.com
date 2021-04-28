import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"
import NotFound from "../views/404.vue"
import Gallery from "../views/Gallery.vue"
import Map from "../views/Map.vue"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		meta: {
			title: "Home",
		},
		component: Home,
	},
	{
		path: "/gallery",
		meta: {
			title: "Gallery",
		},
		component: Gallery,
	},
	{
		path: "/map",
		meta: {
			title: "Map",
		},
		component: Map,
	},
	{
		path: "/404",
		meta: {
			title: "404",
		},
		component: NotFound,
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/404",
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

router.beforeEach((to, from) => {
	document.title = `${to.meta.title} | LPMC`
})

export default router
