<template>
  <div v-if="route.params.name == 1" class="nav">
    <span>{{ data.navText }}</span>
    <span class="nav-active">{{ data.navActiveText }}</span>
  </div>
  <template v-if="route.params.name == 1">
    <div class="list-wrapper">
      <TheCandidate
        v-for="item in data.list"
        :imgUrl="item.picUrl"
        :name="item.title"
        :area="item.impression"
      />
  </div>
  </template>
  <template v-else>
    <ListPage
      :query="data.query"
      :url="data.url"
      :navText="data.navText"
      :navActiveText="data.navActiveText"
      :columns="[{ prop: 'title'}, { prop: 'year' }]"
      :listProp="data.listProp"
    />
  </template>
</template>
<script setup>
// import ListPage from "@/components/ListPage.vue";
// import { useRoute, useRouter } from 'vue-router'
import http from '@/request'
// import { onMounted, reactive } from 'vue';
// import TheCandidate from '@/components/TheCandidate.vue';
const route = useRoute()
const router = useRouter()

onMounted(() => {
  const name = route.params.name
  if (name == 1) {
    getList()
  }
  if (name == 2) {
    data.url = 'home/committee/index'
    data.listProp = 'committeeList'
  }
  if (name == 3) {
    data.url = 'home/archives/index'
    data.listProp = 'archivesList'
  }
})

const data = reactive({
  list: [],
  // 人大工委档案和代表档案query参数
  query: {
    street: route.query.id,
    year: ''
  },
  // 人大工委档案(params.name: 2)和代表档案(params.name: 3)url
  url: '',
  listProp: '',
  navText: `室站建设 / ${route.query.street} / `,
  navActiveText: route.query.streetTitle
})
function getList(query = data.query) {
  http.get('home/people/index', query).then(res => {
    data.list = res.response.peopleList
  })
}

</script>
<style lang="scss" scoped>
.nav {
  color: #9DA5B5;
  font-size: 24px;
  margin-top: 50px;
  &-active {
    color: #333333;
  }
}
.list-wrapper {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(9, 180px);
  margin-top: 56px;
}
</style>