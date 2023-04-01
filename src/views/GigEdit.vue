<template>
    <main class="edit-view" v-if="gig">
        <h2 class="mbe-2">{{ formType }}</h2>
        <form class="edit-view__form flex gap-3" @submit.prevent="saveGig">
            <label @drop.prevent="handleFile" @dragover.prevent>
                <img :src="img" alt="">
                <input type="file" @change="handleFile" hidden>
            </label>
            <div class="flex column">
                <div class="top-form">
                    <label class="mbe-2 title flex">
                        <p>Title:</p>
                        <textarea class="txt-box" v-model="gig.title"
                            placeholder="Enter a short title. to catch their eyes"
                            style="width: 512px; height: 78px;">
                                </textarea>
                        <!-- <input class="c-input" type="text" v-model="gig.title" placeholder="Gigs name"> -->
                    </label>
                    <label class="mbe-2 description flex">
                        <p>Description:</p>
                        <textarea class="txt-box" v-model="gig.description"
                            placeholder="Tell the costumers more about what you are offering"
                            style="width: 527px; height: 131px;">
                                </textarea>
                        <!-- <input class="c-input" type="textbox" v-model="gig.description" placeholder="Gigs description"> -->
                    </label>
                </div>
                <div class="bottom-form flex space-between"><label class="category flex column"><span
                            class="flex-column">Category <p>Choose the category most suitable for your Gig.</p>
                        </span>
                        <select class="c-input" name="Graphics and Design" id="">
                            <option value="Graphics &amp; Design">Graphics &amp; Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Writing &amp; Translation">Writing &amp; Translation</option>
                            <option value="Video &amp; Animation">Video &amp; Animation</option>
                            <option value="Music &amp; Audio">Music &amp; Audio</option>
                            <option value="Programming &amp; Tech">Programming &amp; Tech</option>
                            <option value="Busines">Busines</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Data">Data</option>
                        </select>
                    </label>
                    <label class="days-to-make flex column">
                        <span>Days to Make
                            <p>Days it will take you
                                on average to finish this gig</p>
                        </span>
                        <select class="c-input" name="" id="">
                            <!-- <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option> -->
                            <option v-for="i in 20" value="i">{{ i }}</option>
                        </select>
                    </label>
                    <label class="price flex column">
                        <span>Price <p>Price you're offering for this gig
                            </p>
                        </span>
                        <input class="c-input" type="number" name="" id="">
                    </label>
                </div>
                <section class="submit-btns flex gap-1">
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
                console.log(this.gig);
                // await this.$store.dispatch({ type, gig: { ...this.gig } })
                showSuccessMsg('Gig Saved')
                // this.$router.push('/gig')
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