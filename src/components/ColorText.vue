<template lang="pug">
  .color-text(:style="[{ color: COLORS[code] }]") {{ code }}
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
  square-size = 26px

  .color-text
    font-family Courier
    font-size 12px
    width square-size
    height square-size
    line-height square-size

</style>
