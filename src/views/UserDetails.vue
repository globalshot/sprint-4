<template>
    <div v-if="user" class="flex justify-between dashboard">
        <div class="user-stats"><!--user details--><!--make like 2 pages, 1 for stats, and 1 info-->
            <h3>User Details</h3>
            <h1>whyyyyyy soooo short, Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>

            <h1>{{ this.user.fullname }}</h1>
        </div>

        <div class="gigs-status"><!--the side of selling--><!--2 pages, what you buy and what you sell, with orders in both ofc-->

            <div><!--user gigs he sell-->
                <div v-if="this.$route.params.id === userId" class="add-gig-container flex">
                    
                    <UserGigs :gigs="gigs" :user="loggedinUser"></UserGigs>
                </div>
            </div>

            <div><!--user orders people bought-->
                <UserSell></UserSell>
            </div>
        </div>

    </div>
</template>

<script>
import UserGigs from '../components/UserGigs.vue'
import UserSell from '../components/UserSell.vue'
import { userService } from '../services/user.service'
import { orderService } from '../services/order.service'
import { gigService } from '../services/gig.service'

export default {
    name: "UserDetails",
    data() {
        return {
            user: null,
            orders: null,
            gigs: null
        }
    },
    methods: {
    },
    async created() {

        try{

            const { id } = this.$route.params
            this.user = (id) ?
            await userService.getById(id) : null
            this.orders = await orderService.query()
            this.gigs = await gigService.query({owner: this.loggedinUser._id})
    }
    catch(err){
        console.log(err);
    }
    // const { owner } = this.loggedinUser
    //   let filterBy = { owner: owner }
    //   this.$store.dispatch({ type: 'loadGigs', filterBy })

    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        userId() {
            if (!this.loggedinUser) return ''
            return this.loggedinUser._id
        },
        fullname() {
            if (!this.loggedinUser) return ''
            return this.loggedinUser.fullname
        },
        // buyerId() {
        //     if (!this.orders) return ''
        //     return this.orders.buyer.id
        // }
        buyerId() {
            if (!this.buyer) return ''
            console.log('orders', this.buyer)
            return this.buyer.id
        },
        orderGig() {//returns all the orders
            if (!this.orders) return ''
            return this.orders.gig
        },
        // orderGigName() {
        //     if (!this.orders) return ''
        //     return this.orders.gig.name
        // }
    },
    components: {
        UserGigs,
        UserSell
    }
}
</script>