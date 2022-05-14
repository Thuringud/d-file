<template>
  <p
    v-for="(price, index) in $store.getters.getAllPrices"
    :key="price"
    :class="[index]"
  >
    1 {{ index }} = {{ price.USD }} USD
  </p>
</template>

<script>
export default {
  name: "crypto-price",
  mounted() {
    this.$store.dispatch("fetchPrices");
  },
};
</script>

<style scoped lang="scss">
.ETH {
  border-bottom: $blocks-border;
  @extend %app-font;
  font-size: 1.4rem;
  line-height: 17px;
  color: $text-color;
  padding: 19px 0px 19px 50px;
  margin: 0px;
  &::before {
    content: url("@/assets/img/eth-icon.png");
    height: 0px;
    float: left;
    margin: -5px -25px;
  }
}
.BTC {
  border-bottom: $blocks-border;
  @extend %app-font;
  font-size: 1.4rem;
  line-height: 17px;
  color: $text-color;
  padding: 19px 0px 19px 55px;
  margin: 0px;
  &::before {
    content: url("@/assets/img/btc-icon.png");
    height: 0px;
    float: left;
    margin: -5px -35px;
  }
}
</style>
