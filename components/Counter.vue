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
    <button class="!outline-none" @click="dec()">
      dec
    </button>
    <span>{{ count }}</span>
    <button class="!outline-none" @click="inc()">
      inc
    </button>
  </div>
</template>
