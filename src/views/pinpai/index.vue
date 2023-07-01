<template>
  <div v-for="item in data.list" class="pinpai">
    <div class="title">
      <div class="bar"></div>
      <div class="title-text">{{ item.title }}</div>
    </div>
    <div class="item-wrapper">
      <div v-for="sonItem in item.son" class="item" @click="handleClick(sonItem, item)">
        <img :src="baseUrl + sonItem.picUrl" alt="" class="item-img">
        <img :src="baseUrl + sonItem.picUrl1" alt="" class="item-img item-img1">
        <div class="item-text">{{ sonItem.title }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import http from '@/request'
const router = useRouter()
const route = useRoute()
const baseUrl = import.meta.env.VITE_DOMAIN

onMounted(() => {
  http.get('home/information/type_index').then(res => {
    data.list = res.informationTypeList
  })
})

const data = reactive({
  list: []
})

function handleClick(sonItem, item) {
  router.push({ name: 'pinpaiList', query: { ...route.query, title2: item.title, navActiveText: sonItem.title, id: sonItem.id } })
  // router.push({ name: 'zhongxinList', query: { ...route.query, id: item.id, title2: title2, navActiveText: item.title } })
}
</script>
<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  margin-top: 55px;
  margin-bottom: 20px;
  &-text {
    color: #333333;
    font-size: 26px;
    font-weight: bold;
    margin-left: 21px;
  }
}
.bar {
  border-top: 4px solid #CC0003;
  width: 22px;
}
.item-wrapper {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.item {
  width: 237px;
  height: 180px;
  background: white;
  transition: background .2s;
  padding-top: 1px;
  &:hover {
    background: #1954AB;
    box-shadow: 0 5px 15px rgba(3, 29, 62, .3);
    .item-text {
      color: white;
    }
    .item-img {
      display: none;
    }
    .item-img1 {
      display: block;
    }
  }
  &-img {
    width: 64px;
    height: 64px;
    display: block;
    margin: 34px auto 26px;
  }
  &-img1 {
    display: none;
  }
  &-text {
    color: #1D1D1D;
    font-size: 20px;
    text-align: center;
  }
}
</style>