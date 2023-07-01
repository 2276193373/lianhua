<template>
  <div class="quan">
    <div v-for="item in data.list" class="quan-item" @click="handleClick(item)">
      <img :src="baseUrl + item.picUrl" alt="" class="quan-item-img">
      <div class="quan-blur flx-center">{{ item.title }}</div>
    </div>
  </div>
</template>
<script setup>
import http from '@/request'

const router = useRouter()
const route = useRoute()

onMounted(() => {
  http.get('home/practice/type_index').then(res => {
    data.list = res.practiceTypeList
  })
})
const baseUrl = import.meta.env.VITE_DOMAIN
const data = reactive({
  list: []
})
function handleClick(item) {
  router.push({ name: 'quanList', query: { navActiveText: item.title, type: item.id, ...route.query } })
}
</script>
<style lang="scss" scoped>
.quan {
  display: flex;
  gap: 46px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 115px;
}
.quan-item {
  width: 772px;
  height: 320px;
  position: relative;
  overflow: hidden;
  &:nth-child(n+3) {
    width: 500px;
  }
  &:hover {
    .quan-item-img {
      transform: scale(1.2);
    }
  }
  &-img {
    width: 100%;
    height: 100%;
    transition: transform .5s;
  }
  .quan-blur {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 74px;
    background: #1d1d1d8c;
    color: white;
    backdrop-filter: blur(3px);
  }
}
</style>