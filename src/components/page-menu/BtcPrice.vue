<template>
  <div class="page-menu__btc-price">
    <p>1 BTC = {{ btcValue.USD }} USD</p>
  </div>
</template>

<script>
export default {
  name: "btc-price",
  data() {
    return {
      btcValue: "",
    };
  },
  mounted() {
    this.fetchCripto();
  },
  methods: {
    async fetchCripto() {
      try {
        const CRYPTO_KEY = process.env.VUE_APP_CRYPTO_API_KEY;
        const response = await this.axios.get(
          `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=${CRYPTO_KEY}`
        );
        this.btcValue = response.data;
      } catch (e) {
        console.log("Ошибка запроса котировки");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.page-menu {
  &__btc-price {
    border-bottom: $blocks-border;
    @extend %app-font;
    font-size: 1.4rem;
    line-height: 17px;
    color: $text-color;
    padding: 19px;
    & p {
      margin: 0px 0px 0px 35px;
      height: 17px;
    }
    &::before {
      content: url("@/assets/img/btc-icon.png");
      height: 0px;
      float: left;
      margin: -5px 0px;
    }
  }
}
</style>
