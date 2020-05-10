<script>
import TagLive from "../TagLive";

export default {
  components: {
    TagLive
  }
};
</script>


<template lang='pug'>
  .detail-card
    TagLive
    img(src='https://static-cdn.jtvnw.net/previews-ttv/live_user_anomaly-440x248.jpg')
</template>


<style scoped lang="scss">
.detail-card {
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
  }
}
</style>
