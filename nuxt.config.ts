import { defineNuxtConfig } from '@nuxt/bridge'
import UnoCSS from 'unocss/vite'
import UnocssIcons from '@unocss/preset-icons'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
    '@vueuse/core/nuxt',
    'unplugin-icons/nuxt',
  ],
  css: [
    '~/styles/main.css',
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
