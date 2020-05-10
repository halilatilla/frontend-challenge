<template lang='pug'>
    .recommended-cards
      .cards
        .item(v-for='i in 4')
          router-link(to='/detail')
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
  overflow-x: scroll;
  .cards {
    max-width: 1180px;
    margin: 0 auto;
    overflow-x: scroll;
    overflow-y: hidden;
    display: grid;
    grid-auto-columns: 800px;
    grid-auto-flow: column;
    .item {
      margin-right: 18px;
    }
  }
}
@media (max-width: $breakpoint-mobile) {
  .recommended-cards {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }
}
</style>