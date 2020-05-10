<script>
import Search from "../components/Search";
import Button from "../components/Button";
export default {
  components: {
    Search,
    Button
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
    Search.header-search
    .header-right
      span.item
        img(src='../assets/interface.svg')
      span.item
        Button(children='Log in')       
      span.item
        Button(children='Sign up' activeBg="true")       
      span.item.svg
        img(src='../assets/man-avatar.svg')
   
</template>


<style scoped lang="scss">
.header {
  background-color: $bg-color-secondary;
  height: 50px;
  padding: 3px;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
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
  &-right {
    display: flex;
    .item {
      margin-left: $base-margin;
      img {
        width: 18px;
        cursor: pointer;
        padding: 6px;
        border-radius: $border-radius-button;
        &:hover {
          background-color: $bg-color-button;
        }
      }
    }
  }
}
@media (max-width: $breakpoint-mobile) {
  .header {
    &-left {
      .item {
        display: none;
      }
    }
    &-right {
      .item {
        &:last-child {
          display: none;
        }
      }
    }
  }
  .header-search {
    display: none;
  }
}
</style>
