<template>
  <div class="page-main__folder-area">
    <folder-item v-for="folder in folders" :key="folder.id" :folder="folder" />
  </div>
</template>

<script>
import FolderItem from "./FolderItem";

export default {
  name: "folder-area",
  data: () => ({
    folders: [
      { id: 1, name: "Folder 1" },
      { id: 2, name: "Folder 2" },
      { id: 3, name: "Folder 3" },
      { id: 4, name: "Folder 4" },
      { id: 5, name: "Folder 5" },
      { id: 6, name: "Folder 6" },
      { id: 7, name: "Folder 7" },
      { id: 8, name: "Folder 8" },
      { id: 9, name: "Folder 9" },
      { id: 10, name: "Folder 10" },
      { id: 11, name: "Folder 11" },
    ],
  }),
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
