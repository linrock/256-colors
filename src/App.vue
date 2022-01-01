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
    section#background-colors.color-squares
      .container.flex-responsive
        aside
          h3 Background colors
          div
            | For colored background text, try `tput setab`
          code
            | echo $(tput setab 18)256
            | $(tput setab 20)colors
          div
            | The above gives you the below colored output
          code
            color-span(:code="18" :bg="true") 256&nbsp;
            color-span(:code="20" :bg="true") colors

        .squares-256
          .container-width-8
            square(v-for="i in 16" :key="i-1"
                   :code="i - 1") {{ i - 1 }}
          .container-6x6
            .s-6x6(v-for="i in 6" :key="`sq-${i}`")
              square(v-for="j in 36" :key="16 + (i-1)*36 + (j-1)"
                     :code="squares[i-1][j-1]") {{ squares[i-1][j-1] }}
          .container-width-8
            square(v-for="i in 24" :key="231 + i"
                   :code="231 + i") {{ 231 + i }}

    section#foreground-colors.color-text
      .container.flex-responsive
        aside
          h3 Foreground colors
          div
            | For colored foreground text, try `tput setaf`
          code
            | echo $(tput setaf 214)256
            | $(tput setaf 202)colors
          div
            | You can also use printf in bash
          code
            | printf "$(tput setaf 214)256
            | $(tput setaf 202)colors"
          div
            | Both the above will show colored foreground text
          code
            color-span(:code="214") 256
            | &nbsp;
            color-span(:code="202") colors

        .squares-256
          .container-width-8.top
            color-text(v-for="i in 16" :key="i-1"
                       :code="i-1")
          .container-6x6
            .s-6x6(v-for="i in 6" :key="`sq-${i}`")
              color-text(v-for="j in 36"
                         :key="16 + (i-1)*36 + (j-1)"
                         :code="squares[i-1][j-1]")
          .container-width-8.bottom
            color-text(v-for="i in 24" :key="231 + i"
                       :code="231 + i")
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
  import ColorSpan from './components/ColorSpan'
  import ColorText from './components/ColorText'
  import Example from './sections/Example'
  import PromptExample from './sections/PromptExample'
  import Square from './components/Square'
  import COLORS from './utils/colors'
  import sixSquares from './utils/squares'

  export default {
    data() {
      return {
        COLORS,
        squares: sixSquares(),
      };
    },
    components: {
      ColorSpan,
      ColorText,
      Square,
      Example,
      PromptExample,
    }
  }
</script>

<style lang="stylus">
  square-size = 2rem

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

  section
    padding 2rem 0

    &.color-squares
      letter-spacing -1px
      background #222

    &.color-text
      letter-spacing -1px
      background #1f1f1f

  .squares-256
    font-size 0.8rem

  .container-width-8
    width square-size * 8
    height square-size *  2
    margin-bottom square-size
    display flex
    flex-wrap wrap

  .container-6x6
    width square-size * 6 * 2 + square-size
    display flex
    flex-wrap wrap
    justify-content space-between

  .s-6x6
    width square-size * 6
    height square-size * 6
    display flex
    flex-wrap wrap
    margin-bottom square-size

  .square
    width square-size
    height square-size
    text-align center
    line-height square-size

  aside
    width 50%
    color white
    padding-right 2rem
    line-height 1.5rem



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
