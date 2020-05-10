<script>
import "./styles/normalize.css";
import Header from "./components/common/Header";
import RecommendedChannles from "./components/common/RecommendedChannles";
export default {
  components: {
    Header,
    RecommendedChannles
  }
};
</script>
<template lang='pug'>
  #app
    Header.header
    RecommendedChannles
    router-view  
</template>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
}
</style>
