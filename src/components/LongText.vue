
<template>
    <h4>{{ displayTxt }}</h4>
</template>

<script>
export default {
    name: 'LongText',
    props: {
        txt: '',
    },
    data() {
        return {
            isShown: false,
        }
    },
    computed: {
        displayTxt() {
            const length = 45
            if (this.txt.length > 30)
                return this.txt.slice(0, length) + '...'
            return this.txt
        }
    }

}
</script>