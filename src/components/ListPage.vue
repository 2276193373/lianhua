<template>
  <div class="nav">
    <div>
      <span>{{ props.navText }} test--</span>
      <span class="nav-active">{{ props.navActiveText }}test--</span>
    </div>
    <div class="year-btn-wrapper">
      <div class="year-btn pointer" @click.stop="clickYearBtn">
        <span>全部年度</span>
        <i class="right-triangle"></i>
      </div>
      <div v-show="!collapse" class="dropdown-list">

        <div class="year" @click="clickYearBtn">全部年度</div>
        <div v-for="item in 10" class="year" @click.stop="clickYearBtn">2022</div>
      </div>
    </div>
  </div>
  <!-- 按钮组 -->
  <div class="btn-group">
    <div
      v-for="item in btnGroup" 
      :class="{ 'btn-item-active': data.curBtnItem === item.id }" 
      class="btn-item flx-center" 
      @click="btnItemClick(item)"
    >
      {{ item.title }}
    </div>
  </div>
  <!-- 列表 -->
  <div class="list-container">
    <div v-for="item in 30" class="table-row">
      <div class="table-row-1"><i class="red-right-triangle"></i>2022年第1期（总第1期）</div>
      <div class="table-row-2">2022</div>
      <div class="pointer table-row-btn" @click="view">查看</div>
    </div>
  </div>
  <div style="height: 40px;"></div>
</template>
<script setup>
import { onUnmounted, reactive, ref } from 'vue';

const props = defineProps({
  navText: String,
  navActiveText: String,
  btnGroup: {
    type: Array,
    default: () => [{id: 1, title: 'hhhh'}, {id: 2, title: 'asdf'}]
  }
})
const collapse = ref(true)

const data = reactive({
  curBtnItem: 1
})
function clickYearBtn() {
  collapse.value = !collapse.value
}
function btnItemClick(item) {
  data.curBtnItem = item.id
}
function view() {
  console.log('view.....');
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
.year-btn {
  width: 200px;
  height: 54px;
  border-radius: 6px;
  background: #1954AB;
  color: white;
  font-size: 18px;
  padding: 0 16px 0 22px;
  box-sizing: border-box;
  display: flex;
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
}
.red-right-triangle {
  @extend .right-triangle;
  border-left-color: #CC0003;
}
.list-container {
  $paddingLR: 60px;
  margin-top: 30px;
  background: white;
  // width: calc(100% + $paddingLR + $paddingLR);
  // margin-left: -$paddingLR;
  padding: 0 60px;
  box-sizing: border-box;
  .table-row {
    height: 81px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #CCD2DF;
    font-size: 20px;
    color: #1D1D1D;
    &:last-child {
      border: 0;
    }
    &:hover {
      background: #CCD2DF1f;
    }
    &-1 {
      flex: .6
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
</style>