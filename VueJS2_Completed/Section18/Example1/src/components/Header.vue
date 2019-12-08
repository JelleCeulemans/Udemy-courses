<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li
                            class="dropdown " 
                            :class="{open: isDropdownOpen}"
                            @click="isDropdownOpen = !isDropdownOpen">
                        <a
                                href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapActions} from 'vuex';
const RANDOMIZE_STOCKS = 'RANDOMIZE_STOCKS';
const FUNDS = 'FUNDS';
const STOCK_PORTFOLIO = 'STOCK_PORTFOLIO';
    export default {
        data() {
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.FUNDS;
            }
        },
        methods: {
            ...mapActions({
                randomizeStock: RANDOMIZE_STOCKS,
                fetchData: 'loadData'
            }),
            endDay() {
                this.RANDOMIZE_STOCKS();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.FUNDS,
                    stockPortfolio: this.$store.getters.STOCK_PORTFOLIO,
                    stocks: this.$store.getters.stocks
                };
                console.log(data);
                this.$http.put('data.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>