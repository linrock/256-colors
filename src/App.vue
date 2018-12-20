<template>
  <div id="app">
    <header>
      <h1>xterm 256 colors</h1>
    </header>

    <HelloWorld/>
    <div class="example">
      As an example of using color codes, do the following
    </div>

    <footer></footer>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
  }
</script>

<style lang="stylus">
  body
    background #222

  header
    background #111

  h1
    color white
    margin-bottom 60px
    font-size 20px

  #app
    font-family Courier, serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50
    margin 40px auto
    width 500px

</style>
