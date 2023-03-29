<template>
    <h3>User Details</h3>

    <h1>{{ user.fullname }}</h1>
    <div v-if="userId === this.$route.params.id" class="add-gig-container flex">
        <button class="btn btn-add">
            <RouterLink to="/edit"><i class="fa-solid fa-plus"></i></RouterLink>
        </button>
        <span>Add gig</span>
    </div>
    <GigIndex />
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
        loggedinUser() {
            return this.$store.getters.loggedinUser
        },
        userId() {
            if (!this.loggedinUser) return ''
            return this.loggedinUser._id
        },
    },
    components: {
        GigList,
        GigIndex
    }
}
</script>