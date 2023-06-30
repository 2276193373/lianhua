<template>
  <div class="container">
    <TheHeader />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: #F0F6FB;
  padding-bottom: 40px;
}
.main {
  padding: 0 60px;
  box-sizing: border-box;
}
</style>