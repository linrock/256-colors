<template lang="pug">
span(:style="[{ [bg ? `background` : `color`]: COLORS[code] }]")
  slot

</template>

<script>
  import COLORS from '../utils/colors'

  export default {
    props: {
      code: {
        type: Number,
        required: true
      },
      bg: {
        type: Boolean,
        required: false,
      }
    },

    data() {
      return {
        COLORS
      }
    }
  }
</script>

<style scoped lang="stylus">
  span
    display inline-block
    line-height 19px

</style>
