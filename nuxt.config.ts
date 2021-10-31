import { defineNuxtConfig } from '@nuxt/bridge-edge'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
    '@vueuse/core/nuxt',
    '@nuxt/bridge-edge',
  ],
  css: [
    '~/styles/main.css',
  ],
  plugins: [
    '~/plugins/uno.ts',
  ],
  target: 'static',
  components: true,
  bridge: {
    nitro: true,
    vite: true,
  },
  vite: {
    build: {},
    plugins: [
      UnoCSS({
        presets: [
          UnocssIcons(),
        ],
      }),
    ],
  },
})
