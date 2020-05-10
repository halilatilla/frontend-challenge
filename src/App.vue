<script>
import "./styles/normalize.css";
import Header from "./components/Header";
import RecommendedChannles from "./components/RecommendedChannles";
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
  display: grid;
  grid-template-columns: max-content 1fr;
  align-content: flex-start;
  .header {
    grid-column: 1/3;
  }
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
