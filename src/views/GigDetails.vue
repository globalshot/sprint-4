<template>
    <div class="main-container full main-layout">

        <StickyHeader />

        <div class="gig-page main-layout">

            <section class="details-layout flex">
                <!--suppose to be 2 colums, will make soon-->

                <SidebarContect></SidebarContect>


                <div class="main">

                    <!-- <GigOverview></GigOverview> -->
                    <div class="gig-overview">
                        <nav class="nav-tag">
                            <ul class="flex"><!--v-for loop, for each category of smth-->
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
                        <h1 class="text-display-3 bold">{{ gig.title }}</h1><!--size suppose to be 28px-->

                        <RouterLink :to="'/user/' + gig.owner._id">
                            <div class="seller-overview">
                                <div class="flex">
                                    <div class="seller-photo">
                                        <img class="img-user" src="../assets/images/profile-pic.png" alt="">
                                    </div>
                                    <div class="seller-stats"><!--idk if to call it stats-->
                                        <RouterLink to="/">{{ gig.owner.fullname }}</RouterLink>
                                        <span>{{ gig.owner.level }}</span> |
                                        <span class="color-yellow">
                                            <span><!--v-for for the mount of stars--></span>
                                            {{ gig.owner.rate }}
                                            <span class="rating-count"></span>
                                        </span>
                                        <div class="img-container">
                                            <img src="../../assets/images/demo-img.png" alt="">
                                            <span>HEYY</span>
                                        </div>
                                        <span>(number) orders in queue</span><!--less bold color-->
                                    </div>
                                </div>
                            </div>
                        </RouterLink>

                        <div class="loyalty-and-noteable-clients">loyalty placeholder</div><!--missing padding and margin-->
                    </div>
                    <!--gig overview ends here-->


                    <section class="gig-gallery-component"><!--photos-->
                    </section>

                    <GigReview />
                    <!-- <div class="gig-review-snipped">
                        <header class="flex">
                            <h2 class="section-title">What people loved about this seller</h2>
                            <button class="reviews-btn">See all reviews</button>
                        </header>
                        <span class="review-carousel-wrapper">
                            <div>the review</div>
                        </span>
                    </div> -->


                    <div class="gig-description">
                        <header>
                            <h2 class="section-title">About this gig</h2>
                        </header>
                        <div class="description-wrapper">
                            <div class="description-content"></div>
                        </div>
                        <ul class="metadata flex"><!--looks like v-for inside v-for-->
                        </ul>
                    </div>


                    <h2 class="section-title about-this-seller">About The Seller</h2>
                    <div class="profile-card">
                        <div class="seller-card">
                            <div class="profile-info flex">
                                <div class="user-profile-image flex">
                                    <!--some kind of label, there is his photo, and over it the level-->
                                </div>
                                <div class="user-profile-label flex">
                                    <div class="username-line flex">
                                        <RouterLink to="/">{{ gig.owner.fullname }}</RouterLink>
                                        <!--add route to his profile-->
                                        <div class="status-indicator">
                                            <span class="circle-icon">online/offline</span><!--todo this-->
                                        </div>
                                    </div>
                                    <div class="one-liner-rating-wrapper flex">
                                        <p class="one-liner">(his moto i guess)</p>
                                        <div class="color-yellow">{{ gig.owner.rate }} (number of ratings)</div>
                                        <!--v-for for the stars-->
                                    </div>
                                    <button class="btn-contact-me">contact me</button>
                                </div>
                            </div>

                            <div class="stats-desc">
                                <ul class="user-stats flex"><!--v-for loop, or hard coded-->
                                </ul>
                                <article class="seller-desc">
                                    <div class="inner">text text text</div>
                                    <button>read more</button><!--check when this is a thing-->
                                </article>
                                <div class="notable-clients">
                                    <div class="notable-clients-about">
                                        <div class="notable-clients-title flex">
                                            <span>Among my clients &nbsp;</span><!--some <b> class-->
                                        </div>
                                        &nbsp;
                                        <div>question mark svg</div><!--more info about this section-->
                                        <span>NEW</span><!--pink new-->
                                    </div>
                                    <ul class="client-list double flex"><!--v-for loop-->

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="portfolio-external-wrapper">
                        <section class="porfilio-presence">
                            <div class="presence-header flex">
                                <RouterLink to="/">link to the porfilios</RouterLink>
                                <div>the question mark svg</div>
                                <span>the new svg(ping one)</span>
                            </div>
                            <ul class="grid"><!--idk if there grid class-->
                                <!--first image is 2x2, other 4 are 1x1-->
                            </ul>
                            <RouterLink to="/">more projects</RouterLink><!--add link ofc-->
                        </section>
                    </section>

                    <form class="gig-packages-form" action="/payments"><!--it say add method post-->
                        <!--lots of inputs idk-->
                        <div class="gig-packages-table">
                            <h2 class="section-title">compare packages</h2>
                            <table>
                                <colgroup>
                                    <col>
                                    <col>
                                    <col>
                                    <col>
                                </colgroup>
                                <tbody>
                                    <tr class="package-type"><!--do this x2 times-->
                                        <th class="package-row-label">Package</th>
                                        <th class="package-row-price">
                                            <div class="price-wrapper flex">
                                                <p class="price">number</p>
                                            </div>
                                            <p class="type">Basic</p><!--there was b element-->
                                            <p class="title">his title</p>
                                        </th>
                                    </tr>
                                    <tr class="description">
                                        <td class="package-row-label"></td>
                                        <td>bla bla lba</td><!--2 more times-->
                                    </tr>

                                    <tr></tr>
                                    <!--v-for for sure, not even bothering to write all of the rows(bonuses of each thing)-->

                                    <tr class="delivery-time">bla bla, the 4 colums</tr>
                                    <tr class="select-package">bla bla, the 4 colums, but with button</tr>
                                </tbody>
                            </table>
                        </div>
                    </form>


                    <div class="gig-page-review">
                        <ReviewPage :gig='gig' />
                        <div class="">Review</div><!--some classes-->
                        <div class="package-review">
                            <header class="reviews-header breakdown-header">
                                <div class="details flex">
                                    <span class="flex">
                                        <span>
                                            (number) review for gig
                                        </span>
                                        <div class="color-yellow">(stars) {{ gig.owner.rate }}</div>
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
                                                <!--too lazy for 2 more divs-->
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
                                            <div class="reaview-header-container">
                                                <div class="flex flex-items-center">
                                                    <div class="user-profile-image"></div><!--user image-->
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


                    <div class="gig-tags-container">
                        <h2 class="section-title"> Related tags</h2>
                        <ul><!--v-for for the tags-->

                        </ul>
                    </div>
                </div>

            </section>
        </div>


        <section></section><!--the seller pop up at the left bottom-->
        <aside class="gig-page-bottom">
            <div class="max-width-container">
                <div class="gig-card-carousel-wrapper gigs-other-gigs-by">
                    <h2 class="section-title">More services by
                        <!--route to users profile i guess-->
                    </h2>
                    <div class="gig_listing-package listing-carousel gig-card-layout">
                        <div><!--some id inside-->
                            <div class="orca-slider">
                                <div class="slick-slider slicker-initialized">
                                    <div class="slick-list">
                                        <div class="slick-track flex"></div><!--v-for the cards and that-->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>

    </div>
    <section v-if="gig" class="gig-details">
        <button @click="$router.go(-1)">x</button>
        <pre>{{ gig }}</pre>
    </section>
</template>



<script>
import { gigService } from './../services/gig.service'
import SidebarContect from '../components/gigDetails/SidebarContect.vue'
import ReviewPage from './ReviewPage.vue'
import StickyHeader from '../components/gigDetails/StickyHeader.vue'
import GigOverview from '../components/gigDetails/GigOverview.vue'
import GigReview from '../components/gigDetails/GigReview.vue'

export default {
    data() {
        return {
            gig: null,
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
        this.getGig()
    },
    computed: {
        well() {
            return this.gig
        }
    },
    components: {
        SidebarContect,
        ReviewPage,
        StickyHeader,
        GigOverview,
        GigReview,

    },

    methods: {
        getGig() {
            const { id } = this.$route.params;
            console.log(this.$route);
            gigService.getById(id)
                .then(gig => {
                    this.gig = gig;
                    console.log('gig', gig);
                })
        }
    },

}
</script>