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
                                                <img class="country-flag" :src=flag[review.user.country] alt="" loading="lazy">
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
        reviews: {
            type: Array,
        },
        data() {
            return {
                flag: {
                    'Israel': 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png',
                    'France': 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png',
                    'Sweden': 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ea.png',
                    'Ecuador': 'https://icons.iconarchive.com/icons/twitter/twemoji-flags/128/Ecuador-Flag-icon.png',
                    'Albania': 'https://icons.iconarchive.com/icons/custom-icon-design/all-country-flag/128/Albania-Flag-icon.png',
                    'United States': 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png',
                    'India': 'https://cdn.countryflags.com/thumbs/india/flag-3d-250.png',
                    'Serbia': 'https://fiverr-res.cloudinary.com/images/t_thumbnail3_3,q_auto,f_auto/gigs/21164927/original/7d564ccb44b9c102e562a6e34106f29e786e08ae/provide-you-information-from-serbia.png',
                    'Sri Lanka': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlrQRoB2GHBPlmFYZgDGDYOwOyH6a9myypvw&usqp=CAU',
                    'Australia': 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1fa.png',
                    'Germany': 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png',
                    'Nigira': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxlU7utEIixvl3LkBNHertngxjcpUPui7XA&usqp=CAU',
                    'Scotland': 'data:image/png;base64,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',
                    'Pakistan': 'https://flagcdn.com/16x12/pk.png',
                    'United Kingdom': 'https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png',
                },
            }
        }
        // reviews: {
        //     type: Array,
        // }
    },
    computed: {

    },
    components: {
        ReviewPage
    }
}
</script>