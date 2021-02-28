import { resolve } from 'path'
import { NuxtConfig } from '@nuxt/types'
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

const config: NuxtConfig = {
  buildModules: [
    'nuxt-vite',
  ],
  plugins: [
    '~/plugins/main.ts',
  ],
  vite: {
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
    plugins: [
      ViteComponents({
        dirs: [
          resolve('./components'),
        ],
        extensions: ['vue', 'md'],
        customLoaderMatcher: path => path.endsWith('.md'),
        customComponentResolvers: [
          ViteIconsResolver({
            componentPrefix: '',
          }),
        ],
      }),
      WindiCSS({
        scan: {
          dirs: [
            resolve('./pages'),
            resolve('./components'),
          ],
        },
      }),
      ViteIcons(),
      Markdown({
        markdownItSetup(md) {
          md.use(Prism)
        },
      }),
    ],
  },
}

export default config
