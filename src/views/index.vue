<template>
  <div>
    <div class="title">党建引领真办实事 “六心六力”倾心为民</div>
    <div class="grid">
      <div
        v-for="(item, index) in list"
        :class="['home', 'home-'+ (index + 1)]"
        :key="index"
        @click="handleClick(item)"
      >
        <img :src="item.imgUrl" alt="">
        <span class="grid-text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()

const list = reactive([
  { imgUrl: '/src/assets/img/home-1.png', text: '“嘉”仁“莲”心', name: 'jiaren' },
  { imgUrl: '/src/assets/img/home-2.png', text: '室站建设', name: 'shizhan' },
  { imgUrl: '/src/assets/img/home-3.png', text: '中心爱心' },
  { imgUrl: '/src/assets/img/home-4.png', text: '我“嘉”风采' },
  { imgUrl: '/src/assets/img/home-5.png', text: '全过程人民民主实践' },
  { imgUrl: '/src/assets/img/home-6.png', text: '人大成果' },
  { imgUrl: '/src/assets/img/home-7.png', text: '品牌打造' },
])

function handleClick(item) {
  router.push({ name: item.name })
}
</script>
<style lang="scss" scoped>
.test {
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 24px;
  div {
    border: 1px solid red;
  }
  .t1 {
    grid-row: 1 / 3;
  }
  .t4 {
    grid-column: 4 / 6;
  }
  .t5 {
    grid-column: 2 / 4;
  }
}
.title {
  font-size: 44px;
  color: #363636;
  text-align: center;
  margin-top: 70px;
  margin-bottom: 45px;
}
.grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(5, 340px);
  grid-template-rows: repeat(2, 320px);
  .home {
    cursor: pointer;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .home-1 {
    grid-row: 1 / 3;
    .grid-text {
      top: 369px;
    }
  }
  .home-4 {
    grid-column: 4 / 6;
  }
  .home-5 {
    grid-column: 2 / 4;
  }
  .grid-text {
    position: absolute;
    top: 238.5px;
    z-index: 11;
    left: 50%;
    transform: translateX(-50%);
    font-size: 28px;
    color: white;
    font-weight: bold;
  }
}

</style>