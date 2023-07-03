<template>
  <div class="richtext-wrapper" :class="{ 'both-richtext': isBoth }" v-if="fileType === 'richText' || isBoth">
    <div v-html="richTextContent" class="richtext"></div>
  </div>
  <template v-if="fileType === 'pdf' || isBoth">
    <embed v-if="route.query.linkUrl" :src="linkUrl" type="application/pdf" class="pdf" :class="{ 'both-pdf': isBoth }" />
  </template>
  
  <!-- <template v-else>
    <h4>路由params文件类型参数错误：{{ fileType }}</h4>
  </template> -->
</template>
<script setup>
import { store } from '@/store'
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
const isBoth = computed(() => {
  return route.params.type === 'both'
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
.both-pdf {
  // width: 51%;
}
.richtext {
  width: 80%;
  margin: 40px auto 0;
  height: calc(100vh - 170px);
  overflow: auto;
}
.both-richtext {
  // width: 49%;
  display: inline-block;
}
</style>
<style lang="scss">
.richtext img {
  max-width: 100%;
}
</style>