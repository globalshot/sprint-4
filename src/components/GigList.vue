<template>
    <h1 v-if="filterBy.tag">{{ header() }}</h1>
    <h1 v-else>Explore</h1>
    <div class="gig-list grid">
        <GigPreview 
        v-for="gig in gigs" 
        :key="gig.id" 
        :gig="gig"
        />
    </div>
</template>

<script>
import GigPreview from './GigPreview.vue'
export default {
        name: 'GigList',
        props: {
            gigs: Array,
            required: true
        },
        components: {
                GigPreview
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
            header(){
                let txt = this.filterBy.tag.replace('-', ' ').toUpperCase()
                return txt
            }
        },
        computed: {},
    

}
</script>


  
  