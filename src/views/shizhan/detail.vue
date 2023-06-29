<template>
  <div>
    <div class="title">人大代表联系群众活动室(站)-思明区嘉莲街道莲西社区</div>
    <div class="item-wrapper">
      <div v-for="item in 3" class="item pointer" @click="viewDetail(item)">
        <img src="@/assets/tmp/touxiang.png">
        <div class="item-text">“莲”心助力--人大代表风采</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function viewDetail(item) {
  router.push({ name: 'shizhanDetailInner', params: { name: '1' } })
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 44px;
  color: #111111;
  text-align: center;
  margin-top: 131px;
  margin-bottom: 105px;
}
.item-wrapper {
  display: flex;
  gap: 68px;
}
.item {
  width: 500px;
  height: 320px;
  background: linear-gradient(-135deg, #41D0F3, #33BAF9);
  position: relative;
  padding-top: 1px;
  &:nth-child(2) {
    background: linear-gradient(-135deg, #3DCDBD, #1FCAA3);
  }
  &:nth-child(3) {
    background: linear-gradient(-135deg, #70B5FF, #4F84E1);
  }
  img {
    width: 154px;
    height: 154px;
    display: block;
    margin: 53px auto 32px;
  }
  &-text {
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: white;
    font-weight: bold;
  }
}
</style>