<template lang="pug">
  section
    .container
      table.color-table
        thead
          tr
            th color
            th code
            th hex
            th ansi color code
        tbody
          tr(v-for="i in 256" :key="i")
            td
              square(:code="i - 1")
            td {{ i-1 }}
            td {{ COLORS[i-1] }}
            td \e[38;5;{{ i - 1 }}m

</template>

<script>
  import Square from '../components/Square'
  import COLORS from '../utils/colors'

  export default {
    data() {
      return {
        COLORS
      }
    },

    components: {
      Square
    }
  }
</script>

<style lang="stylus" scoped>
  section
    color #ccc
    background #222
    padding 40px 0 80px

  table
    th
      text-align left
      padding-right 30px
      padding-bottom 10px

    td
      padding-right 30px

  .square
    width 18px
    height 18px

</style>
