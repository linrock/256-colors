<template lang="pug">
  .square(:style="[{ background: COLORS[code] }]")
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
    },
    data() {
      return {
        COLORS
      }
    }
  }
</script>
