<template>
    <li class="gig-preview" >
        <!-- <pre>{{toy}}</pre> -->
        <RouterLink class="btn" :to="'/gig/' + gig._id">

            <img class="carousel-imgs" src="../assets/images/demo-img.png" alt="">
            <div class="user-profile flex">
                <img src="../assets/images/profile-pic.png" alt="">
                <p class="user-name">{{ gig.owner.fullname }}</p>
            </div>
            <div class="title">
                <h2>{{ gig.title }}</h2>
            </div>
            <div class="rating grid">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" width="15" height="15"><path fill="currentColor" d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                5.0
            </div>
            <div class="price-container">
                <h4>STARTING AT <span class="price">US${{ gig.price }}</span>  </h4>
            </div>

        </RouterLink> 
    </li>
</template>

<script>
export default {
    name: 'GigPreview',
    props: {
        gig: Object,
    },
}
</script>