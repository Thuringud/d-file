<template>
  <div class="page-main__view-options">
    <button class="page-main__view-options_icons"></button>
    <button class="page-main__view-options_list"></button>
  </div>
</template>

<script>
export default {
  name: "view-options",
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
  &__view-options {
    position: absolute;
    width: 56px;
    height: 32px;
    top: 31px;
    right: 176px;
    background: #f5f5f5;
    border-radius: 7px;
    &_icons {
      width: 14px;
      height: 14px;
      background: url(@/assets/img/view-icon.png) no-repeat center;
      margin: 10px 5px 10px 9px;
    }
    &_list {
      width: 14px;
      height: 14px;
      background: url(@/assets/img/view-list.png) no-repeat center;
      margin: 10px 9px 10px 5px;
    }
  }
}
</style>
