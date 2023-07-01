<template>
  <div class="shi-list">
    <div v-for="item in data.list" class="shi-list-item pointer" @click="viewDetail(item)">
        <img class="shi-img" src="@/assets/img/guohui.png" alt="">
        <div class="shi-text-1">人大代表联系群众活动站</div>
        <div class="shi-text-2">{{ item.title }}</div>
      </div>
  </div>
</template>
<script setup>
// import { onMounted, reactive } from 'vue';
// import { useRouter } from 'vue-router'
import http from "@/request";

onMounted(() => {
  getList()
})

const router = useRouter()
const data = reactive({
  list: [],
})

function viewDetail(item) {
  router.push({
    name: 'shizhanDetail', 
    query: { title: '室站建设', street: item.title, id: item.id || 0 } 
  })
}
function getList() {
  http.get('home/street/index').then(res => {
    data.list = res.streetList
    data.list.splice(1, 0, { title: res.streetName })
  })
}
</script>
<style lang="scss" scoped>
.shi-list {
  margin-top: 100px;
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(5, auto);
  &-item {
    width: 336px;
    height: 225px;
    background: white;
    box-shadow: 0 3px 10px rgba(42, 49, 58, .22);
    position: relative;
    &:nth-child(2) {
      width: auto;
      grid-column: 2 / 5;
      .shi-img, .shi-text-1, .shi-text-2 {
        position: absolute;
      }
      .shi-img {
        top: 56px;
        left: 237px;
        margin: 0;
        width: 116px;
        height: 107px;
      }
      .shi-text-1 {
        top: 63.2px;
        left: 393px;
        font-size: 32px;
      }
      .shi-text-2 {
        top: 118px;
        left: 393px;
        margin: 0;
        font-size: 38px;
      }
      
    }
    img {
      display: block;
      margin: 35px auto 20px;
      width: 79px;
      height: 73px;
    }
    .shi-text-1 {
      color: #CC0003;
      font-size: 18px;
      text-align: center;
    }
    .shi-text-2 {
      @extend .shi-text-1;
      font-size: 20px;
      color: #1D1D1D;
      font-weight: bold;
      margin-top: 13px;
    }
  }
}
</style>