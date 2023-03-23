import { gigService } from "../../services/gig.service"

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
            return gigService.query(filterBy)
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