<template>
    <div class="sticky-outer-wrapper side-bar">
        <div class="sticky-inner-wrapper inner-sticky">
            <aside class="sidbar-contect">
                <div class="package-tabs triple">
                    <!--triple input radio-->
                    <input type="radio" id="package-tab-1" v-model="selectedItem" :value="'basic'" name="package-tab-group" checked>
                    <input type="radio" id="package-tab-2" v-model="selectedItem" :value="'standart'" name="package-tab-group">
                    <input type="radio" id="package-tab-3" v-model="selectedItem" :value="'premium'" name="package-tab-group">
                    <div class="nav-container flex">
                        <label :for="'package-tab-1'" :class="{'aria-selected': (this.selectedItem===`basic`)}">Basic</label><!--the style here i guess-->
                        <label :for="'package-tab-2'" :class="{'aria-selected': (this.selectedItem===`standart`)}">Standart</label><!--the style here i guess-->
                        <label :for="'package-tab-3'" :class="{'aria-selected': (this.selectedItem===`premium`)}">Premium</label><!--the style here i guess-->
                    </div>
                    <div class="some-id"><!--id class-->
                        <div class="package-content">
                            <header class="header-default">
                                <h3 class="flex">
                                    {{ selectedItem }} package
                                    <div class="price-wrapper">price</div>
                                </h3>
                                <p>words</p>
                            </header>
                            <article>
                                <div class="additional-info flex">
                                    <div>class for delivery</div>
                                    <div class="revision-wrapper">class for revision</div>
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
                            <button>to pay</button>
                        </footer>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectedItem: 'basic'
        }
    }
}
</script>