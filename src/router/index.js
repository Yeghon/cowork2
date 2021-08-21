import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: '/',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    linkActiveClass: 'current-menu-item',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home2')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutUs'),
        },
        {
            path: '/coworking',
            name: 'coworking',
            component: () => import('@/views/coworking')
        },
        {
            path: '/corporates',
            name: 'corporates',
            component: () => import('@/views/Corporates')
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
            component: () => import('@/views/coworking/Single')
        },
        {
            path: '/coworking/subcoworking',
            name: 'sub-coworking-single-page',
            component: () => import('@/views/coworking/Coworking')
        },
        {
            path: '/coworking/meetingroom',
            name: 'meeting-room',
            component: () => import('@/views/coworking/MeetingRoom')
        },
        {
            path: '/coworking/privateoffice',
            name: 'private-office',
            component: () => import('@/views/coworking/PrivateOffice')
        }
    ],
})

export default router
