// 父组件
<template>
  <div>

<!--    <div class="section">-->
       <son @onEmitInd="fangfa"></son>
      <!--    :articles="articleList"-->
      <!--    <p>{{yaoqiuuu}}</p>-->
    <div v-show="curId===0">
         <TenantSet msa="共23章｜239节" />
    </div>
<!--      <div v-show="curId===1">-->
<!--    <TenantSet mst="阅读时长30min" />-->
<!--     </div>-->
<!--      <div v-show="curId===2">-->
<!--        <TenantSet msg="134考点"> </TenantSet>-->
<!--      </div>-->

<!--    </div>-->

  </div>

</template>

<script>
import son from './son.vue'
import {ref} from "vue"
export default {
  name: 'father',
  components: { son },
  data() {
    return {
      // yaoqiuuu: "",
      // articleList: ['初级', '中级', '高级']
    }
  },
  methods:{
    fangfa(index){
      console.log(this.yaoqiuuu = index)
    },
  },
  // mounted() {
  //   console.log(this.$children.articleList)
  // }

}
</script>

<style scoped>
#tab{
  width: 600px;
  margin: 0 auto;
}
.tab-tit{
  font-size: 0;
  width: 600px;
}
.tab-tit a{
  margin: 30px;
  padding: 3px 3px;
  text-align: center;
  font-size: 10px;
  font-weight:bold;
  color:#eeeeee;
  border-radius: 4px;
  background: #e03a41;
  box-shadow: inset 5px 5px 10px #b32e34,
  inset -5px -5px 10px #ff464e;
}

</style>
