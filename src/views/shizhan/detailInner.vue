<template>
  <div v-if="route.params.name == 1" class="nav">
    <span>室站建设 / {{ route.query.street }} / </span>
    <span class="nav-active">{{ route.query.streetTitle }}</span>
  </div>
  <template v-if="route.params.name == 1">
    <div class="list-wrapper">
      <TheCandidate
        v-for="item in data.list"
        :imgUrl="item.picUrl"
        :name="item.title"
        :area="item.impression"
        @click="viewDetail(item)"
      />
  </div>
  </template>
  <template v-else>
    <ListPage />
  </template>
</template>
<script setup>
import ListPage from "@/components/ListPage.vue";
import { useRoute, useRouter } from 'vue-router'
import http from '@/request'
import { onMounted, reactive } from 'vue';
import TheCandidate from '@/components/TheCandidate.vue';
const route = useRoute()
const router = useRouter()

onMounted(() => {
  const name = route.params.name
  if (name == 1) {
    getList()
  }
  if (name == 2) {

  }
})

const data = reactive({
  list: [],
  query: {
    page: 1,
    street: route.query.id
  }
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