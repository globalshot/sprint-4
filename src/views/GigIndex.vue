

<template>
        <GigList v-if="gigs" :gigs="gigs" @removeGig="removeGig"/>
</template>

<script>
import GigList from '../components/GigList.vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    name: 'GigIndex',
    created() {
        // if (!this.user) this.$router.push('/login')
        const {txt, tag} = this.$route.query
        const filterBy = {txt, tag}
        this.$store.dispatch({ type: 'loadGigs', filterBy })
    },
    methods: {

        async removeGig(gigId) {
            try {
                await this.$store.dispatch({ type: 'removeGig', gigId })
                showSuccessMsg('removed')
            }
            catch(err) {
                 showErrorMsg('remove failed')
            }
        }
    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        },
    },
    components: {
        GigList,
    },
    watch: {
    '$route.query.q': function(newQuery) {
        const txt = newQuery.txt
        const tag = newQuery.tag
        this.filterBy = {txt: txt, tag: tag}
      // Do something with the new query parameter
    }
}
}
</script>