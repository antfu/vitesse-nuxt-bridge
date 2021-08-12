import { resolve } from 'path'
import { NuxtConfig } from '@nuxt/types'
import ViteComponents from 'vite-plugin-components'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

const config: NuxtConfig = {
  buildModules: [
    resolve(__dirname, '../nuxt-vite/src/index.ts'),
    'nuxt-windicss',
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
        customComponentResolvers: [
          ViteIconsResolver({
            componentPrefix: '',
          }),
        ],
      }),
      ViteIcons(),
    ],
  },
}

export default config
