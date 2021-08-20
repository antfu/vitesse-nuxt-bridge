<script lang='ts'>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const count = ref(Math.round(Math.random() * 20))
    function inc() {
      this.count += 1
    }
    function dec() {
      this.count -= 1
    }
    return {
      count,
      inc,
      dec,
    }
  },
})
</script>

<template>
  <div>
    <button class="border px-2 rounded mx-2 hover:bg-gray-100 !outline-none" @click="dec()">
      dec
    </button>
    <span>{{ count }}</span>
    <button class="border px-2 rounded mx-2 hover:bg-gray-100 !outline-none" @click="inc()">
      inc
    </button>
  </div>
</template>
