import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  buildModules: [
    'nuxt-vite',
  ],
  plugins: [
    '~/plugins/main.js',
  ],
}

export default config
