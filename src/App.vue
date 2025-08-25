<script setup lang="ts">
import Sider from "./layouts/Sider.vue";
</script>

<template>
  <n-split
    direction="horizontal"
    style="height: 100vh"
    max="300px"
    min="150px"
    default-size="200px"
  >
    <template #1>
      <Sider />
    </template>
    <template #2>
      Pane 2
    </template>
  </n-split>
</template>

<style scoped>
</style>
