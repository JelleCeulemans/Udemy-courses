<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{stock.name}}
                    <small>(Price: {{stock.price}})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: insufficentFunds}"
                    >
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="placeOrder" :disabled="quantity <= 0 || insufficentFunds">{{ insufficentFunds ? 'Insufficient Funds' : 'Buy'}}</button>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    const BUY_STOCK = 'BUY_STOCK';
    const FUNDS = 'FUNDS';
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.FUNDS;
            },
            insufficentFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            placeOrder() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: +this.quantity
                };
                //console.log(Number.isInteger(this.quantity));
                console.log(order);
                this.$store.dispatch(BUY_STOCK, order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>