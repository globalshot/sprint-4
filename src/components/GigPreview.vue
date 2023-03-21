<template>
    <li class="gig-preview">
        <!-- <pre>{{toy}}</pre> -->
        <h2>{{ gig.title }}</h2>
        <h4>Price: ${{ gig.price }} </h4>
        <RouterLink class="btn" :to="'/gig/' + gig._id">Details</RouterLink> 
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