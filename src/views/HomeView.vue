<template>
    <main class="app-container main-layout full">
        <section class="app-home main-layout full">
            <Hero />

            <section class="type-card">
                <h1>Popuar professional serfices</h1>
                <div class="gallery-container">
                    <div class="subcategory-warper"
                        style="background-image: url(https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png) ;">
                        <span>Add talent to AI</span>
                        <h4>AI Artists</h4>
                    </div>
                    <div class="subcategory-warper"
                        style="background-image: url(https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png) ;">
                        <span>Build your brand</span>
                        <h4>Logo Design</h4>
                    </div>
                    <div class="subcategory-warper"
                        style="background-image: url(https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png) ;">
                        <span>Customize your site</span>
                        <h4>WordPress</h4>
                    </div>
                    <div class="subcategory-warper"
                        style="background-image: url(https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png) ;">
                        <span>Share your message</span>
                        <h4>Voice Over</h4>
                    </div>
                    <div class="subcategory-warper"
                        style="background-image: url(https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png) ;">
                        <span>Engage your audience</span>
                        <h4>Video Explainer</h4>
                    </div>

                </div>
            </section>
            <div class="selling-proposition-warper">
                <div class="selling-proposition">
                    <div class="selling-container">
                        <div class="selling-info">

                        </div>
                        <div class="selling-video">
                            <div class="picture-wrapper">
                                <img src="https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670793711/gigs/ostlxosopzlu6ccomezg.webp" alt="">
                                <!-- <video src="src\assets\videos\vmvv3czyk2ifedefkau7.mp4"></video> -->
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
    name: 'HomeView',

    components: {
        Hero,
    },
}

</script>