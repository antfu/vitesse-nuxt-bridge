<template>
  <main class="py-40 px-20 text-center">
    <img class="w-15 inline-block" src="../assets/nuxt.svg">
    <img class="w-15 inline-block" src="../assets/vite.svg">
    <h1 class="mt-5 text-green-500 text-4xl cursor-default hover:(text-white bg-green-600)">
      Nuxt <span class="text-gray-400">+</span> <span class="text-purple-600">Vitesse</span>
    </h1>
    <Hello />
    <Counter />
    <div class="text-2xl m-3 text-gray-500 flex justify-center gap-3">
      <a href="https://github.com/antfu/vitesse-nuxt" target="__blank">
        <carbon-campsite />
      </a>
      <DarkToggle />
    </div>
  </main>
</template>

<script lang='ts'>
export default {}
</script>
