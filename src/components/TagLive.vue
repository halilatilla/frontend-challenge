
<template lang='pug'>
  .live-tag
    span LIVE   
</template>


<style scoped lang="scss">
.live-tag {
  background-color: red;
  height: 18px;
  width: 35px;
  position: absolute;
  left: 12px;
  top: 12px;
  border-radius: $border-radius-button;
  text-align: center;
  span {
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
