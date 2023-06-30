<template>
  <div class="header">
    <div class="header-left">
      <template v-if="isHome">
        <img src="@/assets/img/guohui.png" alt="" class="guohui">
        <span class="header-left-title">“嘉”人“莲”心人大代表工作互动平台</span>
      </template>
      <span v-else class="header-left-title">{{ store.headerTitle }}</span>
    </div>
    <div class="header-right">
      <template v-if="isHome">
        <div>
          <div>{{ currentDate.curDate }}</div>
          <div>农历：{{ currentDate.lunar }}</div>
        </div>
        <div class="header-right-time">{{ time }}</div>
      </template>
      <template v-else>
        <div class="nav-btn" @click="goHome"><img src="@/assets/img/nav-home.png">首页</div>
        <div class="nav-btn" @click="goBack"><img src="@/assets/img/nav-back.png">返回</div>
      </template>
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
import { getLunar } from 'chinese-lunar-calendar'
import { store } from '@/store'

const route = useRoute()
const router = useRouter()

const isHome = computed(() => {
  return route.name === 'home'
})

const currentDate = computed(() => {
  const dayMap = ['日', '一', '二', '三', '四', '五', '六']
  const d = new Date()
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const date = d.getDate()
  const day = d.getDay()
  
  const formatdate = `${year}/${month}/${date} 星期${dayMap[day]}`

  const lunar = getLunar(year, month, date).dateStr

  return {
    curDate: formatdate,
    lunar
  }
})

let intervalId
let time = ref('')

onBeforeRouteUpdate((to, from) => {
  store.setHeaderTitle(to.query.title)
  if (isHome) {
    getTime()
  }
})
onBeforeMount(() => {
  store.setHeaderTitle(route.query.title)
  if (isHome) {
    getTime()
  }
})
function getTime() {
    let hours = () => pad0(new Date().getHours())
    let minutes = () => pad0(new Date().getMinutes())
    time.value = `${hours()}:${minutes()}`
    intervalId = setInterval(() => {
      time.value = `${hours()}:${minutes()}`
      console.log(time.value, '当前时间');
    }, 60 * 1000);
}
function pad0(num) {
  if (num < 10) {
    return '0' + num
  }
  return num
}
function goHome() {
  console.log(2);

  router.push({ name: 'home' })
}
function goBack() {
  console.log(1);
  router.go(-1)
}
// onBeforeUnmount(() => {
//   console.log('unload', intervalId);
//   clearInterval(intervalId)
// })
</script>

<style lang="scss" scoped>
.header {
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  background: white;
  box-shadow: 0 3px 18px rgba(0,0,0, .18);
  border-radius: 0 0 60px 60px;
  height: 110px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  &-left {
    display: flex;
    align-items: center;
    .guohui {
      width: 68px;
      height: 63px;
    }
    &-title {
      font-size: 34px;
      font-weight: bold;
    }
  }
  &-right {
    display: flex;
    align-items: center;
    color: #88909D;
    &-time {
      color: #1954AB;
      font-size: 50px;
      font-weight: bold;
      margin-left: 20px;
    }
    .nav-btn {
      width: 150px;
      height: 54px;
      border-radius: 10px;
      border: 1px solid #1954AB;
      background: #F6FBFF;
      font-size: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 36px;
      cursor: pointer;
      img {
        margin-right: 12px;
        width: 26px;
        height: 26px;
      }
    }
  }
}
</style>