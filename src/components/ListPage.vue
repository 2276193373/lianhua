<template>
  <div class="nav">
    <div>
      <span>{{ props.navText }} </span>
      <span class="nav-active">{{ props.navActiveText }}</span>
    </div>
    
    <div class="year-btn-wrapper">
      <!-- <el-input v-model="data.title" class="input-title" placeholder="请搜索..." size="large" @input="handleInput" /> -->
      <div class="flx-center">
        <input v-model="data.localQuery.title" class="input-title" placeholder="搜索标题" @input="handleInput">
        <img src="@/assets/img/search-icon.png" alt="" class="pointer" style="transform: translateX(-40px);" @click="handleInput">
      </div>
      <div>
        <div class="year-btn pointer" @click.stop="clickYearBtn()">
        <span>{{ data.localQuery.year || '全部年度' }}</span>
        <i class="right-triangle" :style="{ transform: `rotate(${collapse ? 0 : '90deg'})` }"></i>
      </div>
      <div v-show="!collapse" class="dropdown-list">
        <div class="year" @click="clickYearBtn(null)">全部年度</div>
        <div v-for="item in rangeYear" class="year" @click.stop="clickYearBtn(item)">{{ item }}</div>
      </div>
      </div>
    </div>
  </div>
  <!-- 按钮组 -->
  <div v-if="props.btnGroup.length" class="btn-group">
    <div
      v-for="item in btnGroup" 
      :class="{ 'btn-item-active': data.curBtnItem == item.id }"
      class="btn-item flx-center" 
      @click="btnItemClick(item)"
    >
      {{ item.title }}
    </div>
  </div>
  <!-- 列表 -->
  <div class="list-container">
    <div v-for="item in data.list" class="table-row">
      <div v-for="(col, index) in props.columns" :class="[{ 'table-row-1': index === 0 }, 'table-row-2']">
        <i v-if="index === 0" class="red-right-triangle"></i>
        {{ item[col.prop] }}
      </div>
      <div class="table-row-btn">
        <div @click="view(item, 'pdf')">PDF文件</div>
        <div @click="view(item, 'richText')">查看更多</div>
      </div>
    </div>
  </div>
  <div style="height: 40px;"></div>
</template>
<script setup>
import http from '@/request'
import {store} from '@/store'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  navText: String,
  navActiveText: String,
  btnGroup: {
    type: Array,
    default: () => [] // [{id: 1, title: 'hello world'}]
  },
  url: String,
  query: Object,
  columns: {
    type: Array,
    default: () => []
  },
  listProp: String,
})
onMounted(() => {
  nextTick(() => {
    getList({ ...props.query  })
  })
})

const rangeYear = getRangeYear()
const collapse = ref(true)

const data = reactive({
  curBtnItem: props.btnGroup[0]?.id,
  selectedYear: '',
  list: [],
  localQuery: {
    title: '',
    year: ''
  }
})
// 防抖 执行最后一次
function debounceFun(fn, wait = 500) {
    let timer
    return function () {
        let context = this
        let args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}
const d = debounceFun(getList)
function handleInput() {
  d({ ...props.query, title: data.title })
}
function clickYearBtn(item) {
  if (item || item === null) {
    data.localQuery.year = item
    getList()
  }
  collapse.value = !collapse.value
}
function getList(query = props.query) {
  http.get(props.url, { ...query, ...data.localQuery }).then(res => {
    data.list = res[props.listProp]
  })
}
function btnItemClick(item) {
  data.curBtnItem = item.id
  props.query.type = item.id
  getList()
}
function view(item, type) {
  let query = null
  if (type === 'richText') {
    if (!item.content) {
      return ElMessage({
        showClose: true,
        message: '暂无更多',
        type: 'warning',
      })
    }
    query = route.query
    store.setRichTextContent(item.content)
  } else if (type === 'pdf') {
    query = { linkUrl: item.linkUrl, ...route.query }
  }
  
  router.push({
    name: 'pdf',
    query,
    params: { type }
  })
}
function getRangeYear(startYear = 2016, endYear = new Date().getFullYear()) {
  const n = endYear - startYear
  const list = [startYear]
  for (let i = 1; i <= n; i++) {
    list.unshift(startYear + i)
  }
  return list
}

document.addEventListener('click', () =>{
  collapse.value = true
})

</script>
<style lang="scss" scoped>

.nav {
  color: #9DA5B5;
  font-size: 24px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-active {
    color: #333333;
  }
}
.year-btn-wrapper {
  display: flex;
  gap: 30px;
}
$btnHeight: 54px;
.year-btn {
  width: 200px;
  height: $btnHeight;
  border-radius: 6px;
  background: #1954AB;
  color: white;
  font-size: 18px;
  padding: 0 16px 0 22px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  
  .right-triangle {
    $w: 6px;
    border-top: $w solid transparent;
    border-bottom: $w solid transparent;
    border-left: $w solid white;
    border-right: $w solid transparent;
    display: inline-block;
  }
  
}
.dropdown-list {
  width: 200px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, .16);
  background: white;
  font-size: 18px;
  max-height: 300px;
  overflow: auto;
  position: absolute;
  z-index: 2;
  .year {
    color: #1D1D1D;
    cursor: pointer;
    padding-left: 12px;
    height: 50px;
    display: flex;
    align-items: center;
    &:hover {
      background: #F1F9FF;
      border-radius: 6px;
      color: #1954AB;
    }
  }
}
.right-triangle {
  $w: 6px;
  border-top: $w solid transparent;
  border-bottom: $w solid transparent;
  border-left: $w solid white;
  border-right: $w solid transparent;
  display: inline-block;
  transform-origin: 0 50%;
  transition: transform .2s;
}
.red-right-triangle {
  @extend .right-triangle;
  border-left-color: #CC0003;
  position: relative;
  top: -2px;
}
.list-container {
  $paddingLR: 60px;
  margin-top: 30px;
  background: white;
  // width: calc(100% + $paddingLR + $paddingLR);
  // margin-left: -$paddingLR;
  box-sizing: border-box;
  .table-row {
    padding: 0 60px;
    height: 81px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    // border-bottom: 1px solid #CCD2DF;
    font-size: 20px;
    color: #1D1D1D;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 60px);
      border-bottom: 1px solid #CCD2DF;
    }
    &:last-child::after {
      border: 0;
    }
    &:hover {
      background: #CCD2DF1f;
    }
    &-1 {
      flex: .6!important;
      text-align: left!important;
    }
    &-2 {
      flex: .2;
      text-align: right;
    }
    &-btn {
      flex: .2;
      text-align: right;
      color: #1954AB;
      margin-right: 30px;
      display: flex;
      justify-content: flex-end;
      gap: 14px;
      cursor: pointer;
    }
  }
}
.btn-group {
  display: flex;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 40px;
  .btn-item {
    border: 1px solid #1954AB;
    width: 220px;
    height: 54px;
    border-radius: 6px;
    // background: #1954AB;
    font-size: 20px;
    color: #1954AB;
    cursor: pointer;
    box-shadow: 2px 2px 1px #1C57AE;
  }
  .btn-item-active {
    color: white;
    background: #1954AB;
  }
}
.input-title {
  height: $btnHeight;
  padding: 0;
  display: inline-block;
  border: 1px solid #1954AB;
  border-radius: 10px;
  box-shadow: 2px 2px 1px #1C57AE;
  width: 300px;
  font-size: 18px;
  box-sizing: border-box;
  padding: 0 14px;
}
</style>

<style lang="scss">

</style>