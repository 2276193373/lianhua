<template>
  <Breadcrumb v-bind="data.navObj" />
  <div class="shi-list">
    <div v-for="item in data.list" class="shi-list-item pointer" @click="viewDetail(item)">
        <img class="shi-img" :src="baseUrl + item.picUrl" alt="">
        <div class="shi-text flx-center">{{ item.title }}</div>
      </div>
  </div>
</template>
<script setup>
import http from "@/request";

const router = useRouter()
const route = useRoute()
const baseUrl = import.meta.env.VITE_DOMAIN

onMounted(() => {
  getList()
})


const data = reactive({
  list: [],
  navObj: {
    navActiveText: route.query.navActiveText,
    navText: route.query.title + ' / '
  }
  
})

function viewDetail(item) {
  router.push({
    name: 'shizhanDetailInner', 
    query: { title: '室站建设', street: item.title, id: item.id || 0, navText: route.query.navActiveText, navActiveText: item.title  },
    params: {
      name: 2
    }
  })
}
function getList() {
  http.get('home/shi/type_index').then(res => {
    data.list = res.shiTypeList
  })
}
</script>
<style lang="scss" scoped>
.shi-list {
  margin-top: 100px;
  display: flex;
  gap: 28px;
  &-item {
    width: 340px;
    height: 240px;
    background: white;
    position: relative;
    overflow: hidden;
    &:hover {
      & .shi-img {
        transform: scale(1.2);
      }
    }
    .shi-img {
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform .2s;
    }
    .shi-text {
      width: 100%;
      height: 60px;
      font-size: 16px;
      color: white;
      backdrop-filter: blur(3px);
      bottom: 0;
      background: rgba(0,0,0,.3);
      position: absolute;
    }
  }
}
</style>