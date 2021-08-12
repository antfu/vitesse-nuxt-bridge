<template>
  <main class="p-40 text-center">
    <img class="w-15 inline-block" src="../assets/nuxt.svg">
    <img class="w-15 inline-block" src="../assets/vite.svg">
    <h1 class="mt-5 text-green-500 text-4xl cursor-default hover:(text-white bg-green-600)">
      Nuxt <span class="text-gray-400">+</span> <span class="text-purple-600">Vitesse</span>
    </h1>
    <Hello />
    <div class="text-2xl m-3 text-gray-500">
      <carbon-campsite />
      <DarkToggle />
    </div>
  </main>
</template>

<script lang='ts'>
export default {}
</script>
