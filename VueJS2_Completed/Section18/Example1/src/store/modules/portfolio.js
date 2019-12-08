const BUY_STOCK = 'BUY_STOCK';
const SELL_STOCK = 'SELL_STOCK';
const STOCK_PORTFOLIO = 'STOCK_PORTFOLIO';
const FUNDS = 'FUNDS';
const SET_PORTFOLIO = 'SET_PORTFOLIO';

const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    BUY_STOCK(state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    SELL_STOCK (state, {stockId, quantity, stockPrice}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    SET_PORTFOLIO(qtate, portfolio) {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
}

const actions = {
    SELL_STOCK({commit}, order) {
        commit(SELL_STOCK, order);
    }
};

const getters = {
    STOCK_PORTFOLIO (state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    FUNDS (state) {
        return state.funds;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}