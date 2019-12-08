import stocks from '../../data/stocks.js';

const SET_STOCKS = 'SET_STOCKS';
const RND_STOCKS = 'RND_STOCKS';
const BUY_STOCK = 'BUY_STOCK';
const INIT_STOCKS = 'INIT_STOCKS';
const RANDOMIZE_STOCKS = 'RANDOMIZE_STOCKS';
const STOCKS = 'STOCKS';

const state = {
    stocks: []
};

const mutations = {
    SET_STOCKS(state, stocks) {
        state.stocks = stocks;

    },
    RND_STOCKS(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1+ Math.random() - 0.5));
        });
    }
}

const actions = {
    BUY_STOCK: ({commit}, order) => {
        commit(BUY_STOCK, order);
    },
    INIT_STOCKS: ({commit}) => {
        commit(SET_STOCKS, stocks);
    },
    RANDOMIZE_STOCKS: ({commit}) => {
        commit(RND_STOCKS);
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}