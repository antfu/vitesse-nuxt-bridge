<script lang='ts'>
export default {
  data() {
    return {
      isDark: false,
    }
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark
      if (typeof window !== 'undefined')
        document.documentElement.classList.toggle('dark', this.isDark)
    },
  },
}
</script>

<template>
  <button class="!outline-none" @click="toggleDark">
    <carbon-moon v-if="isDark" />
    <carbon-sun v-else />
  </button>
</template>
