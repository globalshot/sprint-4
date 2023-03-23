<template>
    <div class="sticky-focus-header full">
        <div class="nav-container main-layout full">
            <div class="nav-container flex">
                <ul class="flex">
                    <li @click="markSelected" :class="{ selected: isSelected }">
                        <a>Overview</a>
                    </li>
                    <li @click="markSelected" :class="{ selected: isSelected }">
                        <a>Description</a>
                    </li>
                    <li @click="markSelected" :class="{ selected: isSelected }">
                        <a>About the seller</a>
                    </li>
                    <li @click="markSelected" :class="{ selected: isSelected }">
                        <a>Reviews</a>
                    </li>
                </ul>
            </div>
        </div>
        <footer class="tab-footer flex">
        </footer>


    </div>
</template>

<script>
export default {

    data() {
        return {
            isSelected: false,
        }
    },
    methods: {
        markSelected: function () {
            this.isSelected = !this.isSelected
        },
    },
}
</script>