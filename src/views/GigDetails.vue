<template>
    <div class="main-container full main-layout">

        <StickyHeader />

        <div class="gig-page main-layout">

            <section class="details-layout flex" v-if="gig">
                <!--suppose to be 2 colums, will make soon-->

                <SidebarContent></SidebarContent>


                <div class="main">

                    <GigOverview :gig='gig'></GigOverview>

                    <GigReview />

                    <div class="gig-description"><!--hard coded-->
                        <header>
                            <h2 class="section-title bold">About this Gig</h2>
                        </header>
                        <div class="description-wrapper">
                            <div class="description-wrapper"><span style="font-size:0"></span>
                                <div class="description-content" data-impression-collected="true">
                                    <p><strong>Please message me before ordering!</strong></p>
                                    <p><br></p>
                                    <p>I will help you Generating Artificial Intelligence Images from your requests and
                                        prompts.</p>
                                    <p><br></p>
                                    <p>You can choose any style and aspect ratio (1:1, 1:2, 4:5, 16:9, 6:9 etc.).</p>
                                    <p>You can also ask for a specific AI to be used to generate your Art.</p>
                                    <p>Fell free to contact me before order, I'll help you to create the perfect image and
                                        suggest you how to improve the prompts for the best results.</p>
                                    <p><br></p>
                                    <p><strong>BASIC PROMPT EXAMPLES:</strong></p>
                                    <p>"A girl with red hair and brown eyes in anime style"</p>
                                    <p>"Post apocalyptic city with a child and a robot"</p>
                                    <p>"A cute fluffy bunny grumpily working on her trip itinerary"</p>
                                    <p><br></p>
                                    <p><strong>STYLE EXAMPLES:</strong></p>
                                    <p>2D, 3D, Futuristic, Abstract, Anime, Manga, Vaporwave, Realistic, painted by Van
                                        Gogh, Gothic, Pop-Art, Cyberpunk, Concept Art, Character Design, Fantasy etc..</p>
                                    <p><br></p>
                                    <p><strong>UNLEASH YOUR IMAGINATION! LET'S CREATE TOGETHER! </strong></p>
                                    <p><br></p>
                                    <p>Thanks,</p>
                                    <p><em>Jacopo.</em></p>
                                </div>
                            </div>
                        </div>
                        <ul class="metadata flex"><!--looks like v-for inside v-for-->
                            <li class="metadata-attribute">
                                <p>AI engine</p>
                                <ul class="flex">
                                    <li>
                                        Midjourney
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>


                    <!-- <AboutSeller /> NOT WORKING -->

                    <div class="about-seller">
                        <h2 class="section-title about-this-seller">About The Seller</h2>
                        <div class="profile-card">
                            <div class="seller-card">
                                <div class="profile-info flex">
                                    <div class="user-profile-image flex">
                                        <label for="profile-image" class="img-label">
                                            <img class="img-user" src="../assets/images/profile-pic.png" alt="">
                                        </label>
                                        <!--some kind of label, there is his photo, and over it the level-->
                                    </div>
                                    <div class="user-profile-label flex">
                                        <div class="username-line flex">
                                            <RouterLink :to="'/user/' + gig.owner._id">{{ gig.owner.fullname }}</RouterLink>
                                            <!--add route to his profile-->
                                            <div class="status-indicator">
                                                <span>
                                                    <svg width="4px" height="4px" viewBox="0 0 16 16"
                                                        xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                        <path
                                                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z">
                                                        </path>
                                                    </svg>
                                                </span>
                                                <p class="circle-icon">Online</p><!--todo this-->
                                            </div>
                                        </div>
                                        <div class="one-liner flex">
                                            <p class="one-liner">Level 3 Seller</p>
                                            <div class="color-yellow">
                                                <div class="stars">
                                                    <ul class="flex">
                                                        <li v-for="star in  stars">
                                                            <span class="star">
                                                                <i class="fa-solid fa-star"></i>
                                                            </span>
                                                        </li>
                                                        <span>
                                                            {{ gig.owner.rate }}
                                                        </span>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!--v-for for the stars-->
                                        </div>
                                        <button class="btn-contact-me">Contact Me</button>
                                    </div>
                                </div>

                                <div class="stats-desc">
                                    <section class="user-stats-container">
                                        <ul class="user-stats"><!--v-for loop, or hard coded-->
                                            <li class="flex">
                                                <span class="key">From</span>
                                                <span class="value">Israel</span>
                                            </li>
                                            <li class="flex">
                                                <span class="key">Member since</span>
                                                <span class="value">Jan 2017</span>
                                            </li>
                                            <li class="flex">
                                                <span class="key">Avg. response time</span>
                                                <span class="value">1 hour</span>
                                            </li>
                                            <li class="flex">
                                                <span class="key">Last delivery</span>
                                                <span class="value">about 40 minutes</span>
                                            </li>
                                        </ul>
                                    </section>

                                    <section class="seller-desc">
                                        <div class="inner">
                                            <p>
                                                Hello, I am Waqas. I am a Software Engineer and a tech enthusiast. I have 10
                                                years of experience in WordPress. I have completed more than 1,000
                                                successful projects on Fiverr. I help businesses to grow their online
                                                presence by having modern and up-to-date websites. I offer full website
                                                creation service along with search engine optimization, marketing, A/B
                                                testing, brand building, eCommerce solutions and conversion rate
                                                optimization. Building a top notch website design is what makes me different
                                                from others. Feel free to contact me for any questions or custom orders!
                                            </p>
                                        </div>
                                        <button>read more</button><!--check when this is a thing-->
                                    </section>
                                    <!-- <div class="notable-clients">
                                        <div class="notable-clients-about">
                                            <div class="notable-clients-title flex">
                                                <span>Among my clients &nbsp;</span>
                                            </div>
                                            &nbsp;
                                            <div>question mark svg</div>
                                            <span>NEW</span>
                                        </div>
                                        <ul class="client-list double flex">

                                        </ul>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                        <!-- <section class="portfolio-external-wrapper">
                            <section class="porfilio-presence">
                                <div class="presence-header flex">
                                    <RouterLink to="/">link to the porfilios</RouterLink>
                                    <div>the question mark svg</div>
                                    <span>the new svg(ping one)</span>
                                </div>
                                <ul class="grid">
                                </ul>
                                <RouterLink to="/">more projects</RouterLink>
                            </section>
                        </section> -->

                        <!-- <form class="gig-packages-form" action="/payments">
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
                                        <tr class="package-type">
                                            <th class="package-row-label">Package</th>
                                            <th class="package-row-price">
                                                <div class="price-wrapper flex">
                                                    <p class="price">number</p>
                                                </div>
                                                <p class="type">Basic</p>
                                                <p class="title">his title</p>
                                            </th>
                                        </tr>
                                        <tr class="description">
                                            <td class="package-row-label"></td>
                                            <td>bla bla lba</td>
                                        </tr>

                                        <tr></tr>

                                        <tr class="delivery-time">bla bla, the 4 colums</tr>
                                        <tr class="select-package">bla bla, the 4 colums, but with button</tr>
                                    </tbody>
                                </table>
                            </div>
                        </form> -->
                    </div>


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
    <!-- <section v-if="gig" class="gig-details">
        <button @click="$router.go(-1)">x</button>
        <pre>{{ gig }}</pre>
    </section> -->
