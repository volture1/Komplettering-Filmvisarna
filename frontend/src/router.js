import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Dates from './views/Dates.vue'
import Viewings from './views/Viewings.vue'
import MovieDetail from './views/MovieDetail.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dates',
        component: Dates
    },
    {
        path: '/viewings/:id',
        component: Viewings
    },
    {
        path: '/moviedetail/:id',
        component: MovieDetail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router