<template lang='pug'>
  .home
    PreviewCards
    ChannelCards
    GameCards

</template>

<script>
import PreviewCards from "../components/PreviewCards";
import ChannelCards from "../components/ChannelCards";
import GameCards from "../components/GameCards";
export default {
  components: {
    ChannelCards,
    GameCards,
    PreviewCards
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.home {
  padding: 2rem;
  overflow: hidden;
}
@media (max-width: $breakpoint-mobile) {
  .home {
    padding: 1rem;
  }
}
</style>