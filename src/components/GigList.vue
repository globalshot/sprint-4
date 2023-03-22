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
        created() { },
        data() {
                return {}
        },
        methods: {},
        computed: {},
        components: {
        GigPreview,
    },
    

}
</script>


  
  