<template>
  <div class="page-menu__file-storage">
    <ul class="page-menu__folder-list">
      DFILE STORAGE
      <li class="page-menu__folder-item"><a href="/">Folder 1</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 2</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 3</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 4</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 5</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 6</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 7</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 8</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 9</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 10</a></li>
      <li class="page-menu__folder-item"><a href="/">Folder 11</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "file-storage",
};
</script>

<style scoped lang="scss">
.page-menu {
  &__file-storage {
    border-bottom: $blocks-border;
    height: calc(100vh - 513px);
    overflow: hidden;
    overflow-y: auto;
  }
  &__folder-list {
    @extend %app-font;
    font-size: 1.2rem;
    line-height: 150%;
    text-transform: uppercase;
    color: $main-color;
    padding-left: 37px;
    list-style: none;
    padding-bottom: 14px;
    &::before {
      content: url("@/assets/img/angle-right.png");
      position: relative;
      top: 0px;
      right: 20px;
      height: 0px;
      float: left;
    }
  }
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
