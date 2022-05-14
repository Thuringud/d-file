<template>
  <div class="header__file-controls">
    <my-button class="header__btn_add-file right-16">
      <p>UPLOAD</p>
    </my-button>
    <my-button class="header__btn_download right-16" />
    <my-button class="header__btn_trash right-16" />
  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  name: "file-controls",
  components: { MyButton },
};
</script>

<style scoped lang="scss">
.header {
  &__file-controls {
    display: flex;
    flex: 1;
    justify-content: flex-start;
  }
  &__btn_add-file {
    width: 138px;
    border-radius: 54px;
    background: {
      image: url(@/assets/img/add-file-icon.png);
      size: 31px 30px;
      color: $main-color;
      position-x: calc(100% - 4px);
    }
    & p {
      @extend %app-font;
      font-size: 1.4rem;
      line-height: 17px;
      color: $add-file-btn-color;
      margin: 11px 0px 12px 21px;
    }
  }
  &__btn_download {
    background-image: url(@/assets/img/download-icon.png);
    background-size: 20px 17px;
  }
  &__btn_trash {
    background-image: url(@/assets/img/trash-icon.png);
    background-size: 16px 17px;
  }
}
</style>
