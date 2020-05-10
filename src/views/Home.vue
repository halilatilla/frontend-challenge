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

<template lang='pug'>
  .home
    PreviewCards
    ChannelCards
    GameCards

</template>


<style scoped lang='scss'>
.home {
  padding: 2rem;
  overflow: hidden;
  margin-left: 50px;
}
@media (max-width: $breakpoint-mobile) {
  .home {
    padding: 1rem;
  }
}
</style>