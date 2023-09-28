<template>
  <div>
    <h1>Chip8</h1>
    <canvas id="glcanvas" tabindex='1'></canvas>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://not-fl3.github.io/miniquad-samples/gl.js",
      children: "load('../chip8/chip8_wasm.wasm?init')",
    }
  ],
})
</script>

<style scoped>
canvas {
  margin: 0px;
  padding: 0px;
  width: 640px;
  height: 320px;
  overflow: hidden;
  position: absolute;
  background: black;
  z-index: 100;
}
</style>
