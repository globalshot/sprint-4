<template>
    <div class="gig-page-review">
        <!-- <ReviewPage :gig='gig' /> -->
        <div class="package-review">
            <!-- <div class="reviews-title">Review</div> -->
            <!-- <header class="reviews-header breakdown-header">
                <div class="details flex">
                    <span class="flex">
                        <span>
                           3 reviews for this Gig
                        </span>
                        <div>(stars) {{ gig.owner.rate }}</div>
                    </span>
                </div>
            </header>

            <span>
                <div class="breakdown-wrapper grid-12 flex">
                    <table class="stars-counters">
                        <tbody>
                            <tr>
                                <td>
                                    <span class="stars-filter-wrapper">
                                        <button class="star-filter">
                                            5 stars
                                        </button>
                                    </span>
                                </td>
                                <td class="progress-bar-container">
                                    <div class="star-progress-bar flex">
                                        <div>
                                            <span class="star-progress-shape"></span>
                                        </div>
                                    </div>
                                </td>
                                <td class="star-num">number</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <div class="ranking">
                        <h6 class="text-display-7">Rating breakdown</h6>
                        <ul>
                            <li class="flex">
                                Seller communication level
                                <span class="yellow-color flex">
                                </span>
                                number
                            </li>
                            <li class="flex">
                                Recommend to a friend
                                <span class="yellow-color flex">
                                </span>
                                number
                            </li>
                            <li class="flex">
                                Service as described
                                <span class="yellow-color flex">
                                </span>
                                number
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="filters-wrapper">
                    <div class="filters-list">
                        <span class="search-box-filter-wrapper">
                            <form class="search-form-filter flex">
                                <input type="search" placeholder="Search review">
                                <button>search</button>
                            </form>
                        </span>
                        <span class="filter-reviews-wrapper">
                            <div class="filter-reviews">
                                <h6 class="filter-dropdown-text">sort by</h6>
                                <div class="filter-review-select flex">
                                    <span class="filter-review-select-content flex">
                                        <div>Most relevant</div>
                                        <span>arrow down svg</span>
                                    </span>
                                </div>
                            </div>
                        </span>
                        <div class="toggle-filter flex">
                            <label>
                                <input type="checkbox">
                                <span>for fancy checkmark</span>
                            </label>
                        </div>
                    </div>
                </div>
            </span> -->

            <div class="reviews-wrap">
                <ul class="reviews-list">
                    <div v-for="review in reviews">
                        <div v-if="review.gig.gigId === gig._id">
                            <li class="review-item-component review-item">
                                <div class="review-header-container">
                                    <div class="flex flex-items-center">
                                        <div class="user-profile-picture"></div>
                                        <div class="user-profile-image">
                                            <label class="profile-pic" for="profile_image_7113077744648">
                                                <span
                                                    class="missing-profile-image flex-center tbody-6 custom-profile-image">j</span>
                                            </label>
                                        </div>
                                        <div class="flex flex-col">
                                            <div class="flex user-info">

                                                <!--more lines, but for mobile image of user-->
                                                <div class="reviewer-details flex">
                                                    <span class="username">{{ review.user.userName }}</span>
                                                </div>
                                            </div>
                                            <div class="reviewer-sub-details flex">
                                                <div class="country flex">
                                                    <img class="country-flag"
                                                        src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                                                        alt="US" loading="lazy">
                                                    <div class="country-name tbody-6">United States</div>
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
                                                    <li v-for="n in gig.owner.rate">
                                                        <span class="star">
                                                            <i class="fa-solid fa-star"></i>
                                                        </span>
                                                    </li>
                                                    <li class="num">
                                                        {{ gig.owner.rate }} 
                                                    </li>
                                                    <span class="inline-divider "></span>
                                                    <time class="text-body-2"> 2 months ago</time>
                                                </ul>
                                            </div>
                                            <p>{{ review.reviewDetails }}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
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
        }
    },
    // data() {
    //     return {
    //         reviews: []
    //     }
    // },
    created() {
        // this.reviews = this.$store.getters.getReviews
        // console.log(this.$store.getters.getReviews)
        console.log(this.reviews)
    },
    computed: {
        // reviews() {
        //     return this.$store.getters.getReviews
        // },
    },
    components: {
        ReviewPage
    }
}
</script>