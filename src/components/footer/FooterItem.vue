<template>
  <div class="footer__item">
    <a href="/">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "footer-item",
};
</script>

<style scoped lang="scss">
.footer__item {
  position: absolute;
  top: 15px;
  @extend %app-font;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 15px;
  text-transform: uppercase;
  &_available-space {
    left: 24px;
    a {
      color: $available-space-color;
    }
  }
  &_recently-deleted {
    right: 24px;
    a {
      color: $main-color;
    }
  }
}
</style>
