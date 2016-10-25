<template>
  <div id="app">
    <headerWrapper></headerWrapper>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <footerWrapper></footerWrapper>
  </div>
</template>

<script>
import headerWrapper from 'components/headerWrapper'
import footerWrapper from 'components/footerWrapper'

export default {
  components: {
    headerWrapper, footerWrapper
  },
  data () {
    return {
      fullscreenLoading: false
    }
  }
}
</script>
