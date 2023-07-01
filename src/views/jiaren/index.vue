<template>
  <div class="list-wrapper">
    <TheCandidate
      v-for="item in data.list"
      :imgUrl="item.picUrl"
      :name="item.title"
      :area="item.impression"
      @click="viewDetail(item)"
    />
  </div>
  
  <Pagination
    @prevPage="handlePrevPage"
    @nextPage="handleNextPage"
  />

  
</template>
<script setup>
import http from '@/request'
// import { store } from '@/store'
// import { onMounted, reactive } from 'vue';
// import { useRouter } from 'vue-router'

onMounted(() => {
  getList()
})

const router = useRouter()

const data = reactive({
  list: [],
  query: {
    page: 1
  }
})

function getList(query = data.query) {
  http.get('home/people/index', query).then(res => {
    if (res.response.code == 500) {
      return console.error('返回 code:500')
    }
    data.list = res.response.peopleList
  })
}
function viewDetail(item) {
  console.log(item, '---');
  // router.push({ name: 'pdf' })
}
function handleNextPage() {
  if (data.list.length < 18) {
    return console.warn('没有更多了')
  }
  data.query.page++
  getList()
}
function handlePrevPage() {
  if (data.query.page > 1) {
    data.query.page--
    getList()
  }
}
</script>
<style lang="scss" scoped>
.list-wrapper {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(9, 180px);
  margin-top: 56px;
}


</style>