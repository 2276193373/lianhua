<template>
  <div class="list-wrapper">
    <TheCandidate
      v-for="item in 18"
      imgUrl="/src/assets/tmp/houxuan.png"
      name="陈斌"
      area="第xx候选区"
      @click="viewDetail(item)"
    />
  </div>
  <div class="prev-page flx-center pointer">
    <svg xmlns="http://www.w3.org/2000/svg" width="10.124" height="17.667" viewBox="0 0 10.124 17.667">
      <path id="下一个" d="M342.773,233.327a1.267,1.267,0,0,1-.893-2.16l6.7-6.708-6.7-6.708a1.267,1.267,0,0,1,1.786-1.786l7.6,7.6a1.267,1.267,0,0,1,0,1.786l-7.6,7.6a1.267,1.267,0,0,1-.893.374Z" transform="translate(351.635 233.327) rotate(180)" fill="#999"/>
    </svg>
    &nbsp;&nbsp;上一页
  </div>  
  <div class="next-page flx-center pointer">
    下一页&nbsp;&nbsp;
    <svg xmlns="http://www.w3.org/2000/svg" width="10.124" height="17.667" viewBox="0 0 10.124 17.667">
      <path id="下一个" d="M1.262,0A1.267,1.267,0,0,0,.368,2.16l6.7,6.708-6.7,6.708a1.267,1.267,0,0,0,1.786,1.786l7.6-7.6a1.267,1.267,0,0,0,0-1.786l-7.6-7.6A1.267,1.267,0,0,0,1.262,0Z" fill="#fff"/>
    </svg>
  </div>

  <div class="bottom-bar"></div>
  
</template>
<script setup>
import TheCandidate from '@/components/TheCandidate.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

function viewDetail(item) {
  console.log(item, '---');
  router.push({ name: 'pdf' })
}
</script>
<style lang="scss" scoped>
.list-wrapper {
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(9, auto);
  margin-top: 56px;
}
.bottom-bar {
  height: 80px;
}
.prev-page {
  width: 220px;
  height: 70px;
  border-radius: 0 30px 0 0;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 18px;
  color: #999;
  svg {
    width: 10px;
    height: 17px;
  }
}
.next-page {
  @extend .prev-page;
  border-radius: 30px 0 0 0;
  left: unset;
  right: 0;
  background: #1954AB;
  color: white;
}
</style>