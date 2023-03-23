<template>
    <div class="flex">
        <RouterLink class="c-btn" to="/edit">Add</RouterLink>
        <button class="clear-filter-btn bold" style="font-size: 16px; color: rgb(34, 35, 37);">Clear Filter</button>
        <button @click="showForm" class="budget-filter-btn bold flex" style="font-size: 16px; color: rgb(34, 35, 37);">
            <div>Budget</div>
            <svg class="filter-arrow" width="10" height="10" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"
                fill="currentFill">
                <path
                    d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                </path>
            </svg>
        </button>
        <button class="budget-filter-btn bold flex" style="font-size: 16px; color: rgb(34, 35, 37);">
            <p>Delivey Time</p>
            <svg class="filter-arrow" width="10" height="10" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg"
                fill="currentFill">
                <path
                    d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z">
                </path>
            </svg>
        </button>
        <div>
            <form v-if="showBudget" class="budget-dropdown">
                <div class="inputs">
                    <div>
                        <p class="bold">MIN.</p><input><i>$</i>
                    </div>
                    <div>
                        <p class="bold">MAX.</p><input><i>$</i>
                    </div>
                </div>
                <div class="buttons flex">
                    <div>Clear All</div><button>Apply</button>
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
        }
    }
}
</script>