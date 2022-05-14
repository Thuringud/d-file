<template>
  <div class="page-menu__file-storage">
    <ul class="page-menu__folder-list">
      DFILE STORAGE
      <file-item
        v-for="folder in $store.state.foldersData.folders"
        :key="folder.id"
        :folder="folder"
      />
    </ul>
  </div>
</template>

<script>
import FileItem from "./FileItem";

export default {
  name: "file-storage",
  components: { FileItem },
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
}
</style>
