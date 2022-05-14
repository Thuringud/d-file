<template>
  <aside class="page-menu">
    <file-storage />
    <api-info />
    <file-info />
  </aside>
</template>

<script>
import FileStorage from "./FileStorage";
import ApiInfo from "./ApiInfo";
import FileInfo from "./FileInfo";

export default {
  name: "page-menu",
  components: { FileStorage, ApiInfo, FileInfo },
};
</script>

<style scoped lang="scss">
.page-menu {
  position: fixed;
  background-color: $bg-color;
  overflow: hidden;
  overflow-y: auto;
  border-right: $blocks-border;
  height: calc(100vh - 120px);
  width: 256px;
}
</style>
