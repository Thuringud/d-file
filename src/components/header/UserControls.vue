<template>
  <div class="header__user-controls left-16">
    <my-input />
    <my-button class="header__btn_dropdown left-16" />
    <my-button class="header__btn_user left-16" />
  </div>
</template>

<script>
import MyInput from "@/components/UI/MyInput";
import MyButton from "@/components/UI/MyButton";

export default {
  name: "user-controls",
  components: { MyInput, MyButton },
};
</script>

<style scoped lang="scss">
.header {
  &__user-controls {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  &__btn_dropdown {
    background-image: url(@/assets/img/dropdown-icon.png);
  }
  &__btn_user {
    background-image: url(@/assets/img/user-icon.png);
  }
}
</style>
