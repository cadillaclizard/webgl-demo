<template>
  <div class="editor" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Renderer from './Renderer';

@Component
export default class EditorComponent extends Vue {
    renderer: Renderer = new Renderer();

    mounted() {
      this.renderer.mount(this.$el)
    }
}
</script>

<style lang="scss" scoped>
.editor {
  flex: 1;
  overflow: hidden;
}
</style>
