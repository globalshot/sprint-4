<template>
    <div class="flex">

        <!-- <RouterLink class="c-btn" to="/edit">Add</RouterLink> -->
        <button class="clear-filter-btn bold" style="font-size: 16px; color: rgb(34, 35, 37);">Clear Filter</button>
        <div class="budget-container">
            <button @click="showForm" class="budget-filter-btn bold flex" style="font-size: 16px; color: rgb(34, 35, 37);">
                <svg class="filter-arrow" width="10" height="10" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"
                    fill="currentFill">
                    <path
                        d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                    </path>
                </svg>
            </button>
            <div>Budget
                <form v-if="showBudget" class="budget-dropdown">
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
                        <div>Clear All</div>
                        <button @click="filterBudget(filterBy.budget.min, filterBy.budget.max)"
                            class="btn-apply">Apply</button>
                    </div>
                </form>
            </div>

        </div>
        <!-- <button class="delivey-filter-btn bold flex" style="font-size: 16px; color: rgb(34, 35, 37);">
            <p>Delivey Time</p>
            <svg class="filter-arrow" width="10" height="10" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"
                fill="currentFill">
                <path
                    d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                </path>
            </svg>
        </button> -->
        <div>

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
                }
            },
            showBudget: false,
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
        showForm() {
            this.showBudget = !this.showBudget
        },
        filterBudget(minBudget, maxBudget) {
            console.log(minBudget, maxBudget)
            let filterBy = {
                budget: {
                    min: 0,
                    max: 99999
                }
            }
            filterBy.budget.min = minBudget
            filterBy.budget.max = maxBudget
            this.$store.dispatch({ type: 'loadGigs', filterBy })
        }
    }
}
</script>