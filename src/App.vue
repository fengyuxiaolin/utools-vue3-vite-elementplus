<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

// 数据库增删查 demo
proxy.$api.postApi({
  prefix: 'hello_doc',
  data: {
    str: 'hello'
  }
})
proxy.$api.allDocsApi('hello_doc').then((allDocs) => {
  console.log('allDocs: ', allDocs);
  allDocs.forEach(doc => {
    proxy.$api.removeApi(doc)
  });
})
</script>

<template>
  <HelloWorld />
</template>

<style>
</style>
