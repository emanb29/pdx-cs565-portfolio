<template>
  <div id="top">
    <nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
})
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-image: url('~assets/images/squirreldash.png');
  background-repeat: no-repeat;
  background-size: 200px;
  background-position: bottom 20px right 20px;
  background-attachment: fixed;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
