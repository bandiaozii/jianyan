<template>
  <div>
     <span style="float: left"  class="pagerr" @click="xiaoshi">开始默记</span>
    <span style="float: left" class="pagerr" @click="kaishi" >结束默记</span>
    <span style="float: right" class="pagerr" @click="pageSkip">随堂练习</span>
<!--    <span style="float: right" class="pagerr" @click="goPrint()">📄 默写</span>-->
  </div>
  </template>
  <script>
  import { defineComponent } from "vue";
  // import { goPrint } from "../configs/print";

  export default defineComponent({
    name: "beiti",
    // setup() {
    //   return {
    //     goPrint,
    //   }
    //   },
    methods: {

      kaishi() {
        var ss =   document.getElementsByTagName("code");
        // var kao = document.write(txt.length)
        for(var i=0; i<ss.length; i++){
          ss[i].addEventListener("click",function(e){
            // e.target.style.opacity="0"
            e.target.style.color = "#454ce1"
          })
        }
      },
      xiaoshi() {
        var ss = document.getElementsByTagName("code");
        for (var i = 0; i < ss.length; i++) {
          // ss[i].style.color="new"
          ss[i].style.color = "#dee0fd"
        }
      },
      pageSkip(){
        uni.navigateTo({url:'pages/questionBank/questionBankAnswer/index.html?from_type=1&name=第一章 血液样本采集和血涂片制备&id=21956'});
      },
    }
  })

  </script>

  <style scoped>

  .pagerr {
    display: block;
    border: 1px solid var(--vp-c-divider-light);
    border-radius: 8px;
    padding: 10px 10px 10px;
    /*width: 25%;*/
    /*height: 100%;*/
    transition: border-color 0.25s;
  }

  .pagerr:hover {
    border-color: var(--vp-c-brand);
  }

  .new{
    background-color:#ffffff
  }

  .goPrint {
    padding: 10px 5px;
    outline: none;
    border: none;
    color: #2c3e50;
    line-height: 1.499;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    background-color: antiquewhite;
    position: fixed;
    left: 20px;
    top: 50%;
  }
  </style>





