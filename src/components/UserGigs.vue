<template>
    <div v-if="gigs" class="flex wrap my-gigs">
            <div class="gig-preview">
                <RouterLink to="/edit">
                    <div class="full-size">
                <button class="btn btn-add">
                    <i class="fa-solid fa-plus"></i>
                    </button>
                    <span>Add gig</span>
                </div>
                </RouterLink>
            </div>
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