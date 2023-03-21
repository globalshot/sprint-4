<template>
    <main class="app-container main-layout full">
        <section class="app-home main-layout full">
            <Hero />
        </section>
    </main>
</template>

<script>
import Hero from '../components/Hero.vue'
export default {
    name: 'HomeView',

    components: {
        Hero,
    },
}

</script>