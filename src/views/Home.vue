<template lang='pug'>
  .home
    ChannelCards
    GameCards

</template>

<script>
import ChannelCards from "../components/ChannelCards";
import GameCards from "../components/GameCards";
export default {
  components: {
    ChannelCards,
    GameCards
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