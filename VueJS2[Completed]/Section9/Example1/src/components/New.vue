<template>
    <div>
        <h3>The new quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('Destroyed');
        },
        deactivated() {
            console.log('deactivated');
        },
        activated() {
            console.log('activated');
        }
    }
</script>

<style scoped>

</style>