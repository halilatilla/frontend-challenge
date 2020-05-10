<script>
export default {
  props: ["children"]
};
</script>


<template lang='pug'>
  .thumbnail
    img(:src='children')  
</template>


<style scoped lang="scss">
.thumbnail {
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100%;
  }
}
</style>
