<template>
  <ListPage
    v-if="data.btnGroup?.length"
    :navText="data.navText"
    :navActiveText="data.navActiveText"
    :query="data.query"
    :url="data.url"
    :columns="data.columns"
    :listProp="data.listProp"
    :btnGroup="data.btnGroup"
  />
</template>
<script setup>
import http from '@/request'
const route = useRoute()
const data = reactive({
  navText: route.query.title + ' /',
  navActiveText: route.query.navActiveText,
  query: {
    type: '',
    year: ''
  },
  url: 'home/practice/index',
  listProp: 'practiceList',
  columns: [
    { prop: 'title' },
    { prop: 'sc_time' },
  ],
  btnGroup: []
})
onMounted(() => {
  const type = route.query.type
  getBtnGroup(type)
})
function getBtnGroup(type) {
  http.get('home/practice/type_index', { type }).then(res => {
    data.btnGroup = res.practiceTypeList
    data.query.type = data.btnGroup[0].id
  })
}
</script>