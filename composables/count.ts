export function useCount() {
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
}
