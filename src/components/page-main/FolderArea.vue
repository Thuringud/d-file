<template>
  <div class="page-main__folder-area">
    <folder-item
      v-for="folder in $store.state.foldersData.folders"
      :key="folder.id"
      :folder="folder"
    />
  </div>
</template>

<script>
import FolderItem from "./FolderItem";

export default {
  name: "folder-area",
  components: { FolderItem },
};
</script>

<style scoped lang="scss">
.page-main {
  &__folder-area {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 95px 115px 0px 64px;
    width: auto;
    height: auto;
    overflow: hidden;
    overflow-y: auto;
    min-width: 350px;
  }
}
</style>
