<template lang='pug'>
    .recommended-cards
      .title  Live channels we think you'll like
      .cards
        ChannelCard(v-for='i in 5')

</template>

<script>
import ChannelCard from "./ChannelCard";
export default {
  components: {
    ChannelCard
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.recommended-cards {
  border-bottom: $border-bottom;
  padding-bottom: 2rem;
  padding-top: 2rem;
  .title {
    font-weight: bold;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-flow: dense;
    gap: 1rem;
    margin-top: 1rem;
  }
}
@media (max-width: $breakpoint-mobile) {
  .recommended-cards {
    padding-bottom: 1rem;
    padding-top: 1rem;
    /*   .cards {
      overflow-x: scroll;
      grid-auto-flow: column;
    } */
  }
}
</style>