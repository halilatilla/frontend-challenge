<template lang='pug'>
  #app
    Header
    router-view  
</template>

<script>
import "./styles/normalize.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
