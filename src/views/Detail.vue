<script>
import DetailHeader from "../components/detail/DetailHeader";
import PreviewCards from "../components/PreviewCards";
import DetailCard from "../components/detail/DetailCard";

export default {
  components: {
    DetailCard,
    DetailHeader
  },
  computed: {}
};
</script>

<template lang='pug'>
  .detail
    DetailHeader
    DetailCard

</template>


<style scoped lang='scss'>
.detail {
  overflow: hidden;
  height: 100%;
  margin-left: 50px;
}
@media (max-width: $breakpoint-mobile) {
  .detail {
  }
}
</style>