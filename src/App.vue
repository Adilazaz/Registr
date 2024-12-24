<script setup>
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

// Определение компонента layout на основе указанного в текущем маршруте макета, по умолчанию
// используется компонент <layout-default></layout-default>.
const layout = computed(() => {
  return "layout-" + (route.meta.layout || "default").toLowerCase();
});

</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
