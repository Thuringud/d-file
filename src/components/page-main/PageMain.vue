<template>
  <div class="page-main">
    <sort-options />
    <view-options />
    <folder-area />
  </div>
</template>

<script>
import FolderArea from "./FolderArea";
import SortOptions from "./SortOptions";
import ViewOptions from "./ViewOptions";

export default {
  name: "page-main",
  components: { FolderArea, SortOptions, ViewOptions },
};
</script>

<style scoped lang="scss">
.page-main {
  position: relative;
  display: block;
  background-color: $bg-color;
  margin-left: 256px;
  height: calc(100vh - 120px);
  overflow: hidden;
  overflow-y: auto;
}
</style>
