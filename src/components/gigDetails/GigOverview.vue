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
        <h1 class="text-display-3 bold">{{ gig.title }}</h1>


        <div class="seller-overview">
            <RouterLink :to="'/user/' + gig.owner._id">
                <div class="seller-container flex">
                    <div class="seller-photo">
                        <img class="img-user" :src=gig.owner.imgUrl alt="">
                    </div>

                    <div class="seller-stats flex">
                        <RouterLink :to="'/user/' + gig.owner._id">{{ gig.owner.fullname }}</RouterLink>
                        <span>Level {{ gig.owner.level }} Seller</span> |
                        <span class="color-yellow">
                            <span>
                                <div class="stars">
                                    <ul class="flex">
                                        <li v-for="n in gig.owner.rate">
                                            <span class="star">
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </li>
                                        <li class="num">
                                            {{ gig.owner.rate }}
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
                    <vueper-slides class="carousel-container no-shadow details-slides" ref="vueperslides1"
                        :touchable="false" :autoplay="false" :bullets="false"
                        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fade>
                        <template #arrow-left>
                            <i class="fa-solid fa-angle-left"></i>
                        </template>
                        <template #arrow-right>
                            <i class="fa-solid fa-angle-right"></i>
                        </template>
                        <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content">
                            <template #content>
                                <span class="slide-img-container">
                                    <img :src="gig.imgUrl[i]" alt="">
                                </span>
                            </template>

                        </vueper-slide>
                    </vueper-slides>
                    <!-- SLIDE 2 -->
                    <vueper-slides class="no-shadow thumbnails" ref="vueperslides2"
                        @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
                        :visible-slides="slides.length" fixed-height="60px" :bullets="false" :touchable="false" :gap="2.8"
                        :arrows="false">
                        <vueper-slide v-for="(slide, i) in slides" :key="i" :content="slide.content"
                            @click.native="$refs.vueperslides2.goToSlide(i)">
                            <template #content>
                                <span class="slide2-img-container">
                                    <img :src="gig.imgUrl[i]" alt="">
                                </span>
                            </template>
                        </vueper-slide>
                    </vueper-slides>
                </span>
            </div>
            <SidebarSmall :gig='gig'></SidebarSmall>
           <!--we need user for this-->
        </div>


        <!--only render if there loyalty-->
        <div v-if="gig.owner.loyalty" class="loyalty-and-noteable-clients">loyalty placeholder</div>
    </div>
</template>

<script>
import SidebarContent from '../gigDetails/SidebarContent.vue'
import SidebarSmall from '../gigDetails/SidebarSmall.vue'

import { VueperSlides, VueperSlide } from "vueperslides"
import "vueperslides/dist/vueperslides.css"

export default {
    // props:['gig'],
    props: {
        gig: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            slides: [//still hard coded
                {

                    // image: (`https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/296272891/original/cdcef8a97d7dd47415447d0f9bb01218a79b7038/create-your-unique-art-through-ai-and-detailed-prompts.jpg`)
                },
                {
      
                    // image: (`https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a48578535dda6059a92aaa13f8c22a64-1678831259/Human_body_fruit-removebg-preview-transformed/create-your-unique-art-through-ai-and-detailed-prompts.png`)
                }
            ]
        }
    },
    components: {
        SidebarSmall,
        VueperSlides,
        VueperSlide
    }
}
</script>