<template>
  <footer class="footer">
    <footer-item class="footer__item_available-space"
      >AVAILABLE 17,8 GB</footer-item
    >
    <footer-item class="footer__item_recently-deleted"
      >RECENTLY DELETED</footer-item
    >
  </footer>
</template>

<script>
import FooterItem from "./FooterItem.vue";

export default {
  name: "v-footer",
  components: { FooterItem },
};
</script>

<style scoped lang="scss">
.footer {
  position: absolute;
  background-color: $bg-color;
  top: auto;
  bottom: 0;
  right: 0;
  left: 0;
  border-top: $blocks-border;
  width: 100%;
  min-width: 775px;
  height: 47px;
}
</style>
