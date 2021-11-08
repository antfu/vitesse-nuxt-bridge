<script setup lang="ts">
const name = ref('')
</script>

<template>
  <form @submit.stop.prevent="$router.push(`/hi/${name}`)">
    <input
      id="name"
      v-model.trim="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="off"
      spellcheck="false"
      minlength="1"
      required="required"
      autofocus="autofocus"
      p="x-4 y-2"
      m="t-5"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    />
    <button
      type="submit"
      class="block mx-auto my-3 text-sm btn"
    >
      GO
    </button>
  </form>
</template>
