import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import GigIndex from '../views/GigIndex.vue'
import GigDetails from '../views/GigDetails.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [//explore, details, edit, // header, footer, //1 for header, 1 for paging(home page, filter in home that on filter already list), 1 for list page(the explore)
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/gig',
            name: 'GigIndex',
            component: GigIndex
        },
        {
            path: '/gig/:id',
            name: 'GigDetails',
            component: GigDetails
        },
    ]
})

export default router