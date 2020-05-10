<script>
export default {};
</script>


<template lang='pug'>
  .search
     input(placeholder='Search')      
</template>


<style scoped lang="scss">
.search {
  background-color: $bg-color;
  input {
    width: 220px;
    height: 100%;
    border: 1px solid black;
    padding: 6px;
    background-color: $bg-color-button;
    border-radius: $border-radius-button;
    color: white;
    &::placeholder {
      color: $text-color;
      font-size: 14px;
    }
  }
}
</style>
