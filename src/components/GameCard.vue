<script>
import TagButton from "./TagButton";
export default {
  props: [],
  components: {
    TagButton
  }
};
</script>


<template lang='pug'>
  .container 
    .img-previev
        img(src='https://static-cdn.jtvnw.net/ttv-boxart/VALORANT-188x250.jpg')
    .info
        .detail
            .item.title walorant
            .item.subcribe 274K Viewers
            .tags
                .tags-item  
                  TagButton(children='Fps')
                .tags-item  
                  TagButton(children='Shoter')
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
        font-weight: bold;
      }
      .subcribe {
        font-size: 12px;
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
