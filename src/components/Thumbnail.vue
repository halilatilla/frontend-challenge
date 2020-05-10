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
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
