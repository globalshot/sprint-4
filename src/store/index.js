import { createStore } from 'vuex'
import { gigStore } from './modules/gigs.store'
import { reviewStore } from './modules/review.store'
import { orderStore } from './modules/order.store'

export const store = createStore({
    strict: true,
    modules: {
        gigStore,
        reviewStore
    },
    actions: {
        loadStore() {
            console.log('store connected')
        }
    }
})
