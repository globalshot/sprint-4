<template>
    User Details
    <h1>{{ user.fullname }}</h1>
</template>

<script>
import { userService } from '../services/user.service'
    export default {
        name: 'UserDetails',
        data() {
        return {
            user: null,
        }
    },
    async created() {
        const { id } = this.$route.params
        this.user = (id) ?
        await userService.getById(id) :
            console.log('Wrong User')

        console.log(this.user)
    },
    }
</script>