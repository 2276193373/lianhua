<template>
  <div class="container">
    <TheHeader />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script setup>
import TheHeader from "@/components/TheHeader.vue";
</script>
<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: #F0F6FB;
}
.main {
  padding: 0 60px;
  box-sizing: border-box;
}
</style>