<template>
  <main py-40 px-20 text-center>
    <img w-16 inline-block src="/nuxt.svg" />
    <img w-16 inline-block src="/vite.svg" />
    <h1 mt-1 mb-3 text-2xl cursor-default>
      <span text-green-500 hover:text-white hover:bg-green-600>Nuxt Bridge</span>
      <span text-gray-400 mx-2>+</span>
      <span text-purple-500>Vitesse</span>
    </h1>
    <Counter />
    <div class="text-2xl m-3 text-gray-500 flex justify-center gap-3">
      <a href="https://github.com/antfu/vitesse-nuxt-bridge" target="__blank">
        <div class="i-carbon-campsite" />
      </a>
      <DarkToggle />
    </div>
  </main>
</template>
