
<template>
    <div v-if="user" class="flex justify-between dashboard">
        <div class="user-stats"><!--user details-->
            <div class="user-info">

                <div class="img-container">
                    <img :src=user.imgUrl alt="">
                </div>
                <h2>{{ user.fullname }}</h2>
                <div class="profile">
                    <ul>
                        <li class="flex space-between">
                            <div>
                                <span>
                                    <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"
                                        fill="#62646a">
                                        <g clip-path="url(#clip0)">
                                            <path
                                                d="M5.38338 15.6772C0.842813 9.09472 0 8.41916 0 6C0 2.68628 2.68628 0 6 0C9.31372 0 12 2.68628 12 6C12 8.41916 11.1572 9.09472 6.61662 15.6772C6.31866 16.1076 5.68131 16.1076 5.38338 15.6772ZM6 8.5C7.38072 8.5 8.5 7.38072 8.5 6C8.5 4.61928 7.38072 3.5 6 3.5C4.61928 3.5 3.5 4.61928 3.5 6C3.5 7.38072 4.61928 8.5 6 8.5Z">
                                            </path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="12" height="16"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg></span>Country
                            </div>
                            <span>{{ user.information.country }}</span>
                        </li>
                        <li class="flex space-between">
                            <div>
                                <span>
                                    <svg width="14" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"
                                        fill="#62646a">
                                        <path
                                            d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.8 9H9.27812C8.58437 9.31875 7.8125 9.5 7 9.5C6.1875 9.5 5.41875 9.31875 4.72188 9H4.2C1.88125 9 0 10.8813 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.8813 12.1187 9 9.8 9Z">
                                        </path>
                                    </svg>
                                </span>Member Since
                            </div>
                            <span>June 2018</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="description-container">
                <ul>
                    <li>
                        <h3>Description</h3>
                        <p>{{ user.description }}</p>
                    </li>
                </ul>
            </div>

        </div>

        <div><!--the side of selling-->

            <div><!--user gigs he sell-->
                <div v-if="this.$route.params.id === userId" class="add-gig-container flex">
                        <h2>Your Gigs</h2>
                    <UserGigs :gigs="gigs" :user="loggedinUser"></UserGigs>
                </div>
                <div v-else class="add-gig-container flex">
                        <h2>{{ user.fullname }} Gigs</h2>
                    <UserGigs :gigs="gigs" :user="user"></UserGigs>//not working yet
                </div>
            </div>

            <div class="user-orders"><!--user orders people bought-->
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

        try {

            const { id } = this.$route.params
            this.user = (id) ?
                await userService.getById(id) : null
            this.orders = await orderService.query()
            this.gigs = await gigService.query({ owner: this.loggedinUser._id })
        }
        catch (err) {
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
        country() {
            if (!this.loggedinUser) return ''
            return this.loggedinUser.country
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