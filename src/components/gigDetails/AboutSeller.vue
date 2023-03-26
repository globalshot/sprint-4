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