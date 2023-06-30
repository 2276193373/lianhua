<template>
  <div class="quan">
    <div v-for="item in 5" class="quan-item">
      <img src="" alt="" class="quan-item-img">
      <div class="quan-blur flx-center">hhhhh</div>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.quan {
  display: flex;
  gap: 46px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 115px;
}
.quan-item {
  width: 772px;
  height: 320px;
  background: blue;
  position: relative;
  overflow: hidden;
  &:nth-child(n+3) {
    width: 500px;
  }
  &:hover {
    .quan-item-img {
      transform: scale(1.2);
    }
  }
  &-img {
    width: 100%;
    height: 100%;
    transition: transform .5s;
  }
  .quan-blur {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 74px;
    background: #1d1d1d8c;
    color: white;
    backdrop-filter: blur(3px);
  }
}
</style>