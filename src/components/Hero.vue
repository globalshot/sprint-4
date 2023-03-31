<template>
    <section class="hero-container main-layout full">
        <div class="hero-pos-container main-layout full">

            <div class="img-container full">
                <vueper-slides autoplay class="no-shadow" fade :arrows="false" :bullets="false" :pause-on-hover=false>
                    <vueper-slide v-for="(slide, i) in slides" :key="i">
                        <template #content>
                            <img :src=img[i] alt="">
                        </template>
                    </vueper-slide>


                </vueper-slides>


                <vueper-slides autoplay class="no-shadow info-slides" fade :arrows="false" :bullets="false"
                    :pause-on-hover=false>
                    <vueper-slide v-for="(slide, i) in slides" :key="i">
                        <template #content>
                            <div class="hero-info">
                                <div class="info-txt flex">
                                    <span class="fullname">{{ info.fullname[i] }},</span>
                                    <p class="expert">{{ info.expert[i] }}</p>
                                </div>
                                <ul v-if="info.rate[i] === 5" class="stars flex">
                                    <li v-for="n in 5">
                                        <span class="star">
                                            <i class="fa-solid fa-star"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </vueper-slide>
                </vueper-slides>
                <!-- <img src="https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/zj3dflxnixaytffgqpn9.webp"
                    alt=""> -->
            </div>


            <div class="search-container flex">
                <h1>
                    Find the perfect
                    <i class="fancy-word">freelance</i> <br>
                    services for your business
                </h1>

                <div class="hero-search flex">
                    <div class="input-container flex">
                        <div class="search-icon flex">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                    fill="#95979D">
                                    <path
                                        d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <input v-model="filterBy.txt" type="text" name="" placeholder='Try "Logo Design"'>
                    </div>
                    <a v-bind:href="'/#/gig?txt=' + filterBy.txt">
                        <button class="el-button">
                            <span>
                                Search
                            </span>
                        </button>
                    </a>
                </div>
                <div class="categories flex">
                    <span>
                        Popular:
                    </span>
                    <RouterLink to="/gig?tag=website-design">
                        <div class="category flex">Website Design</div>
                    </RouterLink>
                    <RouterLink to="/gig?tag=word-press">
                        <div class="category flex">WordPress</div>
                    </RouterLink>
                    <RouterLink to="/gig?tag=logo-design">
                        <div class="category flex">Logo Design</div>
                    </RouterLink>
                    <RouterLink to="/gig?tag=ai-services">
                        <div class="category flex">AI Services</div>
                    </RouterLink>
                </div>
                <!-- <div class="hero-info flex">
                    <p class="rate">
                        <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                    </p>
                    <p>Andrea, <span> Fashion Designer</span></p>
                </div> -->
            </div>
        </div>

    </section>
    <div class="trusted-container full">
        <div class="trusted main-layout full">
            <div class="logos flex align-center justify-center">
                <span>Trusted By:</span>
                <div class="icon-container"><img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png"
                        alt=""> </div>
                <div class="icon-container"><img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png"
                        alt=""> </div>
                <div class="icon-container"><img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png"
                        alt=""> </div>
                <div class="icon-container"><img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png"
                        alt=""> </div>
                <div class="icon-container"><img
                        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png"
                        alt=""> </div>
            </div>
        </div>
        <section class="categories-list main-layout full">
        </section>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
    data() {
        return {
            filterBy: {
                txt: '',
            },
            img: [
                "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/062d9604f20f64f4b45f8501aeea8212-1674662964518/bg-hero-6-900-x1.png",
                "https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/zj3dflxnixaytffgqpn9.webp",
                "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png",
                "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png",
                "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png",
                "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png",
            ],
            imgSmall: ["https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/062d9604f20f64f4b45f8501aeea8212-1674662964518/bg-hero-6-900-x1.png",
                "https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/zj3dflxnixaytffgqpn9.webp",
                "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png",
                "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png",
                "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png",
                "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png",
            ],
            info: {
                fullname: [
                    'Valentina',
                    'Andrea',
                    'Moon',
                    'Retika',
                    'Zach',
                    'Gabrielle',
                ],
                expert: [
                    'AI Artist',
                    'Fashion Designer',
                    'Marketing Designer',
                    'Shoemaker and Designer',
                    'Bar Owner',
                    'Video Editor',
                ],
                rate: [5, 0, 5, 0, 0, 5]
            },

            slides: [
                {
                    // valentina,
                    img: ("https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/062d9604f20f64f4b45f8501aeea8212-1674662964518/bg-hero-6-900-x1.png"),
                },
                {
                    // andrea,
                    img: ("https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/zj3dflxnixaytffgqpn9.webp"),
                },
                {
                    // moon,
                    img: ("https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203043/bg-hero-2-900-x1.png"),
                },
                {
                    // ritika,
                    img: ("https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783973/bg-hero-3-900-x1.png"),
                },
                {
                    // zach,
                    img: ("https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049964/bg-hero-4-900-x1.png"),
                },
                {
                    // gabriela,
                    img: ("https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049961/bg-hero-5-900-x1.png"),
                },
            ]
        }
    },

    components: {
        VueperSlides,
        VueperSlide
    },
    methods: {
        // setFilterBy() {
        //     const filterBy = { ...this.filterBy }
        //     this.$store.dispatch({ type: 'loadGigs', filterBy })
        // }
    }
}
</script>