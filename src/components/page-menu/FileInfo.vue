<template>
  <div class="page-menu__file-info">
    <h2>File info</h2>
    <table class="page-menu__table">
      <tbody>
        <tr>
          <td>Name</td>
          <td>New folder</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>File</td>
        </tr>
        <tr>
          <td>Date of birth</td>
          <td>11.01.2021</td>
        </tr>
        <tr>
          <td>Size</td>
          <td>13 232 MB</td>
        </tr>
        <tr>
          <td>Date of birth</td>
          <td>11.01.2021</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>File</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "file-info",
};
</script>

<style scoped lang="scss">
.page-menu {
  &__file-info {
    position: absolute;
    bottom: 0px;
    left: 0px;
    height: 233px;
    width: 100%;
    padding: 31px;
    & h2 {
      @extend %app-font;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 15px;
      text-transform: uppercase;
      padding-bottom: 19px;
      margin: 0px;
      color: $text-color;
    }
  }
  &__table {
    @extend %app-font;
    font-size: 1rem;
    line-height: 12px;
    width: 100%;
    color: $text-color;
    & tr {
      padding: 12px 0px;
    }
    & td {
      padding: 6px;
      &:nth-child(2) {
        color: $table-td2-color;
      }
    }
  }
}
</style>
