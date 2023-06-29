<template>
  <div class="info-item pointer">
    <img :src="props.imgUrl" alt="">
    <div class="info-area">
      <span class="info-area-name">{{ props.name }}</span>
      <span class="info-area-area">{{ props.area }}</span>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  imgUrl: String,
  name: String,
  area: String
})
</script>
<style lang="scss" scoped>

.info-item {
  img {
    width: 180px;
    height: 300px;
    display: block;
  }
  .info-area {
    width: 180px;
    height: 80px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 17px 0;
    box-sizing: border-box;
    &-name {
      font-size: 22px;
      color: #333333;
    }
    &-area {
      font-size: 16px;
      color: #9DA5B5;
    }
    span {
      width: 100%;
      text-align: center;
    }
  }
}
</style>