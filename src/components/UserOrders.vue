<template>
    <form class="delivery-dropdown">
        <div class="inputs flex">
            <div class="radio-list">
                <div  class="radio-item-wrapper">
                    <label class="n3bUTho Y7LofzN radio-item">
                        <div class="inner-radio">
                            <span>Express 24H</span>
                        </div>
                    </label>
                </div>
                <div class="radio-item-wrapper">
                    <label class="n3bUTho Y7LofzN radio-item">
                        <div class="inner-radio">
                            <span>Up to 3 days</span>
                        </div>
                    </label>
                </div>
                <div class="radio-item-wrapper">
                    <label class="n3bUTho Y7LofzN radio-item">
                        <div class="inner-radio">
                            <span>Up to 7 days</span>
                        </div>
                    </label>
                </div>
                <div class="radio-item-wrapper">
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
                    <input v-model="filterBy.budget.max" placeholder="Any">
                    <div class="icon-container last">
                        <i>$</i>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="buttons flex">
            <div>Clear All</div>
            <button class="btn-apply">Apply</button>
        </div>
    </form>
</template>