<script>
import Thumbnail from "../components/Thumbnail";
export default {
  props: ["children"],
  components: {
    Thumbnail
  }
};
</script>


<template lang='pug'>
  .container
    .item
      Thumbnail(children='https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-70x70.png') 
    .item
      Thumbnail(children='https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-70x70.png') 
    .item
      Thumbnail(children='https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-70x70.png') 
    .item
      Thumbnail(children='https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-70x70.png') 
    .item
      Thumbnail(children='https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-70x70.png') 
    .item
      Thumbnail(children='https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-70x70.png') 
</template>


<style scoped lang="scss">
.container {
  width: 50px;
  height: 100%;
  overflow: hidden;
  background-color: $bg-color-secondary;
  display: flex;
  align-items: center;
  flex-direction: column;
  .item {
    width: 30px;
    margin-top: 9px;
  }
}
</style>
