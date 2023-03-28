<template>
    <div class="about-seller">
        <h2 class="section-title about-this-seller">About The Seller</h2>
        <div class="profile-card">
            <div class="seller-card">
                <div class="profile-info flex">
                    <div class="user-profile-image flex">
                        <label for="profile-image" class="img-label">
                            <img class="img-user" :src=gig.owner.imgUrl alt="">
                        </label>
                    </div>
                    <div class="user-profile-label flex">
                        <div class="username-line flex">
                            <RouterLink :to="'/user/' + gig.owner._id">{{ gig.owner.fullname }}</RouterLink>
                        </div>
                        <div class="one-liner flex">
                            <p class="one-liner">Level 3 Seller(still hard coded)</p>
                            <div class="stars">
                                <ul class="flex">
                                    <li v-for="n in gig.owner.rate">
                                            <span class="star">
                                                <i class="fa-solid fa-star"></i>
                                            </span>
                                        </li>
                                    <span>{{ gig.owner.rate }}</span>
                                </ul>
                            </div>
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
                    </section>
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