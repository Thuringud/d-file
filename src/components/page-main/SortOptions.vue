<template>
  <div class="page-main__sort-options">sort by name</div>
</template>

<script>
export default {
  name: "sort-options",
};
</script>

<style scoped lang="scss">
.page-main {
  &__sort-options {
    position: absolute;
    top: 43px;
    left: 88px;
    height: 16px;
    @extend %app-font;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 15px;
    text-transform: uppercase;
    color: $main-color;
    cursor: pointer;
    &::after {
      content: url("@/assets/img/angle-top-bold.png");
      width: 16px;
      height: 16px;
      margin-left: 6px;
      vertical-align: middle;
    }
  }
}
</style>
