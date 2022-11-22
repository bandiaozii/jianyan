<template>
  <div>
    <TenantSet msg="134考点"> </TenantSet>
    <TenantSet msa="共23章｜239节" />
    <TenantSet mst="阅读时长30min" />
  </div>
<!--  <div>-->
<!--    <TenantSet msg="999" />-->
<!--    <TenantSet msa="000" />-->
<!--    <TenantSet mst="000" />-->
<!--  </div>-->
</template>

<script>

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

