<template>

    <ul class="gig-list grid">
        <GigPreview 
        v-for="gig in gigs" 
        :key="gig.id" 
        :gig="gig"
        />
    </ul>
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
        methods: {},
        computed: {},
    

}
</script>


  
  