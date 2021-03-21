import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Dates from './views/Dates.vue'
import Viewings from './views/Viewings.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router