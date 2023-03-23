<template>
    <h1 class="gig-header" v-if="filterBy.tag">{{ header() }}</h1>
    <h1 class="gig-header" v-else>Explore</h1>
    <MultipleSelect/>
    <div class="services-sort">
        <div class="count-services">
            <span>{{ gigs.length }} </span>
            <span v-if="gigs.length === 1"> service available</span>
            <span v-else> services available</span>
        </div>
    </div>
    <div class="gig-list grid">
        <GigPreview v-for="gig in gigs" :key="gig._id" :gig="gig" @removeGig="$emit('removeGig', gig._id)"/>
    </div>
</template>

<script>
import GigPreview from './GigPreview.vue'
import MultipleSelect from './MultipleSelect.vue'
export default {
    name: 'GigList',
    props: {
        gigs: Array,
        required: true
    },
    components: {
        GigPreview,
        MultipleSelect
    },
    created() {
    },
    data() {
        return {
            filterBy: {
                tag: ''
            }
        }
    },
    methods: {
        header() {
            const mySentence = this.filterBy.tag.replace('-', ' ');
            const words = mySentence.split(" ");

            let newTag = words.map((word) => {
                return word[0].toUpperCase() + word.substring(1);
            }).join(" ");

            return newTag
        }
    },
    computed: {},


}
</script>


  
  