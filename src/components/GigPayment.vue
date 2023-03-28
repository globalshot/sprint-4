<template>
    <section class="main-layout">
        <div class="alert flex" style="display: none;">
            <div class="color-left"></div>
            <section class="alert-content flex align-center"><span>
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#62646a">
                        <path
                            d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z">
                        </path>
                        <path
                            d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z">
                        </path>
                    </svg>
                </span>
                <p></p>
                <button class="close-btn">X</button>
            </section>
        </div>
        <section class="main-header main-layout full">
            <section class="main-layout full"><!---->
                <header class="app-header main-layout full flex align-center">
                    <nav class="flex align-center space-between">
                        <div class="menu-icon"><!---->
                            <div class="line"></div>
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <div class="logo-container"><a href="#/" class="">
                                <div class="logo">
                                    <h1>Higherr</h1>
                                </div>
                            </a></div>
                        <div class="search shown">
                            <div class="header-search flex">
                                <div class="el-input"><!-- input --><!-- prepend slot --><!--v-if-->
                                    <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input
                                            class="el-input__inner" type="text" autocomplete="off" tabindex="0"
                                            placeholder="What service are you looking for today?"
                                            id="el-id-6306-0"><!-- suffix slot --><!--v-if--></div>
                                    <!-- append slot --><!--v-if-->
                                </div><button class="el-button" aria-disabled="false" type="button"><!--v-if--><span
                                        class=""><span><svg width="16" height="16" viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                                <path
                                                    d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z">
                                                </path>
                                            </svg></span></span></button>
                            </div>
                        </div>
                        <div class="nav-links flex align-center"><a href="#/explore" class="btn txt">Explore</a><button
                            class="btn txt">Become a Seller</button><!----><!----><button class="orders btn txt"> Orders
                            <!----></button><!---->
                        <div class="user-img"><!----><img
                                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg"><!---->
                        </div>
                    </div>
                </nav>
            </header>
            <section>
                <div class="search-narrow">
                    <div class="header-search flex">
                        <div class="el-input"><!-- input --><!-- prepend slot --><!--v-if-->
                            <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                    type="text" autocomplete="off" tabindex="0"
                                    placeholder="What service are you looking for today?"
                                    id="el-id-6306-1"><!-- suffix slot --><!--v-if--></div>
                            <!-- append slot --><!--v-if-->
                        </div><button class="el-button" aria-disabled="false" type="button"><!--v-if--><span
                                class=""><span><svg width="16" height="16" viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                                        <path
                                            d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z">
                                        </path>
                                    </svg></span></span></button>
                    </div>
                </div>
            </section>
        </section>
        <section class="categories-list main-layout full">
            <section class="type-tag main-layout full shown">
                <section class="vuper-display">
                    <div class="vueperslides vueperslides--ready vueperslides--fixed-height vueperslides--bullets-outside no-shadow"
                        aria-label="Slideshow" style="height: 40px;"><!---->
                        <div class="vueperslides__inner">
                            <div class="vueperslides__parallax-wrapper" aria-live="polite"
                                style="padding-bottom: 12.5%;">
                                <div class="vueperslides__track">
                                    <div class="vueperslides__track-inner"
                                        style="transition-duration: 600ms; transform: translate3d(0%, 0px, 0px); will-change: auto;">
                                        <div class="vueperslide vueperslide--active vueperslide--visible" href="false"
                                            target="_self" face="false" aria-hidden="false" style="width: 20%;">
                                            <!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore"
                                                    class="">Graphics &amp; Design</a></div><!---->
                                        </div>
                                        <div class="vueperslide vueperslide--visible" href="false" target="_self"
                                            face="false" aria-hidden="false" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore"
                                                    class="">Digital Marketing</a></div><!---->
                                        </div>
                                        <div class="vueperslide vueperslide--visible" href="false" target="_self"
                                            face="false" aria-hidden="false" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore"
                                                    class="">Writing &amp; Translation</a></div><!---->
                                        </div>
                                        <div class="vueperslide vueperslide--visible" href="false" target="_self"
                                            face="false" aria-hidden="false" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore" class="">Video
                                                    &amp; Animation</a></div><!---->
                                        </div>
                                        <div class="vueperslide vueperslide--visible" href="false" target="_self"
                                            face="false" aria-hidden="false" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore" class="">Music
                                                    &amp; Audio</a></div><!---->
                                        </div>
                                        <div class="vueperslide" href="false" target="_self" face="false"
                                            aria-hidden="true" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore"
                                                    class="">Programming &amp; Tech</a></div><!---->
                                        </div>
                                        <div class="vueperslide" href="false" target="_self" face="false"
                                            aria-hidden="true" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore"
                                                    class="">Business</a></div><!---->
                                        </div>
                                        <div class="vueperslide" href="false" target="_self" face="false"
                                            aria-hidden="true" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore"
                                                    class="">Lifestyle</a></div><!---->
                                        </div>
                                        <div class="vueperslide" href="false" target="_self" face="false"
                                            aria-hidden="true" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore"
                                                    class="">Data</a></div><!---->
                                        </div>
                                        <div class="vueperslide" href="false" target="_self" face="false"
                                            aria-hidden="true" style="width: 20%;"><!----><!---->
                                            <div class="vueperslide__content-wrapper"><a href="#/explore"
                                                    class="">Photography</a></div><!---->
                                        </div><!----><!---->
                                    </div>
                                </div>
                            </div><!----><!----><!---->
                            <div class="vueperslides__arrows vueperslides__arrows--outside"><button
                                    class="vueperslides__arrow vueperslides__arrow--prev" type="button"
                                    aria-label="Previous" style="display: none;"><svg viewBox="0 0 9 18">
                                        <path stroke-linecap="round" d="m8 1 l-7 8 7 8"></path>
                                    </svg></button><button class="vueperslides__arrow vueperslides__arrow--next"
                                    type="button" aria-label="Next"><svg viewBox="0 0 9 18">
                                        <path stroke-linecap="round" d="m1 1 l7 8 -7 8"></path>
                                    </svg></button></div><!---->
                        </div>
                        <div class="vueperslides__bullets vueperslides__bullets--outside" role="tablist"
                            aria-label="Slideshow navigation"><button
                                class="vueperslides__bullet vueperslides__bullet--active" type="button" role="tab"
                                aria-label="Slide 1">
                                <div class="default"><span>1</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab" aria-label="Slide 2">
                                <div class="default"><span>2</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab" aria-label="Slide 3">
                                <div class="default"><span>3</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab" aria-label="Slide 4">
                                <div class="default"><span>4</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab" aria-label="Slide 5">
                                <div class="default"><span>5</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab" aria-label="Slide 6">
                                <div class="default"><span>6</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab" aria-label="Slide 7">
                                <div class="default"><span>7</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab" aria-label="Slide 8">
                                <div class="default"><span>8</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab" aria-label="Slide 9">
                                <div class="default"><span>9</span></div>
                            </button><button class="vueperslides__bullet" type="button" role="tab"
                                aria-label="Slide 10">
                                <div class="default"><span>10</span></div>
                            </button></div><!---->
                    </div>
                </section>
                <section>
                    <div class="flex space-between wide-display"><a href="#/explore" class="">Graphics &amp;
                            Design</a><a href="#/explore" class="">Digital Marketing</a><a href="#/explore"
                            class="">Writing &amp; Translation</a><a href="#/explore" class="">Video &amp;
                            Animation</a><a href="#/explore" class="">Music &amp; Audio</a><a href="#/explore"
                            class="">Programming &amp; Tech</a><a href="#/explore" class="">Business</a><a
                            href="#/explore" class="">Lifestyle</a><a href="#/explore" class="">Data</a><a
                            href="#/explore" class="">Photography</a></div>
                </section>
            </section><!----><!---->
        </section>
    </section>
    <main class="app-container main-layout full">
        <section class="gig-payment">
            <section class="payment-container flex">
                <section class="payment-details-container">
                    <h2>Payment Option</h2>
                    <section class="credit-selection flex">
                        <div class="credit-txt">
                            <p>Credit &amp; Debit Cards</p>
                        </div>
                        <div class="visa"><span><!--?xml version="1.0" ?--><svg height="512px"
                                    style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
                                    width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="形状_1_3_" style="enable-background:new    ;">
                                        <g id="形状_1">
                                            <g>
                                                <path
                                                    d="M211.328,184.445l-23.465,144.208h37.542l23.468-144.208     H211.328z M156.276,184.445l-35.794,99.185l-4.234-21.358l0.003,0.007l-0.933-4.787c-4.332-9.336-14.365-27.08-33.31-42.223     c-5.601-4.476-11.247-8.296-16.705-11.559l32.531,124.943h39.116l59.733-144.208H156.276z M302.797,224.48     c0-16.304,36.563-14.209,52.629-5.356l5.357-30.972c0,0-16.534-6.288-33.768-6.288c-18.632,0-62.875,8.148-62.875,47.739     c0,37.26,51.928,37.723,51.928,57.285c0,19.562-46.574,16.066-61.944,3.726l-5.586,32.373c0,0,16.763,8.148,42.382,8.148     c25.616,0,64.272-13.271,64.272-49.37C355.192,244.272,302.797,240.78,302.797,224.48z M455.997,184.445h-30.185     c-13.938,0-17.332,10.747-17.332,10.747l-55.988,133.461h39.131l7.828-21.419h47.728l4.403,21.419h34.472L455.997,184.445z      M410.27,277.641l19.728-53.966l11.098,53.966H410.27z"
                                                    style="fill-rule:evenodd;clip-rule:evenodd;fill:#005BAC;"></path>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="形状_1_2_" style="enable-background:new    ;">
                                        <g id="形状_1_1_">
                                            <g>
                                                <path
                                                    d="M104.132,198.022c0,0-1.554-13.015-18.144-13.015H25.715     l-0.706,2.446c0,0,28.972,5.906,56.767,28.033c26.562,21.148,35.227,47.51,35.227,47.51L104.132,198.022z"
                                                    style="fill-rule:evenodd;clip-rule:evenodd;fill:#F6AC1D;"></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg></span></div>
                    </section>
                    <section class="payment-option">
                        <div class="card-info flex">
                            <div class="card-num-container">
                                <p>Card Number</p><input class="card-num" type="text" value="4580 5926 2262 7546">
                            </div>
                            <div class="shorts-input">
                                <div>
                                    <p>Expiration Date</p><input class="short" type="text" value="12 / 26">
                                </div>
                                <div>
                                    <p>Security Code</p><input class="short" type="text" value="226">
                                </div>
                            </div>
                        </div>
                        <div class="name-inputs flex">
                            <div>
                                <p>First Name</p><input class="name-input" type="text">
                            </div>
                            <div>
                                <p>Last Name</p><input class="name-input" type="text">
                            </div>
                        </div>
                    </section>
                </section>
                <section class="package-container">
                    <section class="gig-package-payment">
                        <section class="package-content">
                            <section class="header flex space-between">
                                <div class="img-container"><img
                                        src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217276086/original/6a004b8b82868ab02836bdfcb42c4a0e4b042f87.png">
                                </div>
                                <p class="title">I will provide quality essays research and summaries on any topic</p>
                            </section>
                            <h3 class="price">US$67</h3>
                            <p> 1 custom logo+high resolution file+3d mockup+logo transparency+ 300dpi </p>
                            <ul class="features clean-list">
                                <li class="regular">
                                    <div class="v-svg-container"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                                xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                <path
                                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                                </path>
                                            </svg></span></div> 1 concept included
                                </li>
                                <li class="regular">
                                    <div class="v-svg-container"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                                xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                <path
                                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                                </path>
                                            </svg></span></div> Logo transparency
                                </li>
                                <li class="regular">
                                    <div class="v-svg-container"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                                xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                <path
                                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                                </path>
                                            </svg></span></div> Printable file
                                </li>
                                <li class="regular">
                                    <div class="v-svg-container"><span><svg width="16" height="16" viewBox="0 0 11 9"
                                                xmlns="http://www.w3.org/2000/svg" fill="#1dbf73">
                                                <path
                                                    d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                                                </path>
                                            </svg></span></div> Include 3D mockup
                                </li>
                            </ul>
                            <div class="pricing">
                                <p>Service Fee</p>
                                <p>US$10.05</p>
                            </div>
                            <div class="pricing">
                                <p>VAT</p>
                                <p>US$9.74</p>
                            </div>
                            <div class="pricing total">
                                <p>Total</p>
                                <p>US$88.44</p>
                            </div>
                            <div class="pricing">
                                <p class="bold">Delivery Time</p>
                                <p>1 Days</p>
                            </div><button class="continue-btn">Confirm And Pay</button>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    </main>
    <section class="app-footer main-layout full">
        <div class="content-container flex align-center space-between">
            <div class="title"><span class="logo">Higherr</span><small class="copy-rights">© Higherr International Ltd.
                    2022</small></div>
            <div class="social-links flex space-between">
                <div><a><svg width="20" height="17" viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#62646a">
                                <path
                                    d="M20 1.875C19.25 2.25 18.5 2.375 17.625 2.5C18.5 2 19.125 1.25 19.375 0.25C18.625 0.75 17.75 1 16.75 1.25C16 0.5 14.875 0 13.75 0C11.625 0 9.75 1.875 9.75 4.125C9.75 4.5 9.75 4.75 9.875 5C6.5 4.875 3.375 3.25 1.375 0.75C1 1.375 0.875 2 0.875 2.875C0.875 4.25 1.625 5.5 2.75 6.25C2.125 6.25 1.5 6 0.875 5.75C0.875 7.75 2.25 9.375 4.125 9.75C3.75 9.875 3.375 9.875 3 9.875C2.75 9.875 2.5 9.875 2.25 9.75C2.75 11.375 4.25 12.625 6.125 12.625C4.75 13.75 3 14.375 1 14.375C0.625 14.375 0.375 14.375 0 14.375C1.875 15.5 4 16.25 6.25 16.25C13.75 16.25 17.875 10 17.875 4.625C17.875 4.5 17.875 4.25 17.875 4.125C18.75 3.5 19.5 2.75 20 1.875Z">
                                </path>
                            </g>
                        </svg></a></div>
                <div><a><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#62646a">
                                <path
                                    d="M20 10.0022C20.0004 8.09104 19.4532 6.2198 18.4231 4.61003C17.393 3.00026 15.9232 1.71938 14.1877 0.919062C12.4522 0.118741 10.5237 -0.167503 8.63053 0.0942223C6.73739 0.355948 4.9589 1.15468 3.50564 2.39585C2.05237 3.63701 0.985206 5.26863 0.430495 7.0975C-0.124217 8.92636 -0.143239 10.8759 0.37568 12.7152C0.894599 14.5546 1.92973 16.2067 3.35849 17.476C4.78726 18.7453 6.54983 19.5786 8.4375 19.8772V12.8922H5.89875V10.0022H8.4375V7.79843C8.38284 7.28399 8.44199 6.76382 8.61078 6.2748C8.77957 5.78577 9.05386 5.33986 9.4142 4.96866C9.77455 4.59746 10.2121 4.31007 10.6959 4.12684C11.1797 3.94362 11.6979 3.86905 12.2137 3.90843C12.9638 3.91828 13.7121 3.98346 14.4525 4.10343V6.56718H13.1925C12.9779 6.53911 12.7597 6.55967 12.554 6.62733C12.3484 6.69498 12.1607 6.80801 12.0046 6.95804C11.8486 7.10807 11.7283 7.29127 11.6526 7.49408C11.577 7.69689 11.5479 7.91411 11.5675 8.12968V10.0047H14.3412L13.8975 12.8947H11.5625V19.8834C13.9153 19.5112 16.058 18.3114 17.6048 16.4999C19.1516 14.6884 20.001 12.3842 20 10.0022Z">
                                </path>
                            </g>
                        </svg></a></div>
                <div><a><svg width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#62646a">
                                <path
                                    d="M19.125 0H0.875C0.375 0 0 0.375 0 0.875V19.25C0 19.625 0.375 20 0.875 20H19.25C19.75 20 20.125 19.625 20.125 19.125V0.875C20 0.375 19.625 0 19.125 0ZM5.875 17H3V7.5H6V17H5.875ZM4.5 6.25C3.5 6.25 2.75 5.375 2.75 4.5C2.75 3.5 3.5 2.75 4.5 2.75C5.5 2.75 6.25 3.5 6.25 4.5C6.125 5.375 5.375 6.25 4.5 6.25ZM17 17H14V12.375C14 11.25 14 9.875 12.5 9.875C11 9.875 10.75 11.125 10.75 12.375V17.125H7.75V7.5H10.625V8.75C11 8 12 7.25 13.375 7.25C16.375 7.25 16.875 9.25 16.875 11.75V17H17Z">
                                </path>
                            </g>
                        </svg></a></div>
                <div><a><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#62646a">
                                <path
                                    d="M10 0C4.5 0 0 4.5 0 10C0 14.25 2.625 17.875 6.375 19.25C6.25 18.5 6.25 17.25 6.375 16.375C6.5 15.625 7.5 11.375 7.5 11.375C7.5 11.375 7.25 10.875 7.25 10C7.25 8.625 8.125 7.5 9.125 7.5C10 7.5 10.375 8.125 10.375 8.875C10.375 9.75 9.875 11 9.5 12.25C9.25 13.25 10 14 11 14C12.75 14 14.125 12.125 14.125 9.375C14.125 7 12.375 5.25 10 5.25C7.125 5.25 5.5 7.375 5.5 9.625C5.5 10.5 5.875 11.375 6.25 11.875C6.25 12.125 6.25 12.25 6.25 12.375C6.125 12.75 6 13.375 6 13.5C6 13.625 5.875 13.75 5.625 13.625C4.375 13 3.625 11.25 3.625 9.75C3.625 6.625 5.875 3.75 10.25 3.75C13.75 3.75 16.375 6.25 16.375 9.5C16.375 13 14.25 15.75 11.125 15.75C10.125 15.75 9.125 15.25 8.875 14.625C8.875 14.625 8.375 16.5 8.25 17C8 17.875 7.375 19 7 19.625C8 19.875 9 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0Z">
                                </path>
                            </g>
                        </svg></a></div>
                <div><a><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#62646a">
                                <path
                                    d="M15.1814 6.06504C15.8442 6.06504 16.3814 5.52778 16.3814 4.86504C16.3814 4.2023 15.8442 3.66504 15.1814 3.66504C14.5187 3.66504 13.9814 4.2023 13.9814 4.86504C13.9814 5.52778 14.5187 6.06504 15.1814 6.06504Z">
                                </path>
                                <path
                                    d="M10 15C7.2425 15 5 12.7575 5 10C5 7.2425 7.2425 5 10 5C12.7575 5 15 7.2425 15 10C15 12.7575 12.7575 15 10 15ZM10 7.5C8.62125 7.5 7.5 8.62125 7.5 10C7.5 11.3787 8.62125 12.5 10 12.5C11.3787 12.5 12.5 11.3787 12.5 10C12.5 8.62125 11.3787 7.5 10 7.5Z">
                                </path>
                                <path
                                    d="M15 20H5C2.43 20 0 17.57 0 15V5C0 2.43 2.43 0 5 0H15C17.57 0 20 2.43 20 5V15C20 17.57 17.57 20 15 20ZM5 2.5C3.83125 2.5 2.5 3.83125 2.5 5V15C2.5 16.1912 3.80875 17.5 5 17.5H15C16.1688 17.5 17.5 16.1688 17.5 15V5C17.5 3.83125 16.1688 2.5 15 2.5H5Z">
                                </path>
                            </g>
                        </svg></a></div>
            </div>
        </div>
    </section>
</section></template>

<script>
import { gigService } from './../services/gig.service'
export default {
    // props: {
    //     gig: {
    //         type: Object,
    //         required: true
    //     }
    // },
    data() {
        return {
            gig: {}
        }
    },
    created() {
        console.log(this.gig);
        this.getGig()
    },
    methods: {
        getGig() {
            console.log(this.$route.params);
            const { id } = this.$route.params;
            console.log(id);
            gigService.getById(id)
                .then(gig => {
                    console.log('gig', gig);
                    this.gig = gig;
                })
        },
    }

}
</script>