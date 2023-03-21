<template>
    <div class="user-msg" :class="msg?.type">
        <img :src="iconUrl" alt="">
        <h3>{{ txt }}</h3>
    </div>
</template>

<script>
import { eventBus } from '../services/event-bus.service'

export default {
    name: 'UserMsg',
    data() {
        return {
            msg: null,
            unsub: null
        }
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 2000)
        }
    },
    computed: {
        iconUrl() {
            if(!this.msg) return ''
            return `src/assets/icons/${this.msg.type}.ico`
        },
        txt() {
            if(!this.msg) return ''
            return this.msg.txt
        }
    },
    created() {
        this.unsub = eventBus.on('show-msg', this.showMsg)
    },
    unmounted() {
        this.unsub()
    }
}
</script>