import { itemService } from "../../services/item.service"

export default {
    state: {
        gigs: [],
        filterBy: {
            txt: '',
            tag: '',
        },
    },
    getters: {
        gigs({ gigs, filter }) {
            return gigs
        }
    },
    mutations: {
        setGigs(state, { gigs }) {
            state.gigs = gigs
        },
    },
    actions: {
        loadGigs({ commit }, { filterBy }) {
            console.log(filterBy)
            return itemService.query(filterBy)
                .then(gigs => {
                    console.log(gigs)
                    commit({ type: 'setGigs', gigs })
                })
                .catch(err => {
                    console.log(err)
                })
        },
    }
}