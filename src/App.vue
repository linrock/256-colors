<template lang="pug">
  #app
    header
      .container
        h1 xterm 256 colors

    .container
      color-squares
      .example
        | As an example of using color codes, do the following
      color-table

    footer

</template>

<script>
  import ColorSquares from './components/ColorSquares.vue'
  import ColorTable from './components/ColorTable.vue'

  export default {
    name: 'app',
    components: {
      ColorSquares,
      ColorTable
    }
  }
</script>

<style lang="stylus">
  body
    background #222
    margin 0

  header
    background #111
    padding 8px 0

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
    width 500px
    margin 0 auto

  .main
    margin 40px auto

</style>
