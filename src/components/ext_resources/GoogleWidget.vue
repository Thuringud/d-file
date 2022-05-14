<template>
  <div class="google-widget"></div>
</template>

<script>
export default {
  name: "google-widget",
};
</script>

<style scoped lang="scss">
.google-widget {
  position: fixed;
  top: 92px;
  right: 13px;
  width: 48px;
  height: 252px;
  background-image: url(@/assets/img/google-w.jpg);
  z-index: 99;
}
</style>
