<script setup lang="ts">
import dayjs from "dayjs";
import { computed } from "vue";
import { store } from "../store";
const props = defineProps<{
  file: string;
  timestamp: number; // 秒
}>();

const setSelected = () => {
  store.curItem = props.file;
};

const selected = computed(() => {
  return store.curItem === props.file;
});
</script>
<template>
  <n-card
    hoverable
    class="sider-item"
    content-style="padding: 10px 15px;"
    :class="{ selected: selected }"
    @click="setSelected"
  >
    {{ file }}
    <br />
    <span class="timestamp">{{
      dayjs(timestamp * 1000).format("YYYY-MM-DD HH:mm")
    }}</span>
  </n-card>
</template>
<style scoped>
.sider-item {
  margin-top: 5px;
  cursor: pointer;
}

.timestamp {
  font-size: 12px;
  color: #939393;
}

.selected {
  background-color: #dfedd6;
}
</style>
