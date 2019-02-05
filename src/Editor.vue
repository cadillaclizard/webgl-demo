<template>
  <div class="editor">
    <span>Editor Component</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class EditorComponent extends Vue {
    
}
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 2px solid #05396BFF;
}

.editor > span {
  font-size: 26px;
  text-decoration: underline;
}
</style>
