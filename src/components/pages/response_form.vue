<template>
  <div>
    <div class="text">hello</div>
    <button @click="color = 'blue'">Make Blue</button>
    <child-component />
  </div>
</template>

<script>
import Response from './response.vue'
export default {
  components: {
    Response,
  },
  data() {
    return {
      color: 'red',
      font: {
        weight: '800',
      },
    }
  },
methods: {
  even(numbers) {
    return numbers.filter(number => number % 2 === 0)
  }
}
}

</script>

<style>
.text {
  color: v-bind(color);
  /* expressions (wrap in quotes) */
  font-weight: v-bind('font.weight');
}
</style>
