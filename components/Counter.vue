<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div m="y-3">
    <button class="btn" @click="dec()">
      dec
    </button>
    <span font="mono" w="15" inline-block>{{ count }}</span>
    <button class="btn" @click="inc()">
      inc
    </button>
  </div>
</template>
