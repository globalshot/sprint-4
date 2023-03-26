

<template>
    <div v-if="!this.$route.params.id">
        <h1 class="gig-header" v-if="filterBy.tag">{{ header() }}</h1>
        <h1 class="gig-header" v-else>Explore</h1>
        <MultipleSelect />
        <div class="services-sort">
        <div class="count-services">
            <span>{{ gigs.length }} </span>
            <span v-if="gigs.length === 1"> service available</span>
            <span v-else> services available</span>
        </div>
    </div>
    </div>
        <GigList v-if="gigs" :gigs="gigs" @removeGig="removeGig"/>
</template>

<script>
import MultipleSelect from '../components/MultipleSelect.vue'
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
    data() {
        return {
            filterBy: {
                tag: ''
            }
        }
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
        },
        header() {
            const mySentence = this.filterBy.tag.replace('-', ' ');
            const words = mySentence.split(" ");

            let newTag = words.map((word) => {
                return word[0].toUpperCase() + word.substring(1);
            }).join(" ");

            return newTag
        }
    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        },
    },
    components: {
        GigList,
        MultipleSelect
    },
}
</script>