<template>
  <div class="color-text" :style="[{ color: COLORS[code] }]">{{ code }}</div>
</template>

<script>
  import COLORS from '../utils/colors'

  export default {
    props: {
      code: {
        type: Number,
        required: true
      },
    },
    data() {
      return {
        COLORS
      }
    }
  }
</script>

<style lang="stylus" scoped>
  square-size = 24px

  .color-text
    font-family Courier
    font-size 12px
    width square-size
    height square-size

</style>
