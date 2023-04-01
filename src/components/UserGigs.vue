<template>
    <div v-if="gigs" class="flex wrap my-gigs">
        <!-- <div v-if="filterGig" class="flex wrap justify-end my-gigs"> -->
        <!-- <div class="add-gig-container"> -->
            <div class="nav-gig flex">
                <div class="btn-container flex">
                    <button class="btn btn-add">
                        <RouterLink to="/edit"><i class="fa-solid fa-plus"></i></RouterLink>
                    </button>
                    <span>Add gig</span>
                </div>
            </div>
        <!-- </div> -->
        <div v-for="gig in filteredGigs" :key="gig._id" class="gig-preview">

            <img :src="gig.imgUrl[0]" alt="" class="user-gigs-img">
            <h3 class="title">
                <LongText class="long-text" :txt="gig.title" />
            </h3>
            <div class="price-container flex" style="justify-content: flex-end;">
                <div class="flex">
                    <h4>STARTING AT </h4>
                    <span class="price">US${{ gig.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LongText from './LongText.vue'
export default {
    props: {
        gigs: Array,
        user: Object,
        required: true
    },
    data() {
        return {
            // user: this.loggedinUser,
            count: 10
            // test: this.gigs
        }
    },
    computed: {
        filteredGigs() {
            return this.gigs.slice(0, 5)
        }
    },
    components: {
        LongText
    }

}
</script>