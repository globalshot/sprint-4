import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import GigIndex from '../views/GigIndex.vue'
import GigDetails from '../views/GigDetails.vue'
import GigEdit from '../views/GigEdit.vue'
import GigPayment from '../components/GigPayment.vue'
import reviewPage from '../views/ReviewPage.vue'
import UserDetails from '../views/UserDetails.vue'
import SignupView from '../views/SignupView.vue'
import SignIn from '../components/SignIn.vue'

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
            path: '/gig/payment/:id',
            name: 'GigPayment',
            component: GigPayment
        },
        {
            path: '/gig/:id',
            name: 'GigDetails',
            component: GigDetails
        },
        {
            path: '/edit/:id?',
            name: 'GigEdit',
            component: GigEdit
        },
        {
            path: '/review',
            name: 'reviewpage',
            component: reviewPage,
        },
        {
            path: '/user/:id',
            name: 'UserDetails',
            component: UserDetails
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupView
        },

    ]
})

export default router