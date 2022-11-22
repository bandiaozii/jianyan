<template>
  <Layout />
  <Copyright />
</template>

<script setup>
import AsideSponsors from './components/AsideSponsors.vue'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
import Copyright from './components/Copyright.vue'
</script>


<style scoped>

</style>
