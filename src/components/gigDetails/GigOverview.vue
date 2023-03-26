<template>
    <div class="gig-overview">
        <nav class="nav-tag">
            <ul class="flex">
                <li>
                    <span class="link-category">category</span>
                    <span class="svg-span">
                        <svg class="svg svg-arrow" width="8" height="16" viewBox="0 0 8 16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z">
                            </path>
                        </svg>
                    </span>
                </li>
                <li>
                    <span class="link-category">sub category</span>
                </li>
            </ul>
        </nav>
        <h1 class="text-display-3 bold">{{ this.gig.title }}</h1>


        <div class="seller-overview">
            <RouterLink :to="'/user/' + this.gig.owner._id">
                <div class="seller-container flex">
                    <div class="seller-photo">
                        <img class="img-user" src="../../assets/images/profile-pic.png" alt="">
                    </div>

                    <div class="seller-stats flex">
                        <RouterLink :to="'/user/' + this.gig.owner._id">{{ this.gig.owner.fullname }}</RouterLink>
                        <span>{{ this.gig.owner.level }}</span> |
                        <span class="color-yellow">
                            <span>
                                <div class="stars">
                                    <ul class="flex">
                                        <li>
                                            <span class="star">
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="star">
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="star">
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="star">
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </li>
                                        <li>
                                            <span class="star">
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </li>
                                        <li class="num">
                                            {{ this.gig.owner.rate }}
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        </span>
                    </div>
                </div>
            </RouterLink>

            <div class="img-container">

                <span class="review-carousel-wrapper">
                    <vueper-slides class="carousel-container no-shadow details-slides" :bullets="false" fade>
                        <template #arrow-left>
                            <i class="fa-solid fa-angle-left"></i>
                        </template>
                        <template #arrow-right>
                            <i class="fa-solid fa-angle-right"></i>
                        </template>
                        <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content"
                            :image="slide.image">
                        </vueper-slide>
                    </vueper-slides>
                </span>
            </div>
            <span>(number) orders in queue</span>
        </div>


        <div class="loyalty-and-noteable-clients">loyalty placeholder</div>
    </div>
</template>

<script>
import { objectToString } from '@vue/shared'
import { gigService } from '../../services/gig.service.js'
import { VueperSlides, VueperSlide } from "vueperslides";//???
import "vueperslides/dist/vueperslides.css";//???

export default {
    // props:['gig'],
    props: {
    gig: {
      type: Object,
      required: true
    }
  },
    created() {
        // console.log('test2',this.gig.owner);
    },
    methods: {
        getGig() {
            const { id } = this.$route.params
            console.log(this.$route)
            gigService.getById(id)
                .then(gig => {
                    this.gig = gig
                    console.log('gig', this.gig.owner.level)
                })
        }
    },
    components: {
        VueperSlides,
        VueperSlide
    }
}
</script>