<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
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
})
</script>

<template>
  <button class="!outline-none" @click="toggleDark()">
    <carbon-moon v-if="isDark" />
    <carbon-sun v-else />
  </button>
</template>
