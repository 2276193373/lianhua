<template>
  <div class="wojia">
    <div v-for="item in data.list" class="wojia-item pointer" @click="handleClick(item)">
      <img :src="baseUrl + item.picUrl" alt="" class="wojia-img">
      <div class="wojia-text">{{ item.title }}</div>
      <img :src="baseUrl + item.picUrl1" alt="" class="wojia-bg">
    </div>
  </div>
</template>
<script setup>
import http from '@/request'
const router = useRouter()
const route = useRoute()
const baseUrl = import.meta.env.VITE_DOMAIN

onMounted(() => {
  http.get('home/demeanour/type_index').then(res => {
    data.list = res.demeanourTypeList
  })
})
const data = reactive({
  list: []
})
function handleClick(item) {
  router.push({ name: 'wojiaList', query: { ...route.query, navActiveText: item.title, id: item.id } })
}
</script>
<style lang="scss" scoped>
.wojia {
  margin-top: 125px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  &-item {
    width: 500px;
    height: 320px;
    // background: linear-gradient(to bottom, #66B1F0, #4985D6);
    padding-top: 1px;
    position: relative;
    // &:nth-child(2) {
    //   background: linear-gradient(200deg, #43CFF3, #36BAF8);
    // }
    // &:nth-child(3) {
    //   background: linear-gradient(200deg, #DAB2EA, #81A2ED);
    // }
    // &:nth-child(4) {
    //   background: linear-gradient(200deg, #FF7B80, #E64247);
    // }
    // &:nth-child(5) {
    //   background: linear-gradient(200deg, #3DCDBD, #1FCAA3);
    // }
    // &:nth-child(6) {
    //   background: linear-gradient(200deg, #FFBD84, #EF9814);
    // }
  }
  &-img {
    width: 154px;
    height: 154px;
    display: block;
    margin: 53px auto 32px;
    position: relative;
    z-index: 1;
  }
  &-text {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: white;
    position: relative;
    z-index: 1;
  }
  &-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
}
</style>