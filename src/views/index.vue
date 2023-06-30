<template>
  <div>
    <div class="title">{{ data.content }}</div>
    <div class="grid">
      <div
        v-for="(item, index) in data.list"
        :class="['home', 'home-'+ (index + 1)]"
        :key="index"
        @click="handleClick(item)"
      >
        <img :src="item.picUrl1" alt="" class="grid-item-bg">
        <img :src="item.picUrl" alt="" class="grid-item-icon">
        <span class="grid-text">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router'
import http from '@/request/index.js'
import { store } from '@/store'

const router = useRouter()

onMounted(() => {
  http.get('home/index/home').then(res => {
    data.list = res.typeList.map(item => {
      item.picUrl = import.meta.env.VITE_DOMAIN + item.picUrl
      item.picUrl1 = import.meta.env.VITE_DOMAIN + item.picUrl1
      return item
    })
    data.content = res.content
    store.setHeaderTitle(data.title)
  })
})
const id2RouteName = {
    1: 'jiaren',
    2: 'shizhan',
    3: 'zhongxin',
    4: 'wojia',
    5: 'quan',
    6: 'renda',
    7: 'pinpai',
  }
const data = reactive({
  list: [],
  content: ''
})

function handleClick(item) {
  console.log(item.id, 'item.id');
  router.push({ name: id2RouteName[item.id], query: { title: item.title } })
}
</script>
<style lang="scss" scoped>
.test {
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 24px;
  div {
    border: 1px solid red;
  }
  .t1 {
    grid-row: 1 / 3;
  }
  .t4 {
    grid-column: 4 / 6;
  }
  .t5 {
    grid-column: 2 / 4;
  }
}
.title {
  font-size: 44px;
  color: #363636;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 45px;
}
.grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(5, 340px);
  grid-template-rows: repeat(2, 320px);
  .home {
    cursor: pointer;
    position: relative;
    .grid-item-bg {
      width: 100%;
      height: 100%;
    }
    .grid-item-icon {
      position: absolute;
      z-index: 1;
      top: 52px;
      left: 50%;
      transform: translateX(-50%);
      width: 154px;
      height: 154px;
    }
  }
  .home-1 {
    grid-row: 1 / 3;
    .grid-text {
      top: 369px;
    }
    .grid-item-icon {
      top: 183px;
    }
  }
  .home-4 {
    grid-column: 4 / 6;
  }
  .home-5 {
    grid-column: 2 / 4;
  }
  .grid-text {
    position: absolute;
    top: 238.5px;
    z-index: 11;
    left: 50%;
    transform: translateX(-50%);
    font-size: 28px;
    color: white;
    font-weight: bold;
  }
}

</style>