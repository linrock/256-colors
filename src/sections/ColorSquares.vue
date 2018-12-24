<template lang="pug">
  div
    section#background-colors.color-squares
      .container
        .container-width-8
          square(v-for="i in 16" :key="i-1" :code="i-1") {{ i - 1 }}
        .container-6x6
          .s-6x6(v-for="i in 6" :key="`sq-${i}`")
            square(v-for="j in 36" :key="16 + (i-1)*36 + (j-1)" :code="squares[i-1][j-1]")
              | {{ squares[i-1][j-1] }}
        .container-width-8
          square(v-for="i in 24" :key="231 + i" :code="231 + i") {{ 231 + i }}

    section#foreground-colors.color-text
      .container
        .container-width-8
          color-text(v-for="i in 16" :key="i-1" :code="i-1")
        .container-6x6
          .s-6x6(v-for="i in 6" :key="`sq-${i}`")
            color-text(v-for="j in 36" :key="16 + (i-1)*36 + (j-1)" :code="squares[i-1][j-1]")
        .container-width-8
          color-text(v-for="i in 24" :key="231 + i" :code="231 + i")

</template>

<script>
  import Square from '../components/Square'
  import ColorText from '../components/ColorText'
  import sixSquares from '../utils/squares'

  export default {
    name: 'HelloWorld',
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
  square-size = 26px

  .container-width-8
    width square-size * 8
    height square-size *  2
    display flex
    flex-wrap wrap
    padding square-size 0

  .container-6x6
    width square-size * 6 * 3 + square-size * 2
    height square-size * 6 * 2 + square-size
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
    font-size 12px
    letter-spacing -1px
    text-align center
    line-height square-size

  section
    padding-bottom 40px

    &.color-squares
      background #222

    &.color-text
      background #1f1f1f

</style>
