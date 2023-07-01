<template>
  <div>
    <div class="title">人大代表联系群众活动室(站)-{{ route.query.street }}</div>
    <div class="item-wrapper">
      <div v-for="item in data.list" class="item pointer" @click="viewDetail(item)">
        <img :src="item.imgUrl">
        <div class="item-text">{{ item.title }}</div>
      </div>
      
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'

import img1 from '@/assets/img/touxiang.png'
import img2 from '@/assets/img/touxiang2.png'
import img3 from '@/assets/img/touxiang3.png'

const router = useRouter()
const route = useRoute()
const data = reactive({
  list: [
    { title: '“莲”心助力--人大代表风采', id: 1, imgUrl: img1 },
    { title: '人大工委档案', id: 2, imgUrl: img2 },
    { title: '代表档案', id: 3, imgUrl: img3 },
  ]
})
function viewDetail(item) {
  router.push({ name: 'shizhanDetailInner', params: { name: item.id }, query: { ...route.query, streetTitle: item.title } })
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 44px;
  color: #111111;
  text-align: center;
  margin-top: 131px;
  margin-bottom: 105px;
}
.item-wrapper {
  display: flex;
  gap: 68px;
}
.item {
  width: 500px;
  height: 320px;
  background: linear-gradient(-135deg, #41D0F3, #33BAF9);
  position: relative;
  padding-top: 1px;
  &:nth-child(2) {
    background: linear-gradient(-135deg, #3DCDBD, #1FCAA3);
  }
  &:nth-child(3) {
    background: linear-gradient(-135deg, #70B5FF, #4F84E1);
  }
  img {
    width: 154px;
    height: 154px;
    display: block;
    margin: 53px auto 32px;
  }
  &-text {
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: white;
    font-weight: bold;
  }
}
</style>