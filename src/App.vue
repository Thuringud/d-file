<template>
  <Header />
  <page-menu />
  <google-widget />
  <page-main />
  <Footer />
</template>

<script>
import Header from "@/components/header/Header";
import PageMenu from "@/components/page-menu/PageMenu";
import GoogleWidget from "@/components/ext_resources/GoogleWidget";
import PageMain from "@/components/page-main/PageMain";
import Footer from "@/components/footer/Footer";

export default {
  name: "App",
  components: { Header, PageMenu, GoogleWidget, PageMain, Footer },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
}
</style>
