<template>
  <header class="header">
    <nav class="header__navigation">
      <file-controls />
      <a href="/" class="header__logo-link"><div class="header__logo"></div></a>
      <user-controls />
    </nav>
  </header>
</template>

<script>
import FileControls from "./FileControls";
import UserControls from "./UserControls";

export default {
  name: "v-header",
  components: { FileControls, UserControls },
};
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  bottom: auto;
  right: 0;
  left: 0;
  display: flex;
  background-color: $bg-color;
  border-bottom: $blocks-border;
  height: 73px;
  z-index: 99;
  min-width: 775px;
  &__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    width: 100%;
    height: 100%;
  }
  &__logo {
    width: 89px;
    height: 23px;
    background: url(@/assets/img/dfile_logo.png) no-repeat;
  }
  &-link {
    display: flex;
    flex: 1;
    justify-content: center;
  }
}
</style>
