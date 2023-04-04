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
                                    <h4>Seller</h4>
                                </div>
                                <div class="gig-col">
                                    <h4>Gig</h4>
                                </div>
                                <div class="due-col">
                                    <h4>Order Date</h4>
                                </div>
                                <div class="price-col">
                                    <h4>Price</h4>
                                </div>
                                <div class="status-col">
                                    <h4>Status</h4>
                                </div>
                            </div>
                            <section v-for="order in userOrders">
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
                                        <h4>{{ convertDate(order.gig.deadLine) }}</h4>
                                    </div>
                                    <div class="price-col">
                                        <h4>US${{ order.gig.price }}</h4>
                                    </div>
                                    <div class="status-col">
                                        <h4 :class="statusClassObject(order.status)">
                                            {{ order.status }}</h4>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <!-- <pre>{{ orders }}</pre> -->
                    </div>
                    <div class="no-order" v-else>
                        <h4>no orders</h4>
                        <span class="clickable" @click="this.$router.push({ path: '/gig/' })">Make your first purchase
                            here</span>
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
            // orders: null,
            ordersLength: 0
        }
    },
    async created() {
        // this.orders = await orderService.query()
        this.userOrders
        
    },
    methods: {
        statusClassObject(status) {//to continue for 2 others too
            return {
                finished: status === 'Finished' ? true : false,
                rejected: status === 'Rejected' ? true : false,
                waiting: status === 'In progress' ? true : false
            }
        },
        convertDate(deadline) {
            const date = new Date(deadline);
            const day = date.getDate()
            const month = date.getMonth() + 1
            const year = date.getFullYear()
            return `${day}/${month}/${year}`
        },
    },

    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        orders() {
            return this.$store.getters.userOrders
        },
        userOrders() {
            let newOrders = this.orders.filter((order) => {
                return this.loggedinUser._id === order.buyer._id
            })
            console.log('this: ', this.orders);
            // for (let i = 0; i < this.orders.length; i++) {
            //     if (this.loggedinUser._id === this.orders[i].seller._id) {
            //         newOrders.push(this.orders[i])
            //     }
            // }
            this.ordersLength = newOrders.length
            return newOrders
            // return newOrders.length
        },

        // async userOrders() {
        //     let orders = await orderService.query()
        //     let newOrders = []
        //     for (let i = 0; i < orders.length; i++) {
        //         if (this.loggedinUser._id === orders[i].buyer._id) {
        //             newOrders.push(orders[i])
        //         }
        //     }
        //     this.orders = newOrders
        //     this.ordersLength = newOrders.length
        //     // return newOrders.length
        // }
    },
    components: {
        LongText
    }
}
</script>