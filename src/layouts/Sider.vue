<script setup lang="ts">
import SiderItem from "../components/SiderItem.vue";
</script>
<template>
  <div class="container">
    <SiderItem :file="'filename1.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename2.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename3.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename4.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename5.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename6.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename7.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename8.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename9.m4a'" :timestamp="1756109360" />
    <SiderItem :file="'filename10.m4a'" :timestamp="1756109360" />
  </div>
</template>
<style scoped>
.container {
  height: 100vh;
  overflow-y: auto;
}
</style>
