<template lang="pug">
#xterm-color-codes.example
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

</template>

<script>
  import ColorSpan from '../components/ColorSpan'

  export default {
    components: {
      ColorSpan
    }
  }
</script>

<style lang="stylus" scoped>
  .example
    color white
    padding 2rem 0
    background #333

  code
    border-radius 3px
    padding 0.5rem 1rem
    background #111
    margin 20px 0
    display block

</style>
