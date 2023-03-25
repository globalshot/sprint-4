<template>
    <div class="sticky-outer-wrapper side-bar">
        <div class="sticky-inner-wrapper inner-sticky">
            <aside class="sidbar-contect">
                <div class="package-tabs triple">
                    <!--triple input radio-->
                    <input type="radio" id="package-tab-1" v-model="selectedItem" :value="'basic'" name="package-tab-group"
                        checked>
                    <input type="radio" id="package-tab-2" v-model="selectedItem" :value="'standart'"
                        name="package-tab-group">
                    <input type="radio" id="package-tab-3" v-model="selectedItem" :value="'premium'"
                        name="package-tab-group">
                    <div class="nav-container flex">
                        <label @click="price = '66$', quant = '1'" :for="'package-tab-1'"
                            :class="{ 'aria-selected': (this.selectedItem === `basic`) }">Basic</label><!--the style here i guess-->
                        <label @click="price = '100$', quant = '2'" :for="'package-tab-2'"
                            :class="{ 'aria-selected': (this.selectedItem === `standart`) }">Standart</label><!--the style here i guess-->
                        <label @click="price = '166$', quant = '3'" :for="'package-tab-3'"
                            :class="{ 'aria-selected': (this.selectedItem === `premium`) }">Premium</label><!--the style here i guess-->
                    </div>
                    <div class="some-id"><!--id class-->
                        <div class="package-content">
                            <header class="header-default">
                                <h3 class="flex">
                                    {{ selectedItem }} package
                                    <div class="price-wrapper">{{ price }}</div>
                                </h3>
                                <p>{{ quant }} STANDARD QUALITY IMAGE from ONE PROMPT.
                                    Custom aspect ratio.</p>
                            </header>
                            <article>
                                <div class="additional-info flex">
                                    <div class="delivery-container flex">
                                        <span class="delivery-icon" aria-hidden="true" style="width: 16px; height: 16px;">
                                            <svg width="16" height="16" viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
                                                </path>
                                                <path d="M9 4H7v5h5V7H9V4z"></path>
                                            </svg>
                                        </span>
                                        <b class="delivery">
                                            1 Day Delivery
                                        </b>
                                    </div>
                                    <div class="revision-wrapper">
                                        <span class="revisions-icon" aria-hidden="true"
                                            style="width: 16px; height: 16px;">
                                            <svg width="16" height="16" viewBox="0 0 16 16"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z">
                                                </path>
                                                <path
                                                    d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z">
                                                </path>
                                            </svg>
                                        </span>
                                        <b class="revisions">
                                            {{quant}} Revisions
                                        </b>
                                    </div>
                                </div>
                                <ul class="features">
                                    <!--v-for the features-->
                                    <li class="flex items-center"><span>vi</span>first feature</li>
                                    <li class="flex items-center"><span>vi</span>second feature</li>
                                    <li class="flex items-center"><span>vi</span>third feature</li>
                                    <li class="flex items-center"><span>vi</span>fourth feature</li>
                                </ul>
                            </article>
                        </div>
                        <footer class="tab-footer flex">
                            <button class="btn btn-join">Continue</button>
                        </footer>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: 'basic',
            price: '66$',
            quant: '1',
        }
    }
}
</script>