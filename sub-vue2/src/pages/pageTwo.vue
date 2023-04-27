<template>
  <div>
    <h1>this is pageTwo</h1>
    <button @click="goOldSystem">跳回老系统</button>
  </div>
</template>

<script>
export default {
  methods: {
    goOldSystem() {
      history.pushState("", "", "/")
    }
  }
}
</script>