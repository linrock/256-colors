<template lang="pug">
  #app
    header
      .container
        h1 xterm 256 colors
    color-squares
    example
    color-table
    footer
      .container
        a(href="https://github.com/linrock/256-colors") source code

</template>

<script>
  import ColorSquares from './components/ColorSquares.vue'
  import ColorTable from './components/ColorTable.vue'
  import Example from './components/Example.vue'

  export default {
    name: 'app',
    components: {
      ColorSquares,
      ColorTable,
      Example
    }
  }
</script>

<style lang="stylus">
  body
    margin 0

  header
    background #111
    padding 8px 0

  footer
    background #111
    padding 12px 0
    color white

    a
      color inherit

  h1
    color white
    margin 0
    font-size 20px

  #app
    font-family Courier, serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50

  .container
    width 520px
    margin 0 auto

  .main
    margin 40px auto

</style>
