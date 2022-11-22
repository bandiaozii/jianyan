<template>
  <div id="tab">
    <div class="tab-tit">
      <a v-for="(item, index) in articleList" :key="index" @click="emi(index)">{{item}}</a>
    </div>
<!--    <p>{{curId}}</p>-->

    <!--    </div>-->
  </div>
</template>

<script>
import TenantSet from './TenantSet.vue';
export default {
  // props: ['articles'],
  name: "Option",
  // props:[curId],
  components: {
    TenantSet
  },
  data() {
    return{
      // yaoqiu: "",
      curId: "" ,
      articleList: ['初级', '中级', '高级'],
      datalist: ['初级标题', '中级标题', '高级标题']
    }
  },
  methods: {
    emi(index) {

      var one1=document.getElementById('frontmatter-head-0-1-name');
      var one2=document.getElementById('frontmatter-head-1-1-name');
      one1.innerText=this.datalist[index];
      one2.innerText=this.datalist[index];
      // this.curId = index
      // console.log(index)
      // this.$emit('onEmitInd', index) // 触发父组件的方法，并传递参数index
    }
  }
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
