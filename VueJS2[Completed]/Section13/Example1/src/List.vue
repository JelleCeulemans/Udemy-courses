<template>
    <div>
        <h1>Filters & Mixins</h1>
        <hr>
        <input v-model="filterText" class="form-control">
        <ul>
            <li v-for="fruit in filteredFruits">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    import  { fruitMixin } from "./fruitMixin";

    export default {
        mixins: [fruitMixin],
        created() {
            console.log('Inside list created Hook');
        }
    }
</script>

<style>

</style>
