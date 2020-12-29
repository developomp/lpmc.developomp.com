import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "./views/Home.vue"
import NotFound from "./views/404.vue"
import News from "./views/News.vue"
import Docs from "./views/Docs.vue"
import Profile from "./views/Profile.vue"

let routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        meta: {
            title: "Home"
        },
        component: Home
    },

    {
        path: "/news",
        meta: {
            title: "News"
        },
        component: News
    },

    {
        path: "/docs",
        meta: {
            title: "Docs"
        },
        component: Docs
    },

    {
        path: "/profile",
        meta: {
            title: "Profile"
        },
        component: Profile
    },

    {
        path: "/404",
        meta: {
            title: "404"
        },
        component: NotFound
    },

    {
        path: "/:catchAll(.*)",
        redirect: "/404"
    }
]

let router = createRouter({
    history: createWebHistory(process.env.DOMAIN),
    routes: routes
})

router.beforeEach((to, from) => {
    document.title = `${to.meta.title} | LPMC`
})

export default router
