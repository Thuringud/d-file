<template>
  <button class="header__btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped lang="scss">
.header {
  &__btn {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background: {
      color: $controls-btn-color;
      size: 30px;
      position: center;
      repeat: no-repeat;
    }
  }
}
</style>
