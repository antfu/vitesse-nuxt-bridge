<p align="center">
<img src="https://user-images.githubusercontent.com/11247099/109278332-6100e780-7853-11eb-9632-ce0b870017e0.png" width="500"/>
</p>

# Vitesse for Nuxt 2

[Vitesse](https://github.com/antfu/vitesse) with [Nuxt Vite](https://github.com/nuxt/vite)

```
🧪 Note: This is an experimental package and might be deprecated
```

## How?

For now we use [`patch-package`](https://github.com/ds300/patch-package) to patch [`nuxt-vite`](https://github.com/nuxt/vite) for supporting `vite.config.ts`. When [**this PR**](https://github.com/nuxt/vite/pull/19) gets merged, the patch will no longer needed.

## What is working?

### Vite Plugins

- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - Windi CSS support
- Will add more... Contribution welcome!

### Nuxt

- [x] Dev Server
- [x] HMR
- [ ] Build (await `nuxt-vite`)
- [ ] Generate (await `nuxt-vite`)
