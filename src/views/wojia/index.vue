<template>
  <div class="wojia">
    <div v-for="item in 6" class="wojia-item">
      <img src="" alt="" class="wojia-img">
      <div class="wojia-text">kkkkkk</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wojia {
  margin-top: 125px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  &-item {
    width: 500px;
    height: 320px;
    background: linear-gradient(to bottom, #66B1F0, #4985D6);
    padding-top: 1px;
    &:nth-child(2) {
      background: linear-gradient(200deg, #43CFF3, #36BAF8);
    }
    &:nth-child(3) {
      background: linear-gradient(200deg, #DAB2EA, #81A2ED);
    }
    &:nth-child(4) {
      background: linear-gradient(200deg, #FF7B80, #E64247);
    }
    &:nth-child(5) {
      background: linear-gradient(200deg, #3DCDBD, #1FCAA3);
    }
    &:nth-child(6) {
      background: linear-gradient(200deg, #FFBD84, #EF9814);
    }
  }
  &-img {
    width: 154px;
    height: 154px;
    display: block;
    margin: 53px auto 32px;
  }
  &-text {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: white;
  }
}
</style>