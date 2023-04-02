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
                                    <h4>Buyer</h4>
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
                                        <h4 @click="toggleStatusChange(order._id)" :class="statusClassObject(order.status)" class="clickable">
                                        {{order.status }}</h4>
                                        <div class="delivery-container">
                                            <form @submit.prevent v-if="toggleStatus && selectedOrderId === order._id" class="delivery-dropdown">
                                                <div class="inputs flex">
                                                    <div class="radio-list">
                                                        <div @click="setStatus('Finished', order)"
                                                            class="radio-item-wrapper">
                                                            <label class="n3bUTho Y7LofzN radio-item">
                                                                <div class="inner-radio">
                                                                    <span>Finished</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div @click="setStatus('In progress', order)"
                                                            class="radio-item-wrapper">
                                                            <label class="n3bUTho Y7LofzN radio-item">
                                                                <div class="inner-radio">
                                                                    <span>In progress</span>
                                                                </div>
                                                            </label>
                                                        </div>
                                                        <div @click="setStatus('Rejected', order)"
                                                            class="radio-item-wrapper">
                                                            <label class="n3bUTho Y7LofzN radio-item">
                                                                <div class="inner-radio">
                                                                    <span>Rejected</span>
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
                        <h4>No orders</h4>
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
import { socketService } from '../services/socket.service'
export default {
    name: "UserOrders",
    data() {
        return {
            orders: null,
            ordersLength: 0,
            toggleStatus: false,
            selectedOrderId: '',
        }
    },
    async created() {
        // this.orders = await orderService.query()
        this.userOrders
    },
    methods: {
        toggleStatusChange(id) {
            this.toggleStatus = !this.toggleStatus
            this.selectedOrderId = id
        },
        setStatus(status, order) {
            order.status = status
            this.toggleStatusChange()
            this.updateOrder(order)
            socketService.emit(`change-order-status`, order.buyer)
        },
        async updateOrder(order) {
            try {
                await this.$store.dispatch({ type: 'updateOrder', order: { ...order } })
                showSuccessMsg('Order Updated')
            }
            catch (err) {
                showErrorMsg('Failed to update')
            }
        },
        statusClassObject(status) {//to continue for 2 others too
            return {
                finished: status === 'Finished'? true : false,
                rejected: status === 'Rejected'? true : false,
                waiting: status === 'In progress'? true : false
            }
        }
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
        },
        
    },
    components: {
        LongText,
    }
}
</script>