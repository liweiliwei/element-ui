<template>
  <div id="app">
    <top></top>
    <middle></middle>
    <bottom></bottom>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'  // UI
Vue.use(Element) // 注册UI

import top from './components/top'
import middle from './components/middle'
import bottom from './components/bottom'

export default {
  components: {
    top, middle, bottom
  },
  data () {
    return {
      fullscreenLoading: false
    }
  }
}
</script>
