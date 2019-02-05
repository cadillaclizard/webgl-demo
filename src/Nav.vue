<template>
  <nav>
    <span>Web OBJ Editor</span>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class NavComponent extends Vue {}
</script>

<style lang="scss" scoped>
nav {
  width: 100vw;
  height: 100px;
  padding: 50px 25px;
  display: flex;
  align-items: center;
  letter-spacing: 5px;
  font-size: 26px;
}
</style>