</template>



<script>
import { gigService } from './../services/gig.service'
import SidebarContent from '../components/gigDetails/SidebarContent.vue'
import ReviewPage from './ReviewPage.vue'
import StickyHeader from '../components/gigDetails/StickyHeader.vue'
import GigOverview from '../components/gigDetails/GigOverview.vue'
import GigReview from '../components/gigDetails/GigReview.vue'
import AboutSeller from '../components/gigDetails/AboutSeller.vue'

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    data() {
        return {
            gig: null,

            stars: ['', '', '', '', ''],

            slides: [
                {
                    // content: `  <span>
                    //                 <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/296272891/original/cdcef8a97d7dd47415447d0f9bb01218a79b7038/create-your-unique-art-through-ai-and-detailed-prompts.jpg" alt="">
                    //             </span>`,
                    image: (`https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/296272891/original/cdcef8a97d7dd47415447d0f9bb01218a79b7038/create-your-unique-art-through-ai-and-detailed-prompts.jpg`)
                },
                {
                    image: (`https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a48578535dda6059a92aaa13f8c22a64-1678831259/Human_body_fruit-removebg-preview-transformed/create-your-unique-art-through-ai-and-detailed-prompts.png`)
                }
            ]
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
        SidebarContent,
        ReviewPage,
        StickyHeader,
        GigOverview,
        GigReview,
        AboutSeller,

        VueperSlides,
        VueperSlide,


    },

    methods: {
        getGig() {
            const { id } = this.$route.params;
            console.log(this.$route);
            gigService.getById(id)
                .then(gig => {
                    this.gig = gig;
                    console.log('gig', this.gig);
                })
        }
    },

}
</script>