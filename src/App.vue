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
        a(href="#json-array-of-color-codes")
          color-span(code="229") JSON array of color codes
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
            square-div(v-for="i in 16" :key="i-1"
                       :code="i - 1") {{ i - 1 }}
          .container-6x6
            .s-6x6(v-for="i in 6" :key="`sq-${i}`")
              square-div(v-for="j in 36" :key="16 + (i-1)*36 + (j-1)"
                         :code="squares[i-1][j-1]") {{ squares[i-1][j-1] }}
          .container-width-8
            square-div(v-for="i in 24" :key="231 + i"
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
    section#xterm-color-codes.example
      .container
        h2 Using xterm color codes
        div
          | For an example of using xterm color codes, try the
          | following command in bash or your favorite xterm terminal.
          | Most of them have 256-color support these days.
        code
          | echo $(tput setaf 214)256
          | $(tput setaf 202)colors
        div
          | You can also use printf in bash
        code
          | printf "$(tput setaf 214)256
          | $(tput setaf 202)colors"
        div
          | Or try the equivalent command using ANSI control sequences
        code
          | echo -e "\e[38;5;214m256 \e[38;5;202mcolors"
        div
          | All of the above commands will show colored foreground text
        code
          color-span(:code="214") 256
          | &nbsp;
          color-span(:code="202") colors
        div
          | For colored background text, you can use `tput setab`
        code
          | echo $(tput setab 214)256
          | $(tput setab 202)colors
        div
          | Which gives you the following colored output
        code
          color-span(:code="214" :bg="true") 256&nbsp;
          color-span(:code="202" :bg="true") colors
    section#shell-prompt
      .container
        h2 Color codes in a shell prompt
        div
          | When using color codes as part of a shell (bash, zsh) prompt,
          | make sure to enclose them with brackets to tell the shell that
          | they're non-printing characters that take up no space.
        code
          | \[$(tput setaf 214)256\]
        div
          | Without brackets, the command prompt will wrap incorrectly
          | when typing a really long command. You may also want to
          | tell the shell to reset the colors at the end of the prompt.
        code
          | \[$(tput sgr0)\]
        div
          | Here's a simple example of a colored bash prompt
        code
          | export PS1='\[$(tput setaf 82)\]\W $ \[$(tput sgr0)\]'
        div
          | Which gives you this when in the home directory
        code
          color-span(:code="82") ~ $
    section.table-and-array-of-codes
      .container.flex-responsive
        section#table-of-color-codes
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
                  square-div(:code="i - 1")
                td {{ i-1 }}
                td {{ COLORS[i-1] }}
                td \e[38;5;{{ i - 1 }}m
        section#json-array-of-color-codes
          h2 JSON array of color codes
          code
            | {{ colorsArrayStr }}
  footer
    .container
      a(href="https://robotmoon.com") home
      a(href="javascript:window.scrollTo(0,0)") back to top
      a(href="https://github.com/linrock/256-colors") source code

</template>

<script>
  import ColorSpan from './components/ColorSpan'
  import ColorText from './components/ColorText'
  import SquareDiv from './components/SquareDiv'
  import COLORS from './utils/colors'
  import sixSquares from './utils/squares'

  export default {
    data() {
      const colorsArrayStr =
        '[\n' + COLORS.map((color) => `  ${color},`).join('\n') + '\n]';
      return {
        COLORS,
        squares: sixSquares(),
        colorsArrayStr,
      };
    },
    components: {
      ColorSpan,
      ColorText,
      SquareDiv,
    }
  }
</script>

<style lang="stylus">
  square-size = 2rem

  body
    font-family Courier, serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #e1e1e1
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
      opacity 0.9
      margin-right 2rem

      &:hover
        opacity 1

  h1, h2, h3
    font-size 1rem
    margin 0

  h1
    color #9e9e9e

  h2
    color #ddd
    margin-bottom 1rem
    font-weight bold

  h3
    color #e4e4e4
    margin-bottom 2rem

  code
    border-radius 3px
    padding 1rem
    background #111
    margin 1rem 0
    display block
    width 100%
    white-space pre

  header aside
    width 50%

  .container
    width 60rem
    padding 2rem
    margin 0 auto

  .flex-responsive
    display flex

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
    padding-right 2rem
    line-height 1.5rem

  section
    padding 2rem 0

    &.color-squares
      letter-spacing -1px
      background #222

    &.color-text
      letter-spacing -1px
      background #1f1f1f

  section#background-colors
    .square
      color #2c3e50

  section#xterm-color-codes.example
    background #333

  section#shell-prompt
    background #1f1f1f

  section.table-and-array-of-codes
    background #222
    padding-top 0

  section#table-of-color-codes
    width 50%
    padding-right 1rem

    table
      color #ccc

      th
        text-align left
        padding-right 1rem
        padding-bottom 1rem

      td
        padding-right 2rem

    .square
      width 1rem
      height 1rem

  section#json-array-of-color-codes
    width 50%
    padding-left 1rem

  @media screen and (max-width: 60rem)
    .container
      width 100%
      > *
        width 100% !important

    .flex-responsive
      display block

</style>
