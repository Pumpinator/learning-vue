<template>
    <p>You took {{ reactionTime }} miliseconds to click</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['reactionTime'],
    data() {
        return {
rank: null
        }
    },
    mounted() {
        if(this.reactionTime < 250) {
            this.rank = 'Ninja Fingers';
        } else if(this.reactionTime < 400) {
            this.rank = 'Rapid Reflexe';
        } else {
            this.rank = 'Snail...'
        }
    }
}
</script>

<style>
    .rank {
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>
