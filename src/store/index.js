import { createStore } from 'vuex'
import itemStore from './modules/items.store'

export const store = createStore({
    strict: true,
    modules: {
        itemStore
    },
    actions: {
        loadStore() {
            console.log('store connected')
        }
    }
})

export default store