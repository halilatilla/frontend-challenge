<script>
export default {
  props: ["children"]
};
</script>


<template lang='pug'>
  .tag-button
    span {{ children }}     
</template>


<style scoped lang="scss">
.tag-button {
  background-color: $bg-color-button;
  border-radius: $border-radius-tag;
  height: 18px;
  padding: 0 9px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-size: 12px;
    font-weight: bold;
  }
  &:hover {
    opacity: 0.9;
  }
}
</style>
