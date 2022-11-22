
<template>
  <div class="section">
<!--    <span class="h"> {{ section1 }}</span>-->
    <span class="yaoqiu"> {{ requirement }}</span>
    <span class="kemu"> {{ '#'+subject1 }}</span>
    <span class="kemu"> {{ '#'+subject2 }}</span>
  </div>
  <div class="section">
    <!--    <span class="h"> {{ section1 }}</span>-->
    <span class="yaoqiu"> {{ requirement2 }}</span>
    <span class="kemu"> {{ '#'+subject12 }}</span>
    <span class="kemu"> {{ '#'+subject22 }}</span>
  </div>
</template>

<script>
import { defineComponent } from "vue";



export default defineComponent({
  name: "Section",
  data() { return{
    // section1:'',
    requirement:'',
    subject1:'',
    subject2:'',
    requirement2:'',
    subject12:'',
    subject22:'',
  }
  },
  mounted () {
        this.$nextTick(function(){
          this.titlee()
        })
  },
  methods: {
    titlee() {
      // var txt1 = document.getElementsByTagName('section1')[0].getAttribute('name')
      var txt2 = document.getElementsByTagName('section1')[0].getAttribute('primary-requirement')
      var txt3 = document.getElementsByTagName('section1')[0].getAttribute('primary-firstSubject')
      var txt4 = document.getElementsByTagName('section1')[0].getAttribute('primary-secondSubject')
      // this.section1 =txt1
      this.requirement =txt2
      this.subject1 =txt3
      this.subject2 =txt4
      // var txt1 = document.getElementsByTagName('section2')[0].getAttribute('name')
      var txt22 = document.getElementsByTagName('section2')[0].getAttribute('requirement')
      var txt33 = document.getElementsByTagName('section2')[0].getAttribute('subject1')
      var txt44 = document.getElementsByTagName('section2')[0].getAttribute('subject2')
      // this.section1 =txt1
      this.requirement2 =txt22
      this.subject12 =txt33
      this.subject22 =txt44
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





