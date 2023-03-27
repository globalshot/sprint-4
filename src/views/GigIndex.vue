

<template>
    <div v-if="!this.$route.params.id">
        <h1 class="gig-header">{{ header() }}</h1>
        <!-- <h1 class="gig-header" v-else>Explore</h1> -->
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
            console.log(this.filterBy.tag)
            let newTag = 'Explore'
            if (this.filterBy.tag) {
                const mySentence = this.filterBy.tag.replace('-', ' ');
                const words = mySentence.split(" ");
    
                newTag = words.map((word) => {
                    return word[0].toUpperCase() + word.substring(1);
                }).join(" ");
            }

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
    watch: {
    '$route.query.q': function(newQuery) {
        const txt = newQuery.txt
        const tag = newQuery.tag
        this.filterBy = {txt: txt, tag: tag}
        console.log(this.filterBy)
      // Do something with the new query parameter
    }
}
}
</script>