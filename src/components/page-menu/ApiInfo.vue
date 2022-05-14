<template>
  <div class="page-menu__api-info">
    <user-location />
    <crypto-price />
  </div>
</template>

<script>
import UserLocation from "./UserLocation";
import CryptoPrice from "./CryptoPrice";

export default {
  name: "api-info",
  components: { UserLocation, CryptoPrice },
};
</script>

<style scoped lang="scss"></style>
