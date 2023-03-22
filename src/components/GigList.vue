<template>
    <h1 class="list-header" v-if="filterBy.tag">{{ header() }}</h1>
    <h1 class="list-header" v-else>Explore</h1>
    <MultipleSelect/>
    <div class="gig-list grid">
        <GigPreview v-for="gig in gigs" :key="gig.id" :gig="gig" />
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
        this.filterBy.tag = (this.$route.query.tag)
        console.log(this.filterBy.tag);
        this.$emit('filterBy', { ...this.filterBy })
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


  
  