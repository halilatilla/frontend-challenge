<template lang='pug'>
    .recommended-cards
      .cards
        PreviewCard

</template>

<script>
import PreviewCard from "./PreviewCard";
export default {
  components: {
    PreviewCard
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.recommended-cards {
  border-bottom: $border-bottom;
  padding-bottom: 2rem;
  padding-top: 2rem;
  .cards {
    max-width: 1180px;
    margin: 0 auto;
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