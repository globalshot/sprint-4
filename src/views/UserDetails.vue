<template>
    <h3>User Details</h3>
    
    <h1>{{ user.fullname }}</h1>
    <button>
        <RouterLink to="/edit">Add Gig</RouterLink>
    </button>
    <GigIndex/>

</template>

<script>
import GigList from '../components/GigList.vue'
import GigIndex from '../views/GigIndex.vue'
import { userService } from '../services/user.service'
    export default {
    name: "UserDetails",
    data() {
        return {
            user: null,
            gigs: []
        };
    },
    async created() {
        const { id } = this.$route.params;
        this.user = (id) ?
            await userService.getById(id) :
            console.log("Wrong User");
        console.log(this.user);

    },
    computed: {
        gigs() {
            return this.$store.getters.gigs
        },
    },
    components: {
         GigList,
         GigIndex
        }
}
</script>