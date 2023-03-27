<template>
    <div class="btns-filter flex">

        <!-- <RouterLink class="c-btn" to="/edit">Add</RouterLink> -->
        <button @click="clearFilter" class="clear-filter-btn " style="font-size: 16px; color: rgb(34, 35, 37);">
            <div class="word">Clear Filter</div>
        </button>

        <div class="budget-container">
            <button @click="showBudgetForm" class="budget-filter-btn flex" style="font-size: 16px; color: rgb(34, 35, 37);">
                <div class="word">Budget</div>
                <svg class="filter-arrow" width="10" height="10" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill">
                    <path
                        d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                    </path>
                </svg>
            </button>
            <form @submit.prevent v-if="showBudget" class="budget-dropdown">
                <div class="inputs flex">
                    <div>
                        <p class="bold">MIN.</p>
                        <div class="input-container flex">
                            <input v-model="filterBy.budget.min" placeholder="Any">
                            <div class="icon-container">
                                <i>$</i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p class="bold">MAX.</p>
                        <div class="input-container flex">
                            <input v-model="filterBy.budget.max" placeholder="Any">
                            <div class="icon-container last">
                                <i>$</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons flex">
                    <div @click="clearBudget">Clear All</div>
                    <button @click="filter()" class="btn-apply">Apply</button>
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
                        <div class="radio-item-wrapper"><label class="n3bUTho Y7LofzN radio-item"><input type="radio"
                                    name="delivery_time" value="1"><span class="VoSvP5v"></span>
                                <div class="inner-radio"><span>Express 24H</span></div>
                            </label></div>
                        <div class="radio-item-wrapper"><label class="n3bUTho Y7LofzN radio-item"><input type="radio"
                                    name="delivery_time" value="3"><span class="VoSvP5v"></span>
                                <div class="inner-radio"><span>Up to 3 days</span></div>
                            </label></div>
                        <div class="radio-item-wrapper"><label class="n3bUTho Y7LofzN radio-item"><input type="radio"
                                    name="delivery_time" value="7"><span class="VoSvP5v"></span>
                                <div class="inner-radio"><span>Up to 7 days</span></div>
                            </label>
                        </div>
                        <div class="radio-item-wrapper">
                            <label class="n3bUTho Y7LofzN radio-item selected"><input type="radio" name="delivery_time"
                                    value="" checked="">
                                <span class="VoSvP5v"></span>
                                <div class="inner-radio">
                                    <span>Anytime</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <p class="bold">MAX.</p>
                        <div class="input-container flex">
                            <input v-model="filterBy.budget.max" placeholder="Any">
                            <div class="icon-container last">
                                <i>$</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="buttons flex">
                    <div @click="clearBudget">Clear All</div>
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
                budget: {
                    min: 0,
                    max: 99999,
                },
                sortBy: {
                    price: false
                }
            },
            showBudget: false,
            showDelivery: false,
            value1: ref([]),
            value2: ref([]),
            value3: ref([]),
            value4: ref([]),
            options: [
                {
                    value: 'Express 24H',
                    label: 'Express 24H',
                },
                {
                    value: 'Up to 3 days',
                    label: 'Up to 3 days',
                },
                {
                    value: 'Up to 7 days',
                    label: 'Up to 7 days',
                },
                {
                    value: 'Anytime',
                    label: 'anytime',
                },
            ]
        }
    },
    methods: {
        showBudgetForm() {
            this.showBudget = !this.showBudget
        },
        showDeliveryForm() {
            this.showDelivery = !this.showDelivery
        },
        filter() {
            let filterBy = { ...this.filterBy }
            this.$store.dispatch({ type: 'loadGigs', filterBy })
            this.showForm()
        },
        clearFilter() {
            this.filterBy.budget.min = 0
            this.filterBy.budget.max = 99999
            let filterBy = { ...this.filterBy }
            this.$store.dispatch({ type: 'loadGigs', filterBy })
        },
        clearBudget() {
            this.filterBy.budget.min = 0
            this.filterBy.budget.max = 99999
        }
    }
}
</script>