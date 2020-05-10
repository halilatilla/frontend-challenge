<template lang='pug'>
  .home
    LiveChannels

</template>

<script>
import GameCard from "../components/GameCard";
import LiveChannels from "../components/LiveChannels";
export default {
  components: {
    GameCard,
    LiveChannels
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.home {
  padding: 2rem;
}
</style>