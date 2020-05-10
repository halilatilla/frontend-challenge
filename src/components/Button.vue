<script>
export default {
  props: ["children", "activeBg", "svg"],
  computed: {
    setBg() {
      return this.activeBg ? "active-bg" : null;
    }
  }
};
</script>


<template lang='pug'>
  .button(:class='setBg')
    img(:src="require(`../assets/${svg}`)" v-if='svg')
    span {{ children }}
</template>


<style scoped lang="scss">
.button {
  background-color: $bg-color-button;
  border-radius: $border-radius-button;
  height: 30px;
  padding: 0 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    font-size: $base-font-size;
  }
  img {
    width: 15px;
    margin-right: 6px;
  }
  &:hover {
    opacity: 0.9;
  }
}
.active-bg {
  background-color: $base-color;
}
</style>
