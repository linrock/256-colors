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
    section#table-of-color-codes
      .container
        h2 Table of color codes
        p
          | The colors in the table show the default xterm colors.
          | If you've modified your terminal color scheme, the first
          | 16 color codes will show up differently.
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
  footer
    .container
      a(href="https://robotmoon.com") home
      a(href="javascript:window.scrollTo(0,0)") back to top
      a(href="https://github.com/linrock/256-colors") source code

</template>

<script>
  import ColorSpan from './components/ColorSpan.vue'
  import ColorSquares from './sections/ColorSquares.vue'
  import Example from './sections/Example.vue'
  import PromptExample from './sections/PromptExample.vue'
  import Square from './components/Square.vue'
  import COLORS from './utils/colors'

  export default {
    data() {
      return { COLORS };
    },
    components: {
      ColorSpan,
      ColorSquares,
      Square,
      Example,
      PromptExample,
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
    margin-bottom 2rem

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

  section#table-of-color-codes
    color #ccc
    background #222

    table
      color #ccc

      th
        text-align left
        padding-right 30px
        padding-bottom 10px

      td
        padding-right 30px

    .square
      width 18px
      height 18px

  @media screen and (max-width: 60rem)
    .container
      width 100%
      > *
        width 100% !important

    .flex-responsive
      display block

</style>
