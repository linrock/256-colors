<template lang="pug">
#app
  header
    .container
      h1 xterm 256 colors
      h3 A guide to using colors in your terminal
      nav
        a(href="#background-colors")
          color-span(code="202") Background colors
        a(href="#foreground-colors")
          color-span(code="208") Foreground colors
        a(href="#xterm-color-codes")
          color-span(code="214") Using xterm color codes
        a(href="#shell-prompt")
          color-span(code="220") Color codes in a shell prompt
        a(href="#table-of-color-codes")
          color-span(code="226") Table of color codes
  color-squares
  example
  prompt-example
  color-table
  footer
    .container
      a(href="https://github.com/linrock/256-colors") source code

</template>

<script>
  import ColorSpan from './components/ColorSpan.vue'
  import ColorSquares from './sections/ColorSquares.vue'
  import ColorTable from './sections/ColorTable.vue'
  import Example from './sections/Example.vue'
  import PromptExample from './sections/PromptExample.vue'

  export default {
    name: 'app',
    components: {
      ColorSpan,
      ColorSquares,
      ColorTable,
      Example,
      PromptExample
    }
  }
</script>

<style lang="stylus">
  body
    font-family Courier, serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50
    margin 0
    padding 0

  header
    background #111
    padding 8px 0

  nav
    color white
    background #111
    margin 15px 0
    a
      display block
      padding 2px 0
      font-size 14px
      text-decoration none
      &:hover span
        color white !important

  footer
    color white
    background #111
    padding 12px 0

    a
      color inherit

  h1
    color #9e9e9e
    font-size 20px
    margin 0

  h3
    color #e4e4e4
    font-size 16px
    margin 0

  h2
    color #ddd
    font-weight bold
    margin 0 0 25px

  .container
    width 520px
    margin 0 auto

  .main
    margin 40px auto

</style>
