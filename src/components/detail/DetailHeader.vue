<script>
import Thumbnail from "../Thumbnail";
import Button from "../Button";
export default {
  props: [],
  components: { Thumbnail, Button }
};
</script>


<template lang='pug'>
  .detail-header
    .detail-header-left
        .thumbnail
            Thumbnail(children='https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-70x70.png')
        .username Anomaly
    .detail-header-center
        .item.active  Home    
        .item  Videos    
        .item  Clips   
        .item  Followers 
    .detail-header-right
        .item
            Button(children='Follow' svg='love-and-romance.svg' activeBg='activeBg')
        .item    
            Button(children='Subscribe' svg='signs.svg' )
</template>


<style scoped lang="scss">
.detail-header {
  height: 50px;
  background-color: $bg-color-secondary;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: $base-margin;
  padding-right: $base-margin;
  &-left {
    display: flex;
    align-items: center;
    .thumbnail {
      width: 36px;
      height: 36px;
    }
    .username {
      padding: 9px;
      cursor: pointer;
      font-size: $base-font-size;
    }
  }
  &-center {
    display: flex;
    font-size: $base-font-size;
    .item {
      padding: 9px 0;
      margin-left: 18px;
      cursor: pointer;
      &:hover {
        color: $base-color;
      }
    }
    .active {
      border-bottom: 1px solid $base-color;
      color: $base-color;
    }
  }
  &-right {
    display: flex;
    .item {
      margin-right: $base-margin;
    }
  }
}

@media (max-width: $breakpoint-mobile) {
  .detail-header {
    &-center {
      display: none;
    }
  }
}
</style>
