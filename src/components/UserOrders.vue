<template>
    <div v-if="orders.length" v-for="order in orders">
        <div class="flex" v-if="loggedinUser._id === order.buyer._id">
            <h4>{{ order.gig.name }}</h4>
            <h4>{{ order.status }}</h4>
            <!-- <h2>{{ orders }}</h2> -->
    
        </div>
    </div>
    <div v-else>
        <h4>no orders</h4>

    </div>
</template>

<script>
import { orderService } from '../services/order.service'
export default {
    name: "UserOrders",
    data() {
        return {
            orders: null
        }
    },
    async created() {
        // this.orders = await orderService.query()
        this.userOrders()
    },

    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        async userOrders() {
            let orders = await orderService.query()
            console.log(orders)
            let newOrders = []
            for (let i=0; i<orders.length; i++){
                if(this.loggedinUser._id === orders[i].buyer._id) {
                    newOrders.push(orders[i])
                }
            }
            console.log(newOrders)
            this.orders = newOrders
        }
    }
}
</script>