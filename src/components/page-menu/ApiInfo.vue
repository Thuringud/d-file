<template>
  <div class="page-menu__api-info">
    <user-location />
    <eth-price />
    <btc-price />
  </div>
</template>

<script>
import UserLocation from "./UserLocation";
import EthPrice from "./EthPrice";
import BtcPrice from "./BtcPrice";

export default {
  name: "api-info",
  components: { UserLocation, EthPrice, BtcPrice },
};
</script>

<style scoped lang="scss"></style>
