<template>
    <div class="gig-description">
        <header>
            <h2 class="section-title bold">About This Gig</h2>
        </header>
        <div class="description-wrapper">
            <div class="description-wrapper"><span style="font-size:0"></span>
                <div class="description-content" data-impression-collected="true">
                    <p>{{ gig.description }}</p><!--likely will be pre-->
                </div>
            </div>
        </div>
        
        <!--with denis check-->
        <!--looks like v-for inside v-for-->
        <!-- <ul class="metadata flex"> -->
            <!--possible to do check, if index === to thing, if no add ,-->
            <!-- <li class="metadata-attribute">
                <p>Website type</p>
                <ul class="flex">
                    <li>
                        E-Commerce
                    </li>
                    <li>
                        Business promotion
                    </li>
                    <li>
                        Portfolio
                    </li>
                </ul>
            </li>
        </ul> -->

        
    </div>
</template>
<script>
export default {


    props: {
        gig: {
            type: Object,
            required: true
        }
    },
}
</script>