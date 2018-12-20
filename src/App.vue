<template>
  <div id="app">
    <h1>xterm 256 colors</h1>
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

  h1
    color white
    margin-bottom 60px

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    margin 60px auto
    width 500px

</style>
