
<template>
  <div>
<!--    <div class="h"> {{ title }}</div>-->
    <span class="span"> {{ zishu }} 字数</span>
    <span class="span"> {{ Math.trunc(zishu/300) }} 分钟</span>
  <span class="kaodian"> {{ message }} 考点</span>
  </div>


</template>

<script>
  import { defineComponent } from "vue";



  export default defineComponent({
    name: "beiti",
    data() { return{
      message: '',
      zishu: '',
      title:'',
    }
    },
    mounted () {
      this.$nextTick(function(){
        this.kaishi()
      }),
      this.$nextTick(function(){
        this.ziShu()
      }),
      this.$nextTick(function(){
        this.titlee()
      })
    },
    methods: {
      kaishi() {
        var txt = document.getElementsByTagName("code");
        this.message = txt.length
      },
      ziShu() {
        var txt = document.getElementsByTagName('body')[0].innerText;
        this.zishu =txt.length
      },
      titlee() {
        var txt = document.getElementsByTagName('title')[0].innerText.replace('| 医检考术',"")
        this.title =txt
      }
    }
  })





</script>

<style scoped>
.h{
  font-size: 25px;
  font-weight:bold;
  padding: 3px 3px;

}

.span{
  margin: 8px;
  padding: 3px 3px;
  text-align: center;
  font-size: 10px;
  font-weight:bold;
  color:#eeeeee;
  border-radius: 4px;
  background: #1b86ee;
  box-shadow: inset -5px -5px 9px #1a82e7,
  inset 5px 5px 9px #1c8af5;
  }
.kaodian{
  margin: 8px;
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





