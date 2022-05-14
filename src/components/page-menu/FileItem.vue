<template>
  <li class="page-menu__folder-item">
    <a href="/">{{ folder.name }}</a>
  </li>
</template>

<script>
export default {
  name: "file-item",
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.page-menu {
  &__folder-item {
    @extend %app-font;
    font-size: 1.2rem;
    line-height: 15px;
    color: $text-color;
    text-transform: none;
    padding-left: 16px;
    background: url(@/assets/img/angle-right-bold.png) no-repeat 0 2px;
    padding-bottom: 13px;
    &:first-child {
      margin-top: 14px;
    }
  }
}
</style>
