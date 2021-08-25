<script setup lang='ts'>
const count = ref(Math.round(Math.random() * 20))
function inc() {
  this.count += 1
}
function dec() {
  this.count -= 1
}
</script>

<template>
  <div m="y-3">
    <button border="~ rounded gray-400" class="px-2 mx-2 hover:bg-gray-400/20 !outline-none" @click="dec()">
      dec
    </button>
    <span>{{ count }}</span>
    <button border="~ rounded gray-400" class="px-2 mx-2 hover:bg-gray-400/20 !outline-none" @click="inc()">
      inc
    </button>
  </div>
</template>
