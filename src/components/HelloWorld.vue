<template>
  <div>
    <div class="color-squares">
      <div class="s-8x2">
        <square v-for="i in 16" :key="i-1" :code="i-1"/>
      </div>

      <div class="container-6x6">
        <div v-for="i in 6" :key="`sq-${i}`" class="s-6x6">
          <square v-for="j in 36" :key="16 + (i-1)*36 + (j-1)" :code="16 + (i-1)*36 + (j-1)"/>
        </div>
      </div>

      <div class="s-8x2">
        <square v-for="i in 24" :key="231 + i" :code="231 + i"/>
      </div>
    </div>

    <div class="color-text">
      <div class="s-8x2">
        <color-text v-for="i in 16" :key="i-1" :code="i-1"/>
      </div>

      <div class="container-6x6">
        <div v-for="i in 6" :key="`sq-${i}`" class="s-6x6">
          <color-text v-for="j in 36" :key="16 + (i-1)*36 + (j-1)" :code="16 + (i-1)*36 + (j-1)"/>
        </div>
      </div>

      <div class="s-8x2">
        <color-text v-for="i in 24" :key="231 + i" :code="231 + i"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Square from './Square'
  import ColorText from './ColorText'

  export default {
    name: 'HelloWorld',
    components: {
      Square,
      ColorText,
    }
  }
</script>

<style lang="stylus" scoped>
  square-size = 24px

  .s-8x2
    width square-size * 8
    height square-size *  2
    display flex
    flex-wrap wrap
    margin (square-size / 2)

  .s-6x6
    width square-size * 6
    height square-size * 6
    margin (square-size / 2)
    display flex
    flex-wrap wrap

  .container-6x6
    width square-size * 6 * 3 + square-size * 4
    display flex
    flex-wrap wrap

  .square
    width 24px
    height 24px

</style>
