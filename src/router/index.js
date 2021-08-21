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
            path: '/event-spaces',
            name: 'event-spaces',
            component: () => import('@/views/EventSpaces'),
        },
        {
            path: '/innovation-school',
            name: 'innovation-school',
            component: () => import('@/views/InnovationSchool')
        },
        {
            path: '/school/campus',
            name: 'campus-school',
            component: () => import('@/views/school/LearnInCampus')
        },
        {
            path: '/school/online',
            name: 'online-school',
            component: () => import('@/views/school/LearnOnline')
        },
        {
            path: '/coworking/single',
            name: 'coworking-single-page',
            component: () => import('@/views/coworking/single')
        }
    ],
})

export default router
