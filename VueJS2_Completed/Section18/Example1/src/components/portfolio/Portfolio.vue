<template>
    <div>
        <h1>The Portfolio Component</h1>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Stock from './Stock.vue'
const STOCK_PORTFOLIO = 'STOCK_PORTFOLIO';

    
    export default {
        computed: {
            ...mapGetters({
                stocks: STOCK_PORTFOLIO
            })
        },
        components: {
            appStock: Stock
        }
    }
</script>

<style scoped>

</style>