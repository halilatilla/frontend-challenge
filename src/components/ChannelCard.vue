<script>
import TagButton from "./TagButton";
import Thumbnail from "./Thumbnail";
import TagLive from "./TagLive";
export default {
  props: [],
  components: {
    TagButton,
    Thumbnail,
    TagLive
  }
};
</script>


<template lang='pug'>
  .container 
    TagLive
    .img-previev
        img(src='https://static-cdn.jtvnw.net/previews-ttv/live_user_anomaly-440x248.jpg')
    .info
        .thumbnail
          Thumbnail(children='https://static-cdn.jtvnw.net/jtv_user_pictures/anomaly-profile_image-0be1a6abbc7a9f45-70x70.png')
        .detail
            .item.title walorant lan with steffe
            .item.username anomaly
            .item.game-name Valorant
            .tags
                .tags-item
                  TagButton(children='English')
                .tags-item  
                  TagButton(children='Drops Enabled')
</template>


<style scoped lang="scss">
.container {
  position: relative;
  .img-previev {
    width: 100%;
    overflow: hidden;
    cursor: pointer;
    img {
      transition: all 0.3s ease;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .info {
    display: grid;
    grid-template-columns: max-content 1fr;
    margin-top: $base-margin;
    .thumbnail {
      width: 40px;
      height: 40px;
    }
    .detail {
      margin-left: $base-margin;
      .item {
        font-size: $base-font-size;
        padding: 2px;
        cursor: pointer;
        &:hover {
          color: $base-color;
        }
      }
      .title {
        text-transform: uppercase;
      }
      .tags {
        display: flex;
        margin-top: $base-margin;
        &-item {
          margin-right: $base-margin;
        }
      }
    }
  }
}
</style>
