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
                .item.username anomaly
                .item.game-name Valorant
                .subcribe 216 viewers
        .tags
            TagButton(children='English')
        .description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa nulla non ut fugit blanditiis error, modi esse nam quam ipsum aliquid minima illum placeat. Aspernatur similique quidem provident quas illo!
  </template>


<style scoped lang="scss">
.container {
  position: relative;
  display: grid;
  grid-template-columns: 4fr 2fr;
  box-shadow: 1px 2px 3px rgba($color: #000000, $alpha: 1);
  overflow: hidden;
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
    align-content: flex-start;
    padding: $base-margin;
    background-color: rgb(24, 24, 26);
    .thumbnail {
      width: 50px;
      height: 50px;
    }
    .detail {
      margin-left: $base-margin;
      .item {
        font-size: $base-font-size;
        padding: 2px;
        cursor: pointer;
        color: $base-color;
        &:hover {
          text-decoration: underline;
        }
      }
      .subcribe {
        color: white;
        font-size: 12px;
        padding: 2px;
      }
    }
    .tags {
      display: flex;
      margin-top: $base-margin;
    }
    .description {
      font-size: $base-font-size;
      margin-top: 12px;
      grid-column: 1/3;
    }
  }
}
</style>
