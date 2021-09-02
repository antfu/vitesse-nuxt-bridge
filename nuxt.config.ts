import { resolve } from 'path'
import { NuxtConfig } from '@nuxt/types'
import ViteComponents from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

const config: NuxtConfig = {
  buildModules: [
    'nuxt-vite',
    '@nuxtjs/composition-api/module',
    'nuxt-windicss',
    'unplugin-vue2-script-setup/nuxt',
    'unplugin-icons/nuxt',
    [
      'unplugin-auto-import/nuxt',
      {
        imports: [
          '@vueuse/core',
          '@nuxtjs/composition-api',
        ],
        presetOverriding: true,
      },
    ],
  ],
  plugins: [
    '~/plugins/main.ts',
  ],
  css: [
    '~/styles/main.css',
  ],
  vite: {
    build: true,
    ssr: true,
    plugins: [
      ViteComponents({
        dirs: [
          resolve('./components'),
        ],
        resolvers: [
          IconsResolver({
            componentPrefix: '',
          }),
        ],
        dts: true,
      }),
    ],
  },
}

export default config
