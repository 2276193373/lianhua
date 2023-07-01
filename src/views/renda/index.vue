<template>
  <div class="renda">
    <div v-for="item in data.list" class="renda-item pointer" @click="handleClick(item)">
      <img :src="baseUrl + item.picUrl1" alt="" class="renda-img">
      <div class="renda-overlay">
        <img :src="baseUrl + item.picUrl" alt="" class="renda-icon">
        <div class="renda-text">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import http from '@/request'
const router = useRouter()
const route = useRoute()

onMounted(() => {
  http.get('home/congress/type_index').then(res => {
    data.list = res.congressTypeList
  })
})
const baseUrl = import.meta.env.VITE_DOMAIN
const data = reactive({
  list: []
})
function handleClick(item) {
  router.push({ name: 'rendaList', query: { navActiveText: item.title, id: item.id, ...route.query } })
}
</script>
<style lang="scss" scoped>
.renda {
  margin-top: 180px;
  display: flex;
  gap: 34px;
  &-item {
    width: 400px;
    height: 500px;
    position: relative;
    overflow: hidden;
    &:hover {
      .renda-img {
        transform: scale(1.2);
      }
      .renda-overlay {
        backdrop-filter: unset;
      }
    }
  }
  &-img {
    width: 100%;
    height: 100%;
    transition: transform .3s;
  }
  &-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,  0, 0, .1);
    backdrop-filter: blur(4px);
    z-index: 2;
  }
  &-icon {
    width: 74px;
    height: 74px;
    display: block;
    margin: 180px auto 35px;
  }
  &-text {
    font-size: 28px;
    color: white;
    text-align: center;
  }
}
</style>