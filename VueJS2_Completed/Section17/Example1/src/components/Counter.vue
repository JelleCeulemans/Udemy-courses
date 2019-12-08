<template>
    <div>
        <button class="btn btn-primary" @click="increment(2)">Increment</button>
        <button class="btn btn-primary" @click="decrement(2)">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment(by) {
                this.$store.dispatch('increment', by);
            },
            decrement(by) {
                this.$store.dispatch('decrement', by);
            }
        }
    }
</script>