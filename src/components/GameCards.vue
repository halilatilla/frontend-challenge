<template lang='pug'>
    .recommended-cards
      .title  Categories we think you'll like it
      .cards
        GameCard(v-for='i in 5')

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
  border-bottom: $border-bottom;
  padding-bottom: 2rem;
  padding-top: 2rem;
  .title {
    font-weight: bold;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-flow: dense;
    gap: 1rem;
    margin-top: 1rem;
  }
}
@media (max-width: $breakpoint-mobile) {
  .recommended-cards {
    padding: 1rem;
  }
}
</style>