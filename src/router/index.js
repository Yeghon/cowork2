import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'current-menu-item',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/about'),
        },
        {
            path: '/coworking',
            name: 'coworking',
            component: () => import('@/views/coworking')
        },
        {
            path: '/corporates',
            name: 'corporates',
            component: () => import('@/views/corporates')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('@/views/blog')
        },
        {
            path: '/guides',
            name: 'guides',
            component: () => import('@/views/Guides')
        },
        {
            path: '/event-spaces',
            name: 'event-spaces',
            component: () => import('@/views/EventSpaces'),
        },
        {
            path: '/agenda',
            name: 'agenda',
            component: () => import('@/views/Agenda')
        },
        {
            path: '/innovation-school',
            name: 'innovation-school',
            component: () => import('@/views/InnovationSchool')
        },
        {
            path: '/school/online',
            name: 'online-school',
            component: () => import('@/views/school/online')
        },
        {
            path: '/school/italy',
            name: 'italy-school',
            component: () => import('@/views/school/italy'),
        },
        {
            path: '/school/denmark',
            name: 'denmark-school',
            component: () => import('@/views/school/denmark'),

        },
        {
            path: '/school/australia',
            name: 'denmark-school',
            component: () => import('@/views/school/denmark')
        }
    ],
})

export default router
