import axios from "axios";

export const menuModule = {
  state: {
    prices: [],
  },
  getters: {
    getAllPrices(state) {
      return state.prices;
    },
  },
  mutations: {
    setPrices(state, payload) {
      state.prices = payload;
    },
  },
  actions: {
    fetchPrices(context) {
      try {
        const CRYPTO_KEY = process.env.VUE_APP_CRYPTO_API_KEY;
        axios
          .get(
            `https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=USD&api_key=${CRYPTO_KEY}`
          )
          .then((response) => context.commit("setPrices", response.data));
      } catch (e) {
        console.log("Ошибка запроса цены");
      }
    },
  },
};
