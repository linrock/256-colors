<template lang="pug">
div
  section#background-colors.color-squares
    .container
      aside
        h3 Background colors
        p
          | These are background colors
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
          | All of the above commands will show colored foreground text
        code
          color-span(:code="214") 256
          | &nbsp;
          color-span(:code="202") colors
        div
          | For colored background text, you can use `tput setab`

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
    .container
      aside
        h3 Foreground colors
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
          | All of the above commands will show colored foreground text
        code
          color-span(:code="214") 256
          | &nbsp;
          color-span(:code="202") colors
        div
          | For colored background text, you can use `tput setab`

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

</template>

<script>
  import Square from '../components/Square'
  import ColorText from '../components/ColorText'
  import sixSquares from '../utils/squares'

  export default {
    data() {
      return {
        squares: sixSquares()
      }
    },
    components: {
      Square,
      ColorText,
    }
  }
</script>

<style lang="stylus" scoped>
  square-size = 2rem

  .container
    display flex

  section
    padding-top 2rem
    padding-bottom 2.5rem
    letter-spacing -1px

    &.color-squares
      background #222

    &.color-text
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

  code
    border-radius 3px
    padding 8px 16px
    background #111
    margin 20px 0
    display block

</style>
