<template>
    <form class="order-dropdown">
        <div class="inputs flex">
            <div class="order-list">
                <div  class="order-item-wrapper">
                    <label class="order-item">
                        <div class="inner-order">
                            <span>Express 24H</span>
                        </div>
                    </label>
                </div>
                <div class="order-item-wrapper">
                    <label class="order-item">
                        <div class="inner-order">
                            <span>Up to 3 days</span>
                        </div>
                    </label>
                </div>
                <div class="order-item-wrapper">
                    <label class="n3bUTho Y7LofzN order-item">
                        <div class="inner-order">
                            <span>Up to 7 days</span>
                        </div>
                    </label>
                </div>
                <div class="order-item-wrapper">
                    <label class="order-item selected felx">
                        <div class="inner-order">
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
            <button class="btn-apply">Apply</button>
        </div>
    </form>
</template>