<template>

    <div class="l-dl">

    <img class="l-dt" src="/jianyan.svg" alt="阅读"/>

    <div class="l-dd">
    <div class="l-dd-title">
      临床基础检验学考术
    </div>
    <div class="l-dd-sub">
      作者：刘慈欣
    </div>
    <div class="l-dd-content">
      根据考试大纲的要求
    </div>
    <div class="l-dd-footer">
      <image v-for="(s,i) in 5" :key="i" class="l-icon-star" lazy-load src="../../static/l-icon-star.png"></image>
      <text class="l-dd-grade">5.0</text>
    </div>
  </div>

</div>



<!--    <img class="avatar-imgg" src="/jianyan.svg"/>-->
    <div class="box">
      <div class="box-f">
        <span class="head">考点</span>
        <span class="center">1231</span>
        <span class="foot">个</span>
      </div>
      <div class="box-f">
        <span class="head">章节</span>
        <span class="center">23</span>
        <span class="foot">节</span>
      </div>
      <div class="box-f">
        <span class="head">时间</span>
        <span class="center">100</span>
        <span class="foot">分钟</span>
      </div>
  </div>


</template>

<script>
// import { withBase } from 'vitepress';
import TenantSet from './TenantSet.vue';

export default {
  components: {
    TenantSet
  },
  data() {
    return { }
  }
}

</script>

<style>
.avatar-imgg {
  position: absolute;
  width: 120px;
  height: 156px;
  top: 0;
  right: 0;
  bottom: 0;
  left:0;
  border-radius: 5%;
  object-fit: cover;
  padding-left:20px ;
  padding-top: 20px;
}
.l-dl {
  margin-top: 32px;
  display: flex;
  width: 100%;
  height: 180px;
  flex-direction:row;
  justify-content: space-evenly;
  background-color: var(--vp-c-bg-soft);

}
.l-dt {
  margin: 20px;
  width: 180px;
  /*height: 100%;*/
  border-radius: 6px;
  margin-right: 24px;

}

.l-dd {
  margin: 20px;
  flex: 1;
  display: flex;
  padding-bottom: 1px;
  flex-direction: column;
  justify-content: space-evenly
}
.l-dd-title {
  font-weight: bold;
}

.l-dd-sub {
  /*color: var(--c-txt-2);*/
  font-weight: normal;
}

.l-dd-content {
  width: 100%;
  color: #868DAB;
  font: 15px normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /*-webkit-line-clamp: 3;*/
  /*overflow: hidden;*/
}

.l-dd-footer {
  display: flex;
  align-items: center;
}

.l-dd-div-footer {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
}

.l-dd-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 6px;
}

.box{
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  background-color: var(--vp-c-bg-soft);
}
.box-f{
  padding: 15px;
  /*justify-content: space-between;*/
  display: flex;
  flex-direction:column;
}

.head{
  font: 12px normal;
  text-align: center;
  color: #9e9e9e;
  margin: 2px;
}
.center{
  text-align: center;
}
.foot {
  font: 12px normal;
  text-align: center;
  color: #9e9e9e;
  margin: 2px;
}
</style>

