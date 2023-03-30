<template>
    <div v-if="isShown" class="model-background">
        <div class="model-background" @click="isShown = false"></div>
        <div class="fixed centered login-model">
            <section class="flex justify-center">
                <form class="sign-in-form flex column">
                    <h4>Sign in to fiverr</h4>
                    <div class="fields">
                        <div class="field"><input v-model="credentials.username" type="text" placeholder="Email / Username">
                        </div>
                        <div class="field"><input v-model="credentials.password" type="password" placeholder="Password">
                        </div>
                    </div>
                    <button @click="login" class="flex">
                        <p>Continue</p>
                    </button>
                    <!-- <div class="flex forgot-password justify-between">
                        <label></label>
                        <button></button>
                    </div> -->
                </form>
            </section>
        </div>
    </div>
</template>
<script>
import { eventBus } from '../services/event-bus.service'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { userService } from '../services/user.service'
export default {
    data() {
        return {
            isShown: false,
            credentials: {
                username: 'john',
                password: '123'
            }
        }
    },
    created() {
        this.unSub = eventBus.on('showLogin', this.showLogin)
    },
    methods: {
        showLogin() {
            this.isShown = true
        },
        async login() {
            try {
                await this.$store.dispatch({ type: 'login', credentials: { ...this.credentials } })
                showSuccessMsg('Logged in successfully')
                this.isShown = false
            }
            catch (err) {
                showErrorMsg(`Cannot login`)
            }
            // console.log('inLogin');
            // userService.login(this.credentials)
            //     .then(user => {
            //         // this.$emit('onChangeLoginStatus')

            //         eventBus.emit('changeUserStatus')

            //     })
            //     .catch(err => {
            //         console.log('Cannot login', err)

            //     })
        },
    },
    mounted() {
        // document.body.classList.add('disable-scroll')
    },
    unmounted() {
        // document.body.classList.remove('disable-scroll')
        this.unSub()
    },
    computed: {

    }
}
</script>