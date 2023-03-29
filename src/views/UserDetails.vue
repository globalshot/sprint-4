<template>
    <h3>User Details</h3>

    <h1>{{ fullname }}</h1>
    <div class="add-gig-container flex">
        <button class="btn btn-add">
            <RouterLink to="/edit"><i class="fa-solid fa-plus"></i></RouterLink>
        </button>
        <span>Add gig</span>
    </div>
    <GigIndex />
    <section class="orders">
        {{ orders }}
        {{ buyer }}
        {{ buyerId }}
        <!-- {{ orderGig }} -->
        <!-- {{ orders.gig }} -->
        <!-- {{ orders.gig.name }} -->
    </section>
</template>

<script>
import GigList from '../components/GigList.vue'
import GigIndex from '../views/GigIndex.vue'
import { userService } from '../services/user.service'
export default {
    name: "UserDetails",
    data() {
        return {
            user: null,
            gigs: [],
            // orders: []
        };
    },
    async created() {
        const { id } = this.$route.params;
        this.user = (id) ?
            await userService.getById(id) :
            console.log("Wrong User");
        console.log(this.user);

    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        },
        fullname() {
            if (!this.user) return ''
            return this.user.fullname
        },


        orders() {
            return this.$store.getters.orders
        },
        buyer() {
            if (!this.orders) return ''
            console.log('orders', this.orders);
            return this.orders.buyer
        },
        // buyerId() {
        //     if (!this.orders) return ''
        //     return this.orders.buyer.id
        // }
        buyerId() {
            if (!this.buyer) return ''
            console.log('orders', this.buyer);
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