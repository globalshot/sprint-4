import { createStore } from 'vuex'
import { gigStore } from './modules/gigs.store'

export const store = createStore({
    strict: true,
    modules: {
        gigStore
    },
    actions: {
        loadStore() {
            console.log('store connected')
        }
    }
})
