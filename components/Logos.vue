<template>
  <div inline-flex text-xl font-300 cursor-default>
    <div flex flex-col children:mx-auto>
      <img w-18 h-18 inline-block src="/nuxt.svg" />
      <span text-green5>Nuxt Bridge</span>
    </div>
    <div
      text="3xl gray4"
      m="x-4 y-auto"
      transition-all-500
      transform
      hover:rotate-135
      i-carbon-add
    />
    <div flex flex-col children:mx-auto>
      <img w-18 h-18 inline-block src="/vite.svg" />
      <span text-purple5>Vitesse</span>
    </div>
  </div>
</template>
