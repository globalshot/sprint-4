<template>
    <div class="inputs flex">
        <div class="order-list">
            <!-- <div class="order-item-wrapper" v-if="ordersLength" v-for="order in orders"> -->
            <label class="order-item">
                <div class="inner-order">
                    <div class="flex" v-if="ordersLength">
                        <div class="order-table">
                            <div class="table-header flex justify-between">
                                <div class="buyer-col">
                                    <h4>buyer</h4>
                                </div>
                                <div class="gig-col">
                                    <h4>gig</h4>
                                </div>
                                <div class="due-col">
                                    <h4>Order Date</h4>
                                </div>
                                <div class="price-col">
                                    <h4>price</h4>
                                </div>
                                <div class="status-col">
                                    <h4>status</h4>
                                </div>
                            </div>
                            <section v-for="order in orders">
                                <div class="table-entity flex justify-between">
                                    <div class="buyer-col flex">
                                        <div class="img-container">
                                            <img :src="order.seller.imgUrl" alt="">
                                        </div>
                                        <h4>{{ order.seller.fullname }}</h4>
                                    </div>
                                    <div class="gig-col">
                                        <LongText class="long-text" :txt="order.gig.name" />
                                    </div>
                                    <div class="due-col">
                                        <h4>{{ order.gig.date }}</h4>
                                    </div>
                                    <div class="price-col">
                                        <h4>$US{{ order.gig.price }}</h4>
                                    </div>
                                    <div class="status-col">
                                        <h4>{{ order.status }}</h4>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <!-- <pre>{{ orders }}</pre> -->
                    </div>
                    <div v-else>
                        <h4>no orders</h4>
                    </div>
                </div>
            </label>
            <!-- </div> -->

        </div>
    </div>
</template>

<script>
import { orderService } from '../services/order.service'
import LongText from './LongText.vue'
export default {
    name: "UserOrders",
    data() {
        return {
            orders: null,
            ordersLength: 0
        }
    },
    async created() {
        // this.orders = await orderService.query()
        this.userOrders
    },

    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        async userOrders() {
            let orders = await orderService.query()
            let newOrders = []
            for (let i = 0; i < orders.length; i++) {
                if (this.loggedinUser._id === orders[i].buyer._id) {
                    newOrders.push(orders[i])
                }
            }
            console.log(newOrders)
            this.orders = newOrders
            this.ordersLength = newOrders.length
            // return newOrders.length
        }
    },
    components: {
        LongText
    }
}
</script>