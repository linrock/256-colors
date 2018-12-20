<template>
  <div class="square" :style="[{ background: COLORS[code] }]"></div>
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
