<template>
    <li class="gig-preview" >
        <!-- <pre>{{toy}}</pre> -->
        <RouterLink class="btn" :to="'/gig/' + gig._id">

            <img src="../assets/images/demo-img.png" alt="">
            <div class="user-preview">user name + use pic</div>
            <div class="title">
                <h2>{{ gig.title }}</h2>
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