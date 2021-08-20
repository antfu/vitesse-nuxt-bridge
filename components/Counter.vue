<script lang='ts'>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    inc() {
      this.count += 1
    },
    dec() {
      this.count -= 1
    },
  },
}
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
