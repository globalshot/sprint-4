<template>
    <div class="gig-review">
        <header class="flex">
            <h2 class="section-title">What people loved about this seller</h2>
            <button class="reviews-btn">See all reviews</button>
        </header>
        <span class="review-carousel-wrapper">
            <vueper-slides class="carousel-container no-shadow details-slides" :bullets="false">
                <template #arrow-left>
                    <i class="fa-solid fa-angle-left"></i>
                </template>
                <template #arrow-right>
                    <i class="fa-solid fa-angle-right"></i>
                </template>
                <vueper-slide v-for="(review, i) in gig.reviews" :key="i">
                    <template #content>
                        <div class="review">
                            <span class="img-user">
                                <img :src=gig.reviews[i].user.imgUrl
                                    alt="">
                            </span>
                            <div class="review-details">
                                <div class="user-review">
                                    <h6>{{gig.reviews[i].user.fullname}}</h6>
                                    <div class="country">
                                        <img class="country-flag"
                                            :src=flag[gig.reviews[i].user.country]
                                            alt="US" loading="lazy">
                                            
                                        <div class="country-name tbody-6">{{gig.reviews[i].user.country}}</div>
                                    </div>
                                    <div class="stars" >
                                        <ul class="flex">
                                            <li v-for="i in gig.reviews[i].rate">
                                                <span class="star">
                                                    <i class="fa-solid fa-star"></i>
                                                </span>
                                            </li>
                                            <span class="num">
                                                {{gig.reviews[i].rate}}
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                                <div class="review-description">
                                   {{ gig.reviews[i].text }}
                                </div>
                            </div>
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>

        </span>
    </div>
</template>

<script>
import ReviewPage from '../../views/ReviewPage.vue';
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    props: {
        reviews: {
            type: Array,
        },
        gig: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            flag: {
                Israel: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png',
                France: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png',
                Sweden: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ea.png',

            },
            // userImg: review.user.imgUrl,
            slides: [
                {
                    content: `
                    <div class="review">
                        <span class="img-user">
                            <img src="https://www.heysigmund.com/wp-content/uploads/When-Someone-You-Love-is-Toxic-How-to-Let-Go-of-Toxic-People-Without-Guilt.jpg" alt="">
                            </span>
                        <div class="review-details">
                            <div class="user-review">
                                <h6>thesenator</h6>
                                <div class="country">
                                    <img class="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="US" loading="lazy">
                                    <div class="country-name tbody-6">United States</div>
                                </div>
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
                                            5
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="review-description">
                                this is a review for this gig which helped me a lot and was really fast! 
                                </div>
                        </div>
                    </div>
                    `
                },
                {
                    // title: 'Slide #2',
                    content: `
                    <div class="review">
                        <span class="img-user">
                            <img src="https://www.heysigmund.com/wp-content/uploads/When-Someone-You-Love-is-Toxic-How-to-Let-Go-of-Toxic-People-Without-Guilt.jpg" alt="">
                            </span>
                        <div class="review-details">
                            <div class="user-review">
                                <h6>thesenator</h6>
                                <div class="country">
                                    <img class="country-flag" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="US" loading="lazy">
                                    <div class="country-name tbody-6">United States</div>
                                </div>
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
                                            5
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="review-description">
                                this is a review for this gig which helped me a lot and was really fast! 
                                </div>
                        </div>
                    </div>
                    `
                }
            ]
        }
    },
    components: {
        ReviewPage,
        VueperSlides,
        VueperSlide
    },
}
</script>