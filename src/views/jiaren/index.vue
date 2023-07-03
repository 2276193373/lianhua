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
const route = useRoute()
const router = useRouter()

onMounted(() => {
  getList()
})

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
function viewDetail(item, type = 'both') {
  store.setRichTextContent(item.content)
  router.push({
    name: 'pdf',
    params: { type },
    query: { ...route.query, linkUrl: item.linkUrl }
  })
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