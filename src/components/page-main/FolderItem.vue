<template>
  <div class="page-main__folder">
    <div class="page-main__folder-image"></div>
    <div class="page-main__folder-name">{{ folder.name }}</div>
  </div>
</template>

<script>
export default {
  name: "folder-item",
  props: {
    folder: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.page-main {
  &__folder {
    position: relative;
    width: 128px;
    height: 168px;
    border-radius: 10px;
    margin: 0px 16px;
    &:hover {
      background: #f2f1ff;
      cursor: pointer;
    }
  }
  &__folder-image {
    width: 112px;
    height: 88px;
    margin: 24px 8px 56px 8px;
    background-image: url(@/assets/img/folder.png);
  }
  &__folder-name {
    position: absolute;
    bottom: 21px;
    right: 27px;
    left: 27px;
    display: inline-block;
    @extend %app-font;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 15px;
    text-align: center;
    color: $text-color;
  }
}
</style>
