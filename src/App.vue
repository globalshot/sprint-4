<template>
    <user-msg />
    <div class="main-layout">
        <router-view />
    </div>
</template>

<script>
import UserMsg from './components/UserMsg.vue'

export default {
    name: 'App',
    components: {
        UserMsg
    },
    created() {
        this.$store.dispatch({ type: 'loadStore' })
    }
}
</script>