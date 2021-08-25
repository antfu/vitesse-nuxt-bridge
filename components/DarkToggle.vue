<script setup lang='ts'>
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button class="!outline-none" @click="toggleDark()">
    <carbon-moon v-if="isDark" />
    <carbon-sun v-else />
  </button>
</template>
