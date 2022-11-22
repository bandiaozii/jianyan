
<template>
  <div class="section">
<!--    <span class="h"> {{ section1 }}</span>-->
    <span class="yaoqiu"> {{ requirement }}</span>
    <span class="kemu"> {{ '#'+subject1 }}</span>
    <span class="kemu"> {{ '#'+subject2 }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";



export default defineComponent({
  name: "Sectiontwo",
  data() { return{
    section1:'',
    requirement:'',
    subject1:'',
    subject2:'',
  }
  },
  mounted () {
    this.$nextTick(function(){
      this.titlee()
    })
  },
  methods: {
    titlee() {
      var txt1 = document.getElementsByTagName('section2')[0].getAttribute('name')
      var txt2 = document.getElementsByTagName('section2')[0].getAttribute('requirement')
      var txt3 = document.getElementsByTagName('section2')[0].getAttribute('subject1')
      var txt4 = document.getElementsByTagName('section2')[0].getAttribute('subject2')
      this.section1 =txt1
      this.requirement =txt2
      this.subject1 =txt3
      this.subject2 =txt4
    }
  }
})

</script>


<style scoped>
.section{
  margin-top: -20px;
  /*margin-left: 10px;*/
  margin-bottom: 20px;
}
.h{
  font-size: 20px;
  font-weight:bold;
  padding: 3px 3px;
  color: #1a82e7;

}

.kemu{
  margin: 1px;
  /*padding: 1px 1px;*/
  text-align: center;
  font-size: 10px;
  /*font-weight:bold;*/
  color:#eeeeee;
  border-radius: 4px;
  background: #999999;
  box-shadow: inset -5px -5px 9px #949494,
  inset 5px 5px 9px #9e9e9e;
  /*float: right;*/
}

.yaoqiu{
  margin: 3px;
  padding: 3px 3px;
  text-align: center;
  font-size: 10px;
  font-weight:bold;
  color:#eeeeee;
  border-radius: 4px;
  background: #7fac1b;
  box-shadow: inset -5px -5px 9px #7ba71a,
  inset 5px 5px 9px #83b11c;
}
</style>





