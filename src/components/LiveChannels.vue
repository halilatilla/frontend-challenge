<template lang='pug'>
    .recommended-cards
      .title  Live channels we think you'll like
      .cards
        GameCard
        GameCard
        GameCard
        GameCard

</template>

<script>
import GameCard from "./GameCard";
export default {
  components: {
    GameCard
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.recommended-cards {
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
</style>