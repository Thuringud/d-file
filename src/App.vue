<template>
  <header class="header">
    <nav class="header__navigation">
      <div class="header__file-controls">
        <button class="header__btn header__btn_add-file right-16">
          <p>UPLOAD</p>
        </button>
        <button class="header__btn header__btn_download right-16"></button>
        <button class="header__btn header__btn_trash right-16"></button>
      </div>
      <a href="/" class="header__logo-link"><div class="header__logo"></div></a>
      <div class="header__user-controls">
        <input
          class="header__input left-16"
          type="search"
          placeholder="Disk search"
        />
        <button class="header__btn header__btn_dropdown left-16"></button>
        <button class="header__btn header__btn_user left-16"></button>
      </div>
    </nav>
  </header>
  <aside class="page-menu">
    <div class="page-menu__file-storage">
      <ul class="page-menu__folder-list">
        DFILE STORAGE
        <li class="page-menu__folder-item"><a href="/">Folder 1</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 2</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 3</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 4</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 5</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 6</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 7</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 8</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 9</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 10</a></li>
        <li class="page-menu__folder-item"><a href="/">Folder 11</a></li>
      </ul>
    </div>
    <div class="page-menu__api-info">
      <div class="page-menu__location">KAZAN, RUSSIA 13°C</div>
      <div class="page-menu__eth-price"><p>1 ETH = 2,859.35 USD</p></div>
      <div class="page-menu__btc-price"><p>1 BTC = 38,840.70 USD</p></div>
    </div>
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
  </aside>
  <div class="google-widget"></div>
  <div class="page-main">
    <div class="page-main__sort-options">sort by name</div>
    <div class="page-main__view-options">
      <button class="page-main__view-options_icons"></button>
      <button class="page-main__view-options_list"></button>
    </div>
    <div class="page-main__folder-area">
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 1</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 2</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 3</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 4</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 5</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 6</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 7</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 8</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 9</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 10</div>
      </div>
      <div class="page-main__folder">
        <div class="page-main__folder-image"></div>
        <div class="page-main__folder-name">Folder 11</div>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div class="footer__available-spase"><a href="/">AVAILABLE 17,8 GB</a></div>
    <div class="footer__recently-deleted"><a href="/">RECENTLY DELETED</a></div>
  </footer>
</template>

<style lang="scss">
#app {
  height: 100vh;
}
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

  &__logo-link {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  &__logo {
    width: 89px;
    height: 23px;
    background: url(@/assets/img/dfile_logo.png) no-repeat;
  }

  &__file-controls {
    display: flex;
    flex: 1;
    justify-content: flex-start;
  }

  &__user-controls {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  &__btn {
    display: flex;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background: {
      color: $controls-btn-color;
      size: 30px;
      position: center;
      repeat: no-repeat;
    }

    &_add-file {
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

    &_download {
      background-image: url(@/assets/img/download-icon.png);
      background-size: 20px 17px;
    }

    &_trash {
      background-image: url(@/assets/img/trash-icon.png);
      background-size: 16px 17px;
    }

    &_dropdown {
      background-image: url(@/assets/img/dropdown-icon.png);
    }

    &_user {
      background-image: url(@/assets/img/user-icon.png);
    }
  }

  &__input {
    width: 320px;
    height: 40px;
    border-radius: 20px;
    border: 0px;
    padding: 0px 35px 0px 22px;
    background: url("@/assets/img/search-icon.png") no-repeat;
    background: {
      position: calc(100% - 8px) center;
      color: $controls-btn-color;
      size: 30px;
    }
  }
}
.page-menu {
  position: fixed;
  background-color: $bg-color;
  overflow: hidden;
  overflow-y: auto;
  border-right: $blocks-border;
  height: calc(100vh - 120px);
  width: 256px;

  &__file-storage {
    border-bottom: $blocks-border;
    height: calc(100vh - 513px);
    overflow: hidden;
    overflow-y: auto;
  }

  &__folder-list {
    @extend %app-font;
    font-size: 1.2rem;
    line-height: 150%;
    text-transform: uppercase;
    color: $main-color;
    padding-left: 37px;
    list-style: none;
    padding-bottom: 14px;

    &::before {
      content: url("@/assets/img/angle-right.png");
      position: relative;
      top: 0px;
      right: 20px;
      height: 0px;
      float: left;
    }
  }

  &__folder-item {
    @extend %app-font;
    font-size: 1.2rem;
    line-height: 15px;
    color: $text-color;
    text-transform: none;
    padding-left: 16px;
    background: url(@/assets/img/angle-right-bold.png) no-repeat 0 2px;
    padding-bottom: 13px;

    &:first-child {
      margin-top: 14px;
    }
  }

  &__location {
    border-bottom: $blocks-border;
    @extend %app-font;
    font-size: 1.4rem;
    line-height: 17px;
    color: $text-color;
    padding: 15px 31px;
  }

  &__eth-price {
    border-bottom: $blocks-border;
    @extend %app-font;
    font-size: 1.4rem;
    line-height: 17px;
    color: $text-color;
    padding: 19px;

    & p {
      margin: 0px 0px 0px 35px;
      height: 17px;
    }

    &::before {
      content: url("@/assets/img/eth-icon.png");
      height: 0px;
      float: left;
      margin: -5px 5px;
    }
  }

  &__btc-price {
    border-bottom: $blocks-border;
    @extend %app-font;
    font-size: 1.4rem;
    line-height: 17px;
    color: $text-color;
    padding: 19px;

    & p {
      margin: 0px 0px 0px 35px;
      height: 17px;
    }

    &::before {
      content: url("@/assets/img/btc-icon.png");
      height: 0px;
      float: left;
      margin: -5px 0px;
    }
  }

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

.google-widget {
  position: fixed;
  top: 92px;
  right: 13px;
  width: 48px;
  height: 252px;
  background-image: url(@/assets/img/google-w.jpg);
  z-index: 99;
}

.page-main {
  position: relative;
  display: block;
  background-color: $bg-color;
  margin-left: 256px;
  height: calc(100vh - 120px);
  overflow: hidden;
  overflow-y: auto;

  &__sort-options {
    position: absolute;
    top: 43px;
    left: 88px;
    height: 16px;
    @extend %app-font;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 15px;
    text-transform: uppercase;
    color: $main-color;
    cursor: pointer;

    &::after {
      content: url("@/assets/img/angle-top-bold.png");
      width: 16px;
      height: 16px;
      margin-left: 6px;
      vertical-align: middle;
    }
  }

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

  &__folder-area {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin: 95px 168px 0px 64px;
    width: auto;
    height: auto;
    overflow: hidden;
    overflow-y: auto;
    min-width: 350px;
  }

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

  &__available-spase {
    position: absolute;
    top: 15px;
    left: 24px;
    @extend %app-font;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 15px;
    text-transform: uppercase;

    a {
      color: $available-spase-color;
    }
  }

  &__recently-deleted {
    position: absolute;
    top: 15px;
    right: 24px;
    @extend %app-font;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 15px;
    text-transform: uppercase;

    a {
      color: $main-color;
    }
  }
}
</style>
