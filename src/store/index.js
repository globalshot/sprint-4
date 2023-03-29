import { createStore } from 'vuex'
import { gigStore } from './modules/gigs.store'
import { reviewStore } from './modules/review.store'
import { orderStore } from './modules/order.store'
import { userStore } from './modules/user.store'

export const store = createStore({
    strict: true,
    modules: {
        gigStore,
        reviewStore,
        orderStore,
        userStore
    },
    actions: {
        loadStore() {
            console.log('store connected')
        }
    }
})
