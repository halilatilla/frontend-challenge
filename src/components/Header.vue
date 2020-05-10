<script>
import Search from "../components/Search";
export default {
  components: {
    Search
  }
};
</script>


<template lang='pug'>
  nav.header
    .header-left
        router-link(to='/')
          img(class='logo' src='../assets/logo.png')
        router-link(to='/Browse')
          .item Browse
        router-link(to='/Exports')
          .item Exports
        router-link(to='/Music')
          .item Music
    Search
    .header-right        
</template>


<style scoped lang="scss">
.header {
  background-color: $bg-color;
  height: 40px;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
  &-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 25px;
      padding-left: 6px;
      padding-right: 6px;
    }
    .item {
      text-decoration: none;
      list-style: none;
      padding: 9px;
      margin-left: 3px;
      height: 100%;
      font-size: 14px;
      &:hover {
        color: $base-color;
      }
    }
  }
  &-search {
  }
}
</style>
