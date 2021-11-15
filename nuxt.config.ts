import { defineNuxtConfig } from '@nuxt/bridge-edge'
import Inspect from 'vite-plugin-inspect'

export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt',
    '@vueuse/core/nuxt',
    '@nuxt/bridge-edge',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/main.css',
  ],
  target: 'static',
  components: true,
  bridge: {
    vite: true,
  },
  unocss: {
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: [
        '@vueuse/core',
        '@vueuse/shared',
      ],
    },
    plugins: [
      Inspect(),
    ],
  },
})
