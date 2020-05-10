<script>
import Thumbnail from "../components/Thumbnail";
export default {
  props: ["children"],
  components: {
    Thumbnail
  }
};
</script>


<template lang='pug'>
  .container
    Thumbnail 
    Thumbnail 
    Thumbnail 
    Thumbnail 
    Thumbnail 
    Thumbnail 
    Thumbnail 
    Thumbnail 
    Thumbnail 
</template>


<style scoped lang="scss">
.container {
  width: 40px;
  height: 100%;
  overflow: hidden;
}
</style>
