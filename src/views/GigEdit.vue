<template>
    <main class="edit-view" v-if="gig">
        <h2 class="mbe-2">{{ formType }}</h2>
        <form class="edit-view__form flex gap-3" @submit.prevent="saveGig">
            <label @drop.prevent="handleFile" @dragover.prevent>
                <img :src="img" alt="">
                <input type="file" @change="handleFile" hidden>
            </label>
            <div class="flex column">
                <label class="mbe-2">
                    <p>Title:</p>
                    <input class="c-input" type="text" v-model="gig.title" placeholder="Gigs name">
                </label>
                <label class="mbe-2">
                    <p>Price:</p>
                    <input class="c-input" type="number" v-model="gig.price" placeholder="Gigs price">
                </label>
                <label class="mbe-2">
                    <p>Description:</p>
                    <input class="c-input" type="textbox" v-model="gig.description" placeholder="Gigs description">
                </label>
                <section class="flex gap-1">
                    <button class="c-btn">Save</button>
                    <router-link class="c-btn" to="/gig">Back</router-link>
                </section>
            </div>
        </form>
    </main>
</template>

<script>
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { gigService } from '../services/gig.service'
// import { uploadImg } from '../services/upload.service'

export default {
    name: 'GigEdit',
    data() {
        return {
            gig: null,
        }
    },
    methods: {
        async saveGig() {
            const type = this.gig._id ? 'updateGig' : 'addGig'
            try {
                await this.$store.dispatch({ type, gig: { ...this.gig } })
                showSuccessMsg('Gig Saved')
                this.$router.push('/gig')
            }
            catch (err) {
                showErrorMsg('Failed to save')
            }
        },
        async handleFile(ev) {
            const file = ev.type === 'change' ?
                ev.target.files[0] :
                ev.dataTransfer.files[0]

            try {
                const { url } = await uploadImg(file)
                this.gig.imgUrl = url
                showSuccessMsg('Image uploaded')
            }
            catch (err) {
                showErrorMsg('Failed to load image')
            }
        }
    },
    computed: {
        formType() {
            return this.gig._id ? 'Edit Gig' : 'Add Gig'
        },
        img() {
            return this.gig.imgUrl ?
                this.gig.imgUrl :
                'src/assets/icons/drag-image.ico'
        }
    },
    async created() {
        const { id } = this.$route.params
        this.gig = (id) ?
            await gigService.getById(id) :
            gigService.getEmptyGig()
    },

}
</script>