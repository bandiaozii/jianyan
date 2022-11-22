<template>
  <div class="profile">
<!--    <img class="avatar-imgg" src="/jianyan.svg"/>-->
    <div class="msg" >{{ msg }} </div>
    <div class="msa" >{{ msa }} </div>
    <div class="mst" >{{ mst }} </div>

  </div>
</template>

<script>
export default {
  props: ['msg','msa','mst','msi'],
  // data(){
  //   return{
  //     game:sha
  //   }
  // }
}


</script>

<style>


.avatar {
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 5%;
  box-shadow: var(--vp-shadow-3);

}
.msg {
  /* text-align: right; */
  margin:  0;
  padding-left:200px ;
  font-weight: 600;
  line-height: 24px;
  font-size: 20px;
  padding-top: 20px;
}



.msa {
  position: relative;
  margin: 0 auto;
  max-width: 1152px;
  /* text-align: center; */
  padding-left:200px ;
  color: var(--vp-c-text-2);
}

.msa-line {
  position: absolute;
  top: 16px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--vp-c-divider-light);
}

.msa-text {
  position: relative;
  display: inline-block;
  /* padding: 0 24px; */
  letter-spacing: 0;
  line-height: 32px;
  font-size: 20px;
  font-weight: 500;
  background-color: var(--vp-c-bg);
}

.mst{
  /* text-align: center; */
  padding: 2px;
  padding-left:200px ;
}
.profile {
  /* flex-grow: 1; */
  background-color: var(--vp-c-bg-soft);
}


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

</style>
