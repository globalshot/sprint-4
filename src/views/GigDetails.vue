<template>
    <h1>details</h1>
        <section v-if="gig" class="gig-details">
        <button @click="$router.go(-1)">x</button>
        <pre>{{gig}}</pre>
       </section>
</template>



<script>
import { itemService } from './../services/item.service'

export default {
    created() {
        const { id } = this.$route.params
        console.log(this.$route)
        itemService.getById(id)
            .then(gig => {
                this.gig = gig
            })


    },
    data() {
        return {
            gig: null
        }
    },
    methods: {

    },
    computed: {

    },

}
</script>