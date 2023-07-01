<template>
  <div class="zhongxin">
    <div class="zhongxin-left">
      <img src="@/assets/img/zhongxin-1.png" class="zhongxing-img" alt="">
      <span class="zhongxin-title">{{ data.list1.title }}</span>
      <div v-for="(item, index) in data.list1.son" :key="index" class="babal-wrapper pointer" :class="['babal-wrapper-'+(1+index)]" @click="handleClick(item, data.list1.title)">
        <img src="@/assets/img/babal.png" class="babal" alt="">
        <div class="babal-text">{{ item.title }}</div>
      </div>
    </div>
    <div class="zhongxin-right">
      <span class="zhongxin-title zhongxin-title-right">{{ data.list2.title }}</span>
      <img src="@/assets/img/zhongxin-2.png" class="zhongxing-img" alt="">
      <div class="grid">
        <div v-for="(item, index) in data.list2.son" :key="index" class="babal-wrapper-right pointer" @click="handleClick(item, data.list2.title)">
          <img src="@/assets/img/babal.png" class="babal" alt="">
          <div class="babal-text">{{ item.title }}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script setup>
import http from '@/request'
const router = useRouter()
const route = useRoute()

onMounted(() => {
  http.get('home/central/type_index').then(res => {
    data.list1 = res.centralTypeList[0]
    data.list2 = res.centralTypeList[1]
  })
})

const data = reactive({
  list1: [],
  list2: []
})

function handleClick(item, title2) {
  router.push({ name: 'zhongxinList', query: { ...route.query, id: item.id, title2: title2, navActiveText: item.title } })
}
</script>
<style lang="scss" scoped>
.zhongxin {
  display: flex;
  gap: 60px;
  margin-top: 84px;
}
.zhongxin-title {
  position: absolute;
  left: 139px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  top: 16px;
  &-right {
    right: 139px;
    top: 20px;
    left: unset;
  }
}

.zhongxin-left {
  width: 500px;
  height: 670px;
  position: relative;
  .zhongxing-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
.zhongxin-right {
  width: 1140px;
  height: 670px;
  position: relative;
  .zhongxing-img {
    width: 100%;
    height: 100%;
  }
}
.babal-wrapper {
  position: absolute;
  left: 140px;
  top: 150px;
  height: 60px;
  
  .babal-text {
    position: absolute;
    // left: 50%;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
  &-2 {
    top: 270px;
  }
  &-3 {
    top: 398px;
  }
  &-4 {
    top: 522px;
  }
  .babal {
    width: 220px;
    height: 69px;
  }
}
.grid {
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  // flex-wrap: wrap;
  gap: 55px 38px;
  justify-content: center;
  .babal-wrapper-right {
    position: relative;
    height: 60px;
  }
  .babal {
    width: 220px;
    height: 69px;
  }
  .babal-text {
    position: absolute;
    // left: 50%;
    top: 50%;
    transform: translate(0, -50%);
    width: 100%;
    text-align: center;
    font-size: 20px;
  }
}
</style>