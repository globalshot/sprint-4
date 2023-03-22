<template>
    <section class="hero-container main-layout full">
        <div class="hero-pos-container main-layout full">

            <div class="img-container full">
                <img src="https://res.cloudinary.com/dhsdxj3y3/image/upload/v1670768271/gigs/zj3dflxnixaytffgqpn9.webp"
                    alt="">
            </div>
            <div class="search-container flex">
                <h1>
                    Find the perfect
                    <span class="fancy-word">freelance</span> <br>
                    services for your business
                </h1>

                <div class="hero-search flex">
                    <div class="input-container flex">
                        <div class="search-icon flex">
                            <span>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>
                        <input type="text" name="" placeholder='Try "Logo Design"'>
                    </div>
                    <button class="el-button">
                        <span>
                            Search
                        </span>
                    </button>
                </div>
                <div class="categories flex">
                    Popular:
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
                <div class="hero-info flex">
                    <p class="rate">
                        <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i>
                    </p>
                    <p>Andrea, <span> Fashion Designer</span></p>
                </div>
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