import { itemService } from "../../services/item.service"

export default {
    state: {
        gigs: []
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
        loadGigs({ commit }, { filter }) {
            // console.log(filter)
            return itemService.query(filter)
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