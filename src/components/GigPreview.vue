<template>
    <div class="gig-preview" @mouseover="showBtns = true" @mouseleave="showBtns = false">
        <div v-if="this.$route.params.id && this.$route.params.id === this.userId" class="btns-container">
            <RouterLink class="btn btn-owner" v-if="showBtns" :to="'/edit/' + gig._id"><i class="fa-solid fa-pencil"></i>
            </RouterLink>
            <button class="btn btn-owner" v-if="showBtns" @click="$emit('removeGig')"><i
                    class="fa-solid fa-trash-can"></i></button>
        </div>

        <!-- xxx -->
        <vueper-slides class="carousel-container no-shadow details-slides" fade :dragging-distance="100">
            <template #arrow-left>
                <i class="fa-solid fa-angle-left"></i>
            </template>
            <template #arrow-right>
                <i class="fa-solid fa-angle-right"></i>
            </template>
            <vueper-slide @click="loadGig" v-for="(slide, i) in slides" :key="i">
                <template #content>
                    <RouterLink class="btn" :to="'/gig/' + gig._id">
                        <img :src="gig.imgUrl[i]" alt="">
                    </RouterLink>
                </template>
            </vueper-slide>
        </vueper-slides>


        <!-- <RouterLink class="btn" :to="'/gig/' + gig._id">
            <img class="carousel-imgs" src="../assets/images/gig-imgs/01.webp" alt="">// user img 1 user img 2
        </RouterLink> -->


        <!-- xxx -->
        <RouterLink :to="'/user/' + gig.owner._id">
            <div class="user-profile flex">
                <img class="btn" :src="gig.owner.imgUrl" alt="">
                <div class="flex user-container">
                    <p class="btn user-name">{{ gig.owner.fullname }}</p>
                    <p class="user-level">Level {{ gig.owner.level }} Seller</p>
                </div>
            </div>
        </RouterLink>
        <RouterLink class="btn" :to="'/gig/' + gig._id">
            <h3 class="title">
                <LongText class="long-text" :txt="gig.title" />
            </h3>
        </RouterLink>
        <div class="rating grid star">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                <path fill="currentColor"
                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                </path>
            </svg>
            <span>{{ gig.owner.rate }}</span>
            <span  class="num">({{ reviewsLength }})</span>
            <!-- <span v-else class="num">(0)</span> -->
            <!-- <span class="num">({{ this.gigReviews(gig) }})</span> -->
        </div>
        <div class="price-container flex">
            <svg class="like" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.4469 1.95625C12.7344 0.496875 10.1875 0.759375 8.61561 2.38125L7.99999 3.01562L7.38436 2.38125C5.81561 0.759375 3.26561 0.496875 1.55311 1.95625C-0.409388 3.63125 -0.512513 6.6375 1.24374 8.45312L7.29061 14.6969C7.68124 15.1 8.31561 15.1 8.70624 14.6969L14.7531 8.45312C16.5125 6.6375 16.4094 3.63125 14.4469 1.95625Z">
                </path>
            </svg>
            <div class="flex">
                <h4>STARTING AT </h4>
                <span class="price">US${{ gig.price }}</span>
            </div>
        </div>

    </div>
</template>

<script>
import LongText from './LongText.vue'
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    name: 'GigPreview',
    methods: {
        loadGig() {
            const { txt, tag, price, daysToMake } = this.$route.query
            const filterBy = { txt, tag, price, daysToMake }
            this.$store.dispatch({ type: 'loadGigs', filterBy })
        },
    },
    data() {
        return {
            reviewsLength: 0,
            filterBy: {
                txt: '',
            },
            showBtns: false,

            slides: [
                {
                    image: (`https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/296272891/original/cdcef8a97d7dd47415447d0f9bb01218a79b7038.jpg`)
                },
                {
                    image: (`https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/296272891/original/01ea9956b9ccee25eee7438bc652a361bce1db0f.jpg`)
                }
            ],
        }


    },

    props: {
        gig: Object,
    },
    async created() {
        this.gigReviews
     },
    components: {
        LongText,
        VueperSlides,
        VueperSlide
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        userId() {
            if (!this.loggedinUser) return ''
            return this.loggedinUser._id
        },
        gigReviews() {
            this.reviewsLength = this.gig.reviews.length
        }
    },
    emits: ['removeGig']
}
</script>