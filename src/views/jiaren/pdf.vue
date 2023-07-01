<template>
  <embed :src="linkUrl" type="application/pdf" class="pdf"/>
</template>
<script setup>
const route = useRoute()

const linkUrl = import.meta.env.VITE_DOMAIN + route.query.linkUrl
</script>
<style scoped>
.pdf {
  width: 100%;
  height: calc(100vh - 120px);
}
</style>