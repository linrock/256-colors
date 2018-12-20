<template lang="pug">
  span(:style="[{ color: COLORS[code] }]")
    slot
    | &nbsp;

</template>

<script>
  import COLORS from '../utils/colors'

  export default {
    props: {
      code: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        COLORS
      }
    }
  }
</script>
