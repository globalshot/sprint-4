<template>
    <div class="gig-overview">
        <nav>
            <ul><!--v-for loop, for each category of smth-->
                <li>category</li>
                <li>sub category</li>
            </ul>
        </nav>
        <h1 class="text-display-3">{{ gig.title }}</h1><!--size suppose to be 28px-->


        <div class="seller-overview">
            <div class="flex">
                <div class="seller-photo">img</div>
                <div class="seller-stats"><!--idk if to call it stats-->
                    <RouterLink to="/">{{ gig.owner.fullname }}</RouterLink><!--when we will have users-->
                    <span>{{ gig.owner.level }}</span> |
                    <span class="color-yellow">
                        <span><!--v-for for the mount of stars--></span>
                        {{ gig.owner.rate }}
                        <span class="rating-count"></span>
                    </span>
                    <div class="img-container">
                        <img src="../../assets/images/demo-img.png" alt="">
                        <span>HEYY</span>
                    </div>
                    <span>(number) orders in queue</span><!--less bold color-->
                </div>
            </div>
        </div>
        <div class="loyalty-and-noteable-clients">loyalty placeholder</div><!--missing padding and margin-->
    </div>
</template>

<script>
import { gigService } from '../../services/gig.service.js'

export default {
    data() {
        return {
            gig: null,
        }
    },

    created() {

        this.getGig()
    },
    methods: {
        getGig() {
            const { id } = this.$route.params;
            console.log(this.$route);
            gigService.getById(id)
                .then(gig => {
                    this.gig = gig;
                    console.log('gig', gig);
                })
        }
    },

}
</script>