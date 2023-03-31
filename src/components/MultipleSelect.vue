<template>
    <div class="btns-filter flex">

        <!-- <RouterLink class="c-btn" to="/edit">Add</RouterLink> -->
        <button @click="clearFilter" class="clear-filter-btn " style="font-size: 16px; color: rgb(34, 35, 37);">
            <div class="word">Clear Filter</div>
        </button>

        <div class="price-container">
            <button @click="showPriceForm" class="price-filter-btn flex" style="font-size: 16px; color: rgb(34, 35, 37);">
                <div class="word">budget</div>
                <svg class="filter-arrow" width="10" height="10" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill">
                    <path
                        d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                    </path>
                </svg>
            </button>
            <form @submit.prevent v-if="showPrice" class="price-dropdown">
                <div class="inputs flex">
                    <div>
                        <p class="bold">MIN.</p>
                        <div class="input-container flex">
                            <input v-model="filterBy.price.min" placeholder="Any">
                            <div class="icon-container">
                                <i>$</i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="bold">MAX.</p>
                        <div class="input-container flex">
                            <input v-model="filterBy.price.max" placeholder="Any">
                            <div class="icon-container last">
                                <i>$</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons flex">
                    <div @click="clearPrice">Clear All</div>
                    <button type="button" @click="setPrice()" class="btn-apply">Apply</button>
                </div>
            </form>
        </div>

        <div class="delivery-container">
            <button class="delivery-filter-btn flex" @click="showDeliveryForm"
                style="font-size: 16px; color: rgb(34, 35, 37);">
                <div class="word">Delivery Time</div>
                <svg class="filter-arrow" width="10" height="10" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill">
                    <path
                        d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                    </path>
                </svg>
            </button>
            <form @submit.prevent v-if="showDelivery" class="delivery-dropdown">
                <div class="inputs flex">
                    <div class="radio-list">
                        <div @click="setDeliveryTime(1)" class="radio-item-wrapper">
                            <label class="n3bUTho Y7LofzN radio-item">
                                <div class="inner-radio">
                                    <span>Express 24H</span>
                                </div>
                            </label>
                        </div>
                        <div @click="setDeliveryTime(3)" class="radio-item-wrapper">
                            <label class="n3bUTho Y7LofzN radio-item">
                                <div class="inner-radio">
                                    <span>Up to 3 days</span>
                                </div>
                            </label>
                        </div>
                        <div @click="setDeliveryTime(7)" class="radio-item-wrapper">
                            <label class="n3bUTho Y7LofzN radio-item">
                                <div class="inner-radio">
                                    <span>Up to 7 days</span>
                                </div>
                            </label>
                        </div>
                        <div @click="setDeliveryTime(999)" class="radio-item-wrapper">
                            <label class="radio-item selected felx">
                                <div class="inner-radio">
                                    <span>Anytime</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <!-- <div>
                        <p class="bold">MAX.</p>
                        <div class="input-container flex">
                            <input v-model="filterBy.price.max" placeholder="Any">
                            <div class="icon-container last">
                                <i>$</i>
                            </div>
                        </div>
                    </div> -->
                </div>
                <div class="buttons flex">
                    <div @click="clearPrice">Clear All</div>
                    <button @click="filter()" class="btn-apply">Apply</button>
                </div>
            </form>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'
export default {
    data() {
        return {
            filterBy: {
                price: {
                    min: null,
                    max: null,
                },
                sortBy: {
                    price: false
                },
                daysToMake: 999


            },
            showPrice: false,
            showDelivery: false,
            value1: ref([]),
            value2: ref([]),
            value3: ref([]),
            value4: ref([]),
            options: [
                {
                    value: 1,
                    label: 'Express 24H',
                },
                {
                    value: 3,
                    label: 'Up to 3 days',
                },
                {
                    value: 7,
                    label: 'Up to 7 days',
                },
                {
                    value: 999,
                    label: 'anytime',
                },
            ]
        }
    },
    methods: {
        showPriceForm() {
            if (this.showDelivery) {this.showDeliveryForm()}
            this.showPrice = !this.showPrice
        },
        showDeliveryForm() {
            if (this.showPrice) {this.showPriceForm()}
            this.showDelivery = !this.showDelivery
        },
        filter() {
            if (!this.filterBy.price.min && this.filterBy.price.max) {
                this.filterBy.price.min = 0
            }
            if (!this.filterBy.price.max && this.filterBy.price.min) {
                this.filterBy.price.max = 1000
            }
            let { txt, tag } = this.$route.query
            this.filterBy.txt =  txt
            this.filterBy.tag =  tag
            let filterBy = { ...this.filterBy }
            this.$store.dispatch({ type: 'loadGigs', filterBy })
            // this.showPriceForm()
        },
        clearFilter() {
            if (this.showDelivery) {this.showDeliveryForm()}
            if (this.showPrice) {this.showPriceForm()}
            this.filterBy.price.min = null
            this.filterBy.price.max = null
            this.filterBy.daysToMake = 999
            let filterBy = { ...this.filterBy }
            this.$store.dispatch({ type: 'loadGigs', filterBy })
        },
        clearPrice() {
            this.filterBy.price.min = null
            this.filterBy.price.max = null
        },
        setDeliveryTime(timeValue) {
            this.filterBy.daysToMake = timeValue
            this.filter()
            this.showDeliveryForm()
        },
        setPrice() {
            this.filter()
            this.showPriceForm()
        }
    }
}
</script>