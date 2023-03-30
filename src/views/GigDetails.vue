<template>
    <div class="main-container full main-layout">

        <!--when everything from store, look at this-->
        <!-- <StickyHeader @scrollTo="scrollTo" /> -->

        <div class="gig-page main-layout">

            <section class="details-layout flex" v-if="gig">

                <!--not from store yet-->
                <!--cant till we dont figure how to make few packages, different-->
                <SidebarContent :gig='gig'></SidebarContent>

                <div class="main">

                    <!--carousel images hard coded, no order amount yet-->
                    <GigOverview ref="OverView" :gig='gig'></GigOverview>

                    <div class="main-small">
                        <!--not from store yet-->
                        <GigReview :reviews="reviews" />

                        <!--gig description closer to finish, make it pre, check about meta-->
                        <GigDescription :gig='gig' />


                        <!--not from store yet-->
                        <!--cant do it yet because there no user yet-->
                        <!--im here ended, dont know where to continue-->
                        <AboutSeller :gig="gig" />



                        <!-- not from store yet -->
                        <GigReviews :gig="gig" :reviews="reviews" ref="reviews" />


                        <div class="gig-tags-container">
                            <!-- <h2 class="section-title"> Related tags</h2> -->
                            <ul><!--v-for for the tags-->

                            </ul>
                        </div>
                    </div>

                </div>

            </section>
        </div>


        <section></section><!--the seller pop up at the left bottom-->
        <!--not from store yet-->
        <!-- <GigBottom /> -->
        <!--wasnt scss-ed at all-->

    </div>
    <section v-if="gig" class="gig-details">
        <!-- <pre>{{ gig }}</pre> -->
    </section>
</template>



<script>
import { gigService } from './../services/gig.service.local.js'
import SidebarContent from '../components/gigDetails/SidebarContent.vue'
import ReviewPage from './ReviewPage.vue'
import StickyHeader from '../components/gigDetails/StickyHeader.vue'
import GigOverview from '../components/gigDetails/GigOverview.vue'
import GigReview from '../components/gigDetails/GigReview.vue'
import GigReviews from '../components/gigDetails/GigReviews.vue'
import AboutSeller from '../components/gigDetails/AboutSeller.vue'
import GigDescription from '../components/gigDetails/GigDescription.vue'
import GigBottom from '../components/gigDetails/GigBottom.vue'
import SidebarSmall from '../components/gigDetails/SidebarSmall.vue'

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    data() {
        return {
            gig: null

        }
    },
    created() {
        // const { id } = this.$route.params;
        // console.log(this.$route);
        // gigService.getById(id)
        //     .then(gig => {
        //     this.gig = gig;
        //     console.log(gig);
        // });
        scroll(0,0)
        this.getGig()
    },
    computed: {
        well() {
            return this.gig
        },
        reviews() {
            return this.$store.getters.getReviews
        },
    },
    components: {
        SidebarContent,
        SidebarSmall,
        ReviewPage,
        StickyHeader,
        GigOverview,
        GigReview,
        AboutSeller,
        GigReviews,
        GigDescription,
        GigBottom,

        VueperSlides,
        VueperSlide,



    },

    methods: {
        getGig() {
            const { id } = this.$route.params;
            gigService.getById(id)
                .then(gig => {
                    this.gig = gig;
                })
        },
        scrollTo(txt) {
            this.$refs[txt].scrollIntoView({ behavior: "smooth" })
        },
    },

}
</script>