<template>
  <div class="nav">
    <div>
      <span>{{ props.navText }} </span>
      <span class="nav-active">{{ props.navActiveText }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  navText: String,
  navActiveText: String,
})
</script>
<style lang="scss" scoped>
.nav {
  color: #9DA5B5;
  font-size: 24px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-active {
    color: #333333;
  }
}
</style>