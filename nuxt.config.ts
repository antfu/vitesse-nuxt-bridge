import { resolve } from 'path'
import { NuxtConfig } from '@nuxt/types'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'

const config: NuxtConfig = {
  buildModules: [
    'nuxt-vite',
  ],
  plugins: [
    '~/plugins/main.ts',
  ],
  vite: {
    plugins: [
      ViteComponents({
        dirs: [
          resolve('./components'),
        ],
        transformer: 'vue2',
      }),
      WindiCSS({
        scan: {
          dirs: [
            resolve('./pages'),
            resolve('./components'),
          ],
        },
      }),
    ],
  },
}

export default config
