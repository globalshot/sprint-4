<template>
    <div class="gig-page-review">
        <ReviewPage :gig='gig' />
        <div class="package-review">
            <div class="reviews-title">Review</div>
            <header class="reviews-header breakdown-header">
                <div class="details flex">
                    <span class="flex">
                        <span>
                           <!-- TODO add reviews from store -->
                           8,702 reviews for this Gig
                        </span>
                        <div>(stars) {{ gig.owner.rate }}</div>
                    </span>
                </div>
            </header>

            <span>
                <div class="breakdown-wrapper grid-12 flex">
                    <table class="stars-counters">
                        <tbody>
                            <tr><!--4 times more-->
                                <td>
                                    <span class="stars-filter-wrapper">
                                        <button class="star-filter">
                                            5 stars
                                        </button>
                                    </span>
                                </td>
                                <td class="progress-bar-container">
                                    <div class="star-progress-bar flex"><!--the bar-->
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

                <div><!--some col classes-->
                    <div class="ranking">
                        <h6 class="text-display-7">Rating breakdown</h6>
                        <ul>
                            <li class="flex">
                                Seller communication level
                                <span class="yellow-color flex"><!--v-for for the stars-->
                                </span>
                                number
                            </li>
                            <li class="flex">
                                Recommend to a friend
                                <span class="yellow-color flex"><!--v-for for the stars-->
                                </span>
                                number
                            </li>
                            <li class="flex">
                                Service as described
                                <span class="yellow-color flex"><!--v-for for the stars-->
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
                                <input type="checkbox"><!--there id-->
                                <span>for fancy checkmark</span>
                            </label>
                        </div>
                    </div>
                </div>
            </span>

            <div class="reviews-wrap">
                <ul class="reviews-list"><!--x4 more of this-->
                    <span class="review-item-component-wrapper">
                        <li class="review-item-component review-item">
                            <div class="review-header-container">
                                <div class="flex flex-items-center">
                                    <div class="user-profile-image"> <label class="profile-pic" for="profile_image_7113077744648" style="width: 48px; height: 48px; font-size: 1em;"><span class="missing-profile-image flex-center tbody-6 custom-profile-image">j</span></label> </div><!--user image-->
                                    <div class="flex flex-col">
                                        <div class="flex user-info">
                                            <div class="user-profile-picture"></div>
                                            <!--more lines, but for mobile image of user-->
                                            <div class="reviewer-details flex"></div>
                                        </div>
                                        <div class="reviewer-sub-details flex">
                                            <div class="country flex">
                                                <img src="" alt="" class="country-flag">
                                                <div class="country-name"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="review-details">
                                <div class="flex">
                                    <div>rating ffs, im done</div>
                                    <p>date</p><!--it was <time>, and i dont think its allowed-->
                                </div>
                                <div class="review-description">
                                    <p>bla bla lba</p>
                                </div>
                                <div class="review-footer flex">
                                    <div class="helpful-footer flex">
                                        <div class="helpful-text">helpful?</div>
                                        <span>thumbs</span><!--idk if there more-->
                                    </div>
                                </div>
                            </div>
                        </li>
                    </span>
                    <!--more reviews-->
                </ul>
                <div class="load-more-wrapper">
                    <button class="see-more-button">see more</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        gig: {
            type: Object,
            required: true
        }
    },
}
</script>