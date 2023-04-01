<template>
    <div class="gig-page-review">
        <div class="package-review">
            <div class="reviews-wrap">
                <ul class="reviews-list">
                    <div v-for="(review, i) in gig.reviews" :key="i">
                        <!-- <div v-if="review.gig.gigId === gig._id"> -->
                        <li class="review-item-component review-item">
                            <div class="review-header-container">
                                <div class="flex flex-items-center">
                                    <div class="user-profile-picture"></div>
                                    <div class="user-profile-image">
                                        <label class="profile-pic" for="profile_image_7113077744648">
                                            <span class="missing-profile-image flex-center tbody-6 custom-profile-image">
                                                <img :src=review.user.imgUrl alt="">
                                            </span>
                                            <!-- <span class="missing-profile-image flex-center tbody-6 custom-profile-image">
                                                j
                                            </span> -->
                                        </label>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="flex user-info">

                                            <!--more lines, but for mobile image of user-->
                                            <div class="reviewer-details flex">
                                                <span class="username">{{ review.user.fullname }}</span>
                                            </div>
                                        </div>
                                        <div class="reviewer-sub-details flex">
                                            <div class="country flex">
                                                <div class="country-name tbody-6">{{ review.user.country }} </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="review-details">
                                <div class="flex m-t-20">
                                    <div class="orca-rating color-yellow tbody-6">
                                        <div class="stars">
                                            <ul class="flex">
                                                <li v-for="n in review.rating">
                                                    <span class="star">
                                                        <i class="fa-solid fa-star"></i>
                                                    </span>
                                                </li>
                                                <li class="num">
                                                    {{ review.rating }}
                                                </li>
                                                <span class="inline-divider "></span>
                                                <time class="text-body-2"> 2 months ago</time>
                                            </ul>
                                        </div>
                                        <p>{{ review.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- </div> -->
                    </div>
                </ul>
                <!-- <div class="load-more-wrapper">
                    <button class="see-more-button">see more</button>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import ReviewPage from '../../views/ReviewPage.vue';
export default {
    props: {

        gig: {
            type: Object,
            required: true
        },
        data() {
            return {
                flag: {
                    Israel: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png',
                    France: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png',
                    Sweden: 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ea.png',
                    Ecuador: 'https://icons.iconarchive.com/icons/twitter/twemoji-flags/128/Ecuador-Flag-icon.png',
                    Albania: 'https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/128/Albania-Flag-icon.png',
                },
            }
        }
        // reviews: {
        //     type: Array,
        // }
    },
    computed: {
    },
    computed: {},
    components: {
        ReviewPage
    }
}
</script>