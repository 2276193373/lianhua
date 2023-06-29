<template>
  <div class="shi-list">
    <div v-for="item in 13" class="shi-list-item pointer" @click="viewDetail(item)">
      <img src="@/assets/img/guohui.png" alt="">
      <div class="shi-text-1">人大代表联系群众活动站</div>
      <div class="shi-text-2">人大代表联系群众活动站</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function viewDetail(item) {
  router.push({ name: 'shizhanDetail' })
}
</script>
<style lang="scss" scoped>
.shi-list {
  margin-top: 100px;
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(5, auto);
  &-item {
    width: 336px;
    height: 225px;
    background: white;
    box-shadow: 0 3px 10px rgba(42, 49, 58, .22);
    &:nth-child(2) {
      width: auto;
      grid-column: 2 / 5;
    }
    img {
      display: block;
      margin: 35px auto 20px;
      width: 79px;
      height: 73px;
    }
    .shi-text-1 {
      color: #CC0003;
      font-size: 18px;
      text-align: center;
    }
    .shi-text-2 {
      @extend .shi-text-1;
      font-size: 20px;
      color: #1D1D1D;
      font-weight: bold;
      margin-top: 12px;
    }
  }
}
</style>