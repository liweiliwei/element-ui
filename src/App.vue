<template>
  <div id="app">
    <headerWrapper></headerWrapper>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

    <input type="text" name="name" v-model="inputText" value="">
    <p>
      {{inputText}}
    </p>

    <footerWrapper></footerWrapper>
  </div>
</template>

<script>
import store from './vuex/store'
import headerWrapper from 'components/headerWrapper'
import footerWrapper from 'components/footerWrapper'
export default {
  store,
  components: {
    headerWrapper, footerWrapper
  },
  data () {
    return {
      inputText: ''
    }
  }
}
</script>
