<template>
    <div v-if="gigs" class="flex wrap my-gigs">


        <!-- <div v-if="filterGig" class="flex wrap justify-end my-gigs"> -->
        <!-- <div class="add-gig-container"> -->
        <div class="nav-gig flex" v-if="this.$route.params.id && this.$route.params.id === this.userId">
            <div class="btn-container flex">
                <button class="btn btn-add">
                    <RouterLink to="/edit"><i class="fa-solid fa-plus"></i></RouterLink>
                </button>
                <span>Add gig</span>
            </div>
        </div>
        <!-- </div> -->
        <div v-for="gig in filteredGigs" :key="gig._id" class="gig-preview" @mouseover="showBtns = true"
            @mouseleave="showBtns = false">
            <div>
                <div v-if="this.$route.params.id && this.$route.params.id === this.userId" class="btns-container">
                    <RouterLink class="btn btn-owner" v-if="showBtns" :to="'/edit/' + gig._id"><i
                            class="fa-solid fa-pencil"></i>
                    </RouterLink>
                    <button class="btn btn-owner" v-if="showBtns" @click="removeGig(gig._id)"><i
                            class="fa-solid fa-trash-can"></i></button>
                </div>

                <img :src="gig.imgUrl[0]" alt="" class="user-gigs-img">
                <h3 class="title">
                    <RouterLink :to="'/gig/' + gig._id">

                        <LongText class="long-text" :txt="gig.title" />
                    </RouterLink>
                </h3>
                <div class="price-container flex" style="justify-content: flex-end;">
                    <div class="flex">
                        <h4>STARTING AT </h4>
                        <span class="price">US${{ gig.price }}</span>
                    </div>
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
            count: 10,
            showBtns: false,
            // test: this.gigs
        }
    },
    methods: {

        async removeGig(gigId) {
            try {
                await this.$store.dispatch({ type: 'removeGig', gigId })
                showSuccessMsg('removed')
            }
            catch (err) {
                showErrorMsg('remove failed')
            }
        },
    },
    computed: {
        filteredGigs() {
            return this.gigs.slice(0, 5)
        },
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        userId() {
            if (!this.loggedinUser) return ''
            return this.loggedinUser._id
        },
    },
    components: {
        LongText
    }

}
</script>