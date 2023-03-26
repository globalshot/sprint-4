<template>
    <div class="about-seller">
        <h2 class="section-title about-this-seller">About The Seller</h2>
        <div class="profile-card">
            <div class="seller-card">
                <div class="profile-info flex">
                    <div class="user-profile-image flex">
                        <label for="profile-image" class="img-label">
                            <img class="img-user" src="../../assets/images/profile-pic.png" alt="">
                        </label>
                    </div>
                    <div class="user-profile-label flex">
                        <div class="username-line flex">
                            <RouterLink :to="'/user/' + gig.owner._id">{{ gig.owner.fullname }}</RouterLink>
                            <!--add route to his profile-->
                            <div class="status-indicator">
                                <span>
                                    <svg width="4px" height="4px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                                        fill="#1dbf73">
                                        <path
                                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z">
                                        </path>
                                    </svg>
                                </span>
                                <p class="circle-icon">
                                    online
                                </p><!--todo this-->
                            </div>
                        </div>
                        <div class="one-liner flex">
                            <p class="one-liner">Level 3 Seller</p>
                            <div class="stars">
                                <ul class="flex">
                                    <li>
                                        <span class="star" v-for="star in stars">
                                            <i class="fa-solid fa-star"></i>
                                        </span>
                                    </li>
                                    <span>5</span>
                                </ul>
                            </div>
                            <!--v-for for the stars-->
                        </div>
                        <button class="btn-contact-me">Contact Me</button>
                    </div>
                </div>

                <div class="stats-desc">
                    <ul class="user-stats flex">
                        <li class="flex column">
                            <span class="key">From</span>
                            <span class="value">France</span>
                        </li>
                        <li class="flex column">
                            <span class="key">Member since</span>
                            <span class="value">Sep 2020</span>
                        </li>
                        <li class="flex column">
                            <span class="key">Avg. response time</span>
                            <span class="value">1 hour</span>
                        </li>
                        <li class="flex column"><span class="key">Last delivery</span>
                            <span class="value">about 14 hours</span>
                        </li>
                    </ul>
                    <section class="seller-desc">
                        <p>
                            I will translate all translations sent to me within 12 hours. I can translate French to English
                            and English to French. Translations completed by a Bilingual French &amp; English speaker and an
                            experienced translator. I have extensive experience translation all kinds of projects. If you
                            have any questions, please send a message am I will get back to you ass soon as possible. If you
                            have a larger project to do, don't hesitate to get in contact and we can find a solution that
                            works for you. Please send a message so I can send you a custom order.

                        </p>
                        <!-- <button>read more</button> -->
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
</template>

<script>
export default {
    data() {
        return {
            stars: ['', '', '', '', ''],
        }
    },
    props: {
        gig: {
            type: Object,
            required: true
        }
    },
}
</script>