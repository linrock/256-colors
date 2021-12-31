<template lang="pug">
#app
  header
    .container.flex-responsive
      aside
        h1 xterm 256 colors
        h3 A guide to using colors in text terminals
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
  main
    color-squares
    example
    prompt-example
    color-table
  footer
    .container
      a(href="https://robotmoon.com") home
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

  html
    box-sizing border-box

  *
    box-sizing inherit

  header
    background #111
    padding 2rem 0 1rem

  nav
    color white
    background #111
    a
      display block
      padding-bottom 1rem
      text-decoration none
      &:hover span
        color white !important

  footer
    color white
    background #111
    padding 1rem 0

    a
      color inherit
      margin-right 2rem

  h1
    color #9e9e9e
    font-size 1rem
    margin 0

  h2
    color #ddd
    font-size 1rem
    margin 0
    margin-bottom 1rem
    font-weight bold

  h3
    color #e4e4e4
    font-size 1rem
    margin 0

  code
    border-radius 3px
    padding 1rem
    background #111
    margin 1rem 0
    display block

  header aside
    width 50%

  .container
    width 60rem
    padding 2rem
    margin 0 auto

  .flex-responsive
    display flex

  @media screen and (max-width: 60rem)
    .container
      width 100%
      > *
        width 100% !important

    .flex-responsive
      display block

</style>
