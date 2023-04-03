<template>
    <section class="reviews-stat flex column">
        <section class="stat-header flex align-center">
            <h2>{{ gig.reviewsCount }} Reviews </h2>
            <section class="reviews-rate flex">
                <ul class="stars clean-list flex">
                    <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1792 1792" width="15" height="15">
                                <path
                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg></span></li>
                    <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1792 1792" width="15" height="15">
                                <path
                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg></span></li>
                    <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1792 1792" width="15" height="15">
                                <path
                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg></span></li>
                    <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1792 1792" width="15" height="15">
                                <path
                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg></span></li>
                    <li><span class="flex justify-center align-center"><svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1792 1792" width="15" height="15">
                                <path
                                    d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                </path>
                            </svg></span></li>
                </ul>
                <p class="rating-score">{{ gig.owner.rate }}</p>
            </section>
        </section>
        <section class="stat-main flex">
            <section class="stars-counters">
                <ul v-if="gigReviewsData" class="clean-list flex column">
                    <li class="flex align-center"><span class="key">5 Stars</span>
                        <section class="progress-container flex align-center"><progress max="369" value="362"></progress><span class="star-num">{{ Math.round(gig.reviewsCount *
                                    gig.owner.rate / 5) }}</span></section>
                    </li>
                    <li class="flex align-center"><span class="key">4 Stars</span>
                        <section class="progress-container flex align-center"><progress max="369" value="6"></progress><span
                                class="star-num">{{ Math.round((gig.reviewsCount - (gig.reviewsCount * gig.owner.rate) / 5)
                                    * 0.75) }}</span></section>
                    </li>
                    <li class="flex align-center"><span class="key">3 Stars</span>
                        <section class="progress-container flex align-center"><progress max="369" value="1"></progress><span
                                class="star-num">{{ Math.round((gig.reviewsCount - (gig.reviewsCount * gig.owner.rate) / 5)
                                    * 0.12) }}</span></section>
                    </li>
                    <li class="flex align-center"><span class="key">2 Stars</span>
                        <section class="progress-container flex align-center"><progress max="369" value="0"></progress><span
                                class="star-num">{{ Math.floor((gig.reviewsCount - (gig.reviewsCount * gig.owner.rate) / 5)
                                    * 0.08) }}</span></section>
                    </li>
                    <li class="flex align-center"><span class="key">1 Star</span>
                        <section class="progress-container flex align-center"><progress max="369" value="0"></progress><span
                                class="star-num">{{ Math.round((gig.reviewsCount - (gig.reviewsCount * gig.owner.rate) / 5)
                                    * 0.05) }}</span></section>
                    </li>
                </ul>
            </section>
            <section class="ranking flex column">
                <h6>Rating Breakdown</h6>
                <ul class="clean-list flex column">
                    <li class="flex align-center space-between">
                        <span class="key">Seller communication level</span>
                        <section class="star-container flex align-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                    <path
                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                    </path>
                                </svg>
                            </span>
                            <span class="value">5.0</span>
                        </section>
                    </li>
                    <li class="flex align-center space-between"><span class="key">Recommend to a friend</span>
                        <section class="star-container flex align-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                    <path
                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                    </path>
                                </svg>
                            </span>
                            <span class="value">4.9</span>
                        </section>
                    </li>
                    <li class="flex align-center space-between">
                        <span class="key">Service as described</span>
                        <section class="star-container flex align-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15">
                                    <path
                                        d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                                    </path>
                                </svg>
                            </span>
                            <span class="value">5.0</span>
                        </section>
                    </li>
                </ul>
            </section>
        </section>
    </section>
</template>

<script>
export default {
    props: {

        gig: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            gigReviewsData: {
                totalReviews: this.gig.reviewsCount
            }
        }
    }
}
</script>