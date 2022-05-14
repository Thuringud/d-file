<template>
  <input
    class="header__input left-16"
    type="search"
    placeholder="Disk search"
  />
</template>

<script>
export default {
  name: "my-input",
};
</script>

<style scoped lang="scss">
.header {
  &__input {
    width: 320px;
    height: 40px;
    border-radius: 20px;
    border: 0px;
    padding: 0px 35px 0px 22px;
    background: url("@/assets/img/search-icon.png") no-repeat;
    background: {
      position: calc(100% - 8px) center;
      color: $controls-btn-color;
      size: 30px;
    }
  }
}
</style>
