<template>
    <div v-cloak>
        <div v-if="loading" class="loader"></div>
        <div v-else>
            <user-msg />
            <Login />
            <div class="main-app">
                <Header></Header>
                <main class="main-layout">
                    <!-- <p>app vue</p> -->
                    <router-view />
                </main>
                <Footer class="full"></Footer>
            </div>
            <!-- your content goes here -->
        </div>
    </div>
</template>

<script>
import UserMsg from './components/UserMsg.vue'
import Login from './components/Login.vue'
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'
import { socketService } from './services/socket.service'

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { showSuccessMsg } from './services/event-bus.service'

export default {
    name: 'App',
    components: {
        UserMsg,
        Login,
        Header,
        Footer,
        VueperSlides,
        VueperSlide,
    },
    data() {
        return {
            loading: true,
        }
    },
    mounted() {
        // simulate a delay to show the loader
        window.onload = () => {
            this.loading = false
        }
    },

    created() {
        this.$store.dispatch({ type: 'loadGigs', filterBy: null })
        this.$store.dispatch({ type: 'loadUser' })
        socketService.on('user-ordered', (msg) => {
            showSuccessMsg(msg)
        })
        socketService.on('order-status-update', (msg) => {
            showSuccessMsg(msg)
            this.$store.dispatch({ type: 'loadUserOrders' })
        })
    }
}
</script>