<template>
  <ListPage
    :navText="data.navText"
    :navActiveText="data.navActiveText"
    :query="data.query"
    :url="data.url"
    :columns="data.columns"
    :listProp="data.listProp"
  />
</template>
<script setup>
const route = useRoute()
const data = reactive({
  navText: `${route.query.title} / ${route.query.title2} / `,
  navActiveText: route.query.navActiveText,
  query: {
    type: route.query.id,
    year: ''
  },
  url: 'home/central/index',
  listProp: 'centralList',
  columns: [
    { prop: 'title' },
    { prop: 'sc_time' },
  ],
})

</script>