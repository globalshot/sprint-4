

<template>
    <body>
        <!-- {{ msg }} -->
        <!-- <RouterLink class="btn btn-add" to="/toy/edit/">Add</RouterLink> -->
        <!-- <AppFilter @filter="setFilter" /> -->
        <GigList v-if="gigs" :gigs="gigs" @filterBy="setFilter" />
        <!-- <h1 v-else>No toys to display</h1> //not working -->
    </body>
</template>

<script>
import GigList from '../components/GigList.vue'
// import AppFilter from '../components/AppFilter.vue'
// import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    name: 'GigIndex',
    created() {
        // if (!this.user) this.$router.push('/login')
        this.$store.dispatch({ type: 'loadGigs' })
    },
    methods: {
        setFilter(filterBy) {
            console.log(filterBy)
            this.$store.dispatch({ type: 'loadGigs', filterBy })

        },
    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        },
    },
    components: {
        GigList,
    },
}
</script>