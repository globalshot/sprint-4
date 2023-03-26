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


                    <GigReviews :gig="gig"/>


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
import GigReviews from '../components/gigDetails/GigReviews.vue'
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
    data() {
        return {
            gig: null,

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
        VueperSlides,
        VueperSlide,
        GigReviews,

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