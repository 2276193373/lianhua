<template>
  <template v-if="fileType === 'pdf'">
    <embed :src="linkUrl" type="application/pdf" class="pdf"/>
  </template>
  <div class="richtext-wrapper" v-else-if="fileType === 'richText'">
    <div v-html="richTextContent" class="richtext"></div>
  </div>
  <template v-else>
    <h4>路由params文件类型参数错误：{{ fileType }}</h4>
  </template>
</template>
<script setup>
import { store } from '@/store'
import { onUnmounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
const route = useRoute()

const fileType = route.params.type
const richTextContent = store.richTextContent

const linkUrl = import.meta.env.VITE_DOMAIN + route.query.linkUrl

onMounted(() => {
  nextTick(() => {
    const imgs = document.querySelectorAll('.richtext-wrapper img')
    imgs.forEach(item => {
      const src = item.src.replace(location.origin, import.meta.env.VITE_RICHTEXT_DOMAIN)
      item.src = src
    })
  })
})
onBeforeRouteLeave(() => {
  store.setRichTextContent('')
})

</script>
<style lang="scss" scoped>
.pdf {
  width: 100%;
  height: calc(100vh - 120px);
}

.richtext {
  width: 80%;
  margin: 40px auto 0;
  height: calc(100vh - 170px);
  overflow: auto;
}
</style>
<style lang="scss">
.richtext img {
  max-width: 100%;
}
</style>