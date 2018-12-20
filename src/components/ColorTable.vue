<template lang="pug">
  section
    .container
      table.color-table
        thead
          tr
            th code
            th hex
            th rgb
            th ansi escape
            th tput
        tbody
          tr(v-for="i in 256" :key="i")
            td {{ i-1 }}
            td {{ COLORS[i-1] }}

</template>

<script>
  import COLORS from '../utils/colors'

  export default {
    data() {
      return {
        COLORS
      }
    }
  }
</script>

<style lang="stylus" scoped>
  section
    color #ccc
    background #222
    padding 40px 0 80px

</style>
