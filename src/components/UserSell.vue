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
                                            <img :src="order.buyer.imgUrl" alt="">
                                        </div>
                                        <h4>{{ order.buyer.fullname }}</h4>
                                    </div>
                                    <div class="gig-col">
                                        <LongText class="long-text" :txt="order.gig.name" />
                                        <!-- <h4>{{ order.gig.name }}</h4> -->
                                    </div>
                                    <div class="due-col">
                                        <h4>code a date(rlly)</h4>
                                    </div>
                                    <div class="price-col">
                                        <h4>$US{{ order.gig.price }}</h4>
                                    </div>
                                    <div class="status-col">
                                        <h4 @click="toggleStatusChange">{{ order.status }}</h4>
                                        <div class="delivery-container">
                                            <form @submit.prevent v-if="toggleStatus" class="delivery-dropdown">
                                                <div class="inputs flex">
                                                    <div class="radio-list">
                                                        <div @click="setStatus('finished', order)" class="radio-item-wrapper">
                                                            <label class="n3bUTho Y7LofzN radio-item">
                                                                <div class="inner-radio">
                                                                    <span>finished</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div @click="setStatus('in progress', order)" class="radio-item-wrapper">
                                                            <label class="n3bUTho Y7LofzN radio-item">
                                                                <div class="inner-radio">
                                                                    <span>in progress</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div @click="setStatus('rejected', order)" class="radio-item-wrapper">
                                                            <label class="n3bUTho Y7LofzN radio-item">
                                                                <div class="inner-radio">
                                                                    <span>rejected</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
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
import LongText from './LongText.vue'
import { orderService } from '../services/order.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
export default {
    name: "UserOrders",
    data() {
        return {
            orders: null,
            ordersLength: 0,
            toggleStatus: false
        }
    },
    async created() {
        // this.orders = await orderService.query()
        this.userOrders
    },
    methods: {
        toggleStatusChange() {
            this.toggleStatus = !this.toggleStatus
        },
        setStatus(status, order){
            order.status = status
            this.updateOrder(order)
        },
        async updateOrder(order) {
            try {
                await this.$store.dispatch({ type: 'updateOrder', order: {...order} })
                showSuccessMsg('Order Updated')
                console.log('got here')
            }
            catch (err) {
                console.log(err, 'order not Updated');
                showErrorMsg('Failed to update')
            }
        },
    },
    computed: {
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        async userOrders() {
            let orders = await orderService.query()
            let newOrders = []
            for (let i = 0; i < orders.length; i++) {
                if (this.loggedinUser._id === orders[i].seller._id) {
                    newOrders.push(orders[i])
                }
            }
            this.orders = newOrders
            this.ordersLength = newOrders.length
            // return newOrders.length
        }
    },
    components: {
        LongText,
    }
}
</script>