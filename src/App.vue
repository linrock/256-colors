<template>
  <div id="app">
    <header>
      <div class="container">
        <h1>xterm 256 colors</h1>
      </div>
    </header>

    <div class="container">
      <HelloWorld/>
      <div class="example">
        As an example of using color codes, do the following
      </div>
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
