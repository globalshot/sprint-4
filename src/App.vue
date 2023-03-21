<template>
    <Header></Header>
    <user-msg />
    <div class="main-layout">
        <p>app vue</p>
        <router-view />
    </div>
    <Footer></Footer>
</template>

<script>
import UserMsg from './components/UserMsg.vue'
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'

export default {
    name: 'App',
    components: {
        UserMsg,
        Header,
        Footer
    },
    created() {
        this.$store.dispatch({ type: 'loadStore' })
    }
}
</script>