<template lang="pug">
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
  section
    color white
    padding 2rem 0
    background #1f1f1f

</style>
