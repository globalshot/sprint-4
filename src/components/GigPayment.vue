<template>
    <h1>{{ this.gig._id }}</h1>
    <div>
        <div>
            
        </div>
        <div>
            <div>

                <!-- <img src={{ gig.imgUrl[0] }} alt=""> -->
            </div>
            <div>
                {{ gig.description }}
            </div>
        </div>
    </div>
</template>

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