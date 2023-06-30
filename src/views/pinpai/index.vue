<template>
  <div class="pinpai">
    <div class="title">
      <div class="bar"></div>
      <div class="title-text">名师代表+</div>
    </div>
    <div class="item">
      <div>
        <img src="" alt="" class="item-img">
        <div class="item-text">讲座PPT</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  margin-top: 55px;
  margin-bottom: 20px;
  &-text {
    color: #333333;
    font-size: 26px;
    font-weight: bold;
    margin-left: 21px;
  }
}
.bar {
  border-top: 4px solid #CC0003;
  width: 22px;
}
.item {
  width: 240px;
  height: 180px;
  background: white;
  transition: background .2s;
  padding-top: 1px;
  &:hover {
    background: #1954AB;
    box-shadow: 0 5px 15px rgba(3, 29, 62, .3);
    .item-text {
      color: white;
    }
  }
  &-img {
    width: 64px;
    height: 64px;
    display: block;
    margin: 34px auto 26px;
  }
  &-text {
    color: #1D1D1D;
    font-size: 20px;
    text-align: center;
  }
}
</style>