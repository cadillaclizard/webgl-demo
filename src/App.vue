<template>
  <div class="app">
    <nav-cmp/>
    <editor-cmp />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import NavCmp from './Nav.vue';
import EditorCmp from './Editor.vue'

@Component({
  components: {
    NavCmp,
    EditorCmp
  }
})
export default class AppComponent extends Vue {}
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import '~typeface-lato/index.css';
* {box-sizing: border-box;}

body {
  color: #05396BFF;
  background: #5adc94ff;
  font-family: 'Lato';
}
</style>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

}
</style>