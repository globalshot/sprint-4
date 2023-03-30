<template>
    <div v-if="user">

        <h3>User Details</h3>

    <h1>{{ this.user.fullname }}</h1>
    <div v-if="this.$route.params.id === userId" class="add-gig-container flex">
        <button class="btn btn-add">
            <RouterLink to="/edit"><i class="fa-solid fa-plus"></i></RouterLink>
        </button>
        <span>Add gig</span>
    </div>
    <GigIndex />
    </div>
</template>

<script>
import GigList from '../components/GigList.vue'
import GigIndex from '../views/GigIndex.vue'
import { userService } from '../services/user.service'
import { orderService } from '../services/order.service'
export default {
    name: "UserDetails",
    data() {
        return {
            user: null,
            orders: null
            //         gigs: []
        }
    },
    async created() {
        console.log(this.$route.params.id)
        console.log(this.userId)

        const { id } = this.$route.params;
        this.user = (id) ?
            await userService.getById(id) :
            console.log("Wrong User")
        this.orders = await orderService.query()

    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        },
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
        }
        // orderGig() {
        //     if (!this.orders) return ''
        //     return this.orders.gig
        // },
        // orderGigName() {
        //     if (!this.orders) return ''
        //     return this.orders.gig.name
        // }
    },
    components: {
        GigList,
        GigIndex
    }
}
</script>