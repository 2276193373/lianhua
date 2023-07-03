<template>
  <ListPage
    :query="data.query"
    :url="data.url"
    :navText="data.navText"
    :navActiveText="data.navActiveText"
    :columns="data.columns"
    :listProp="data.listProp"
  />
</template>
<script setup>
const route = useRoute()

onMounted(() => {
  // name: 1-活动站 2-活动室 3-人大工委档案
  const name = route.params.name
  if (name == 1) {
    data.url = 'home/archives/index'
    data.listProp = 'archivesList'
    data.query.street = route.query.id

  }
  if (name == 2) {
    data.url = 'home/shi/index'
    data.listProp = 'shiList'
    data.query.type = route.query.id
    data.columns = [{ prop: 'title'}, { prop: 'sc_time' }]
  }
  if (name == 3) {
    data.url = 'home/committee/index'
    data.listProp = 'committeeList'
  }
  
})

const data = reactive({
  list: [],
  query: {},
  url: '',
  listProp: '',
  navText: `室站建设 / ${route.query.navText ? route.query.navText + ' / ' : ''}`,
  navActiveText: route.query.navActiveText,
  columns: [{ prop: 'title'}, { prop: 'year' }]
})

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