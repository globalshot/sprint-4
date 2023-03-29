<template>
    <h1>Signup</h1>
    <form @submit.prevent="signup">
        <input type="text" v-model="credentials.fullname" >
        <input type="text" v-model="credentials.username">
        <input type="password" v-model="credentials.password">
        <button>Sign up</button>
    </form>
</template>
<script>
import { showSuccessMsg } from '../services/event-bus.service'

export default {
    data() {
        return{
            credentials: {
                fullname:'',
                username:'',
                password:''
            }
        }
    },
    methods: {
        async signup() {
            try{
                await this.$store.dispatch({
                    type: 'signup', 
                    credentials: {...this.credentials}
                })
                showSuccessMsg('Welcom')
            }
            catch(err) {
                showErrorMsg('Failed to signup')
            }
        }
    }

}
</script>