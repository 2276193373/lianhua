<template>
  <div class="zhongxin">
    <div class="zhongxin-left">
      <img src="@/assets/img/zhongxin-1.png" class="zhongxing-img" alt="">
      <span class="zhongxin-title">助力中心</span>
      <div v-for="(item, index) in 4" class="babal-wrapper" :class="['babal-wrapper-'+(1+index)]">
        <img src="@/assets/img/babal.png" class="babal" alt="">
        <div class="babal-text">{{ item }}</div>
      </div>
    </div>
    <div class="zhongxin-right">
      <span class="zhongxin-title zhongxin-title-right">爱心嘉莲</span>
      <img src="@/assets/img/zhongxin-2.png" class="zhongxing-img" alt="">
      <div class="grid">
        <div v-for="(item, index) in 13" class="babal-wrapper-right">
          <img src="@/assets/img/babal.png" class="babal" alt="">
          <div class="babal-text">{{ item }}</div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style lang="scss" scoped>
.zhongxin {
  display: flex;
  gap: 60px;
  margin-top: 84px;
}
.zhongxin-title {
  position: absolute;
  left: 139px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  top: 16px;
  &-right {
    right: 139px;
    top: 20px;
    left: unset;
  }
}

.zhongxin-left {
  width: 500px;
  height: 670px;
  position: relative;
  .zhongxing-img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
.zhongxin-right {
  width: 1140px;
  height: 670px;
  position: relative;
  .zhongxing-img {
    width: 100%;
    height: 100%;
  }
}
.babal-wrapper {
  border: 1px solid red;
  position: absolute;
  left: 140px;
  top: 150px;
  height: 60px;
  
  .babal-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &-1 {
    top: 270px;
  }
  &-2 {
    top: 398px;
  }
  &-3 {
    top: 522px;
  }
  .babal {
    width: 220px;
    height: 69px;
  }
}
.grid {
  position: absolute;
  top: 150px;
  left: 0;
  border: 1px solid red;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  // flex-wrap: wrap;
  gap: 55px 38px;
  justify-content: center;
  .babal-wrapper-right {
    position: relative;
    height: 60px;
  }
  .babal {
    width: 220px;
    height: 69px;
  }
  .babal-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>