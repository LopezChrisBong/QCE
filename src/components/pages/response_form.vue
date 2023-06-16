<script>
export default{
 
  data() {
  return {
 colorfull: false
  }
  },

  computed:{
    adjustStyle() {
      return {
        green: this.colorful,
        err: true,
        other:false
      }
    }
  }
}
</script>
<template>
  <h1 class="staticClass" :class="adjustStyle">Component</h1>
  <button @click="colorfull =!colorfull">Apply Style</button>
</template>

<style>
h1{

}
.green {
  background-color: green;
  color:#fff;
}
</style>