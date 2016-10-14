<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <div class="block">
      <span class="wrapper">
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        <el-button type="info">信息按钮</el-button>
      </span>
    </div>
    <el-alert
      title="不可关闭的 alert"
      type="success"
      :closable="false">
    </el-alert>
    <el-alert
      title="自定义 close-text"
      type="info"
      close-text="知道了">
    </el-alert>
    <el-alert
      title="设置了回调的 alert"
      type="warning"
      @close="hello">
    </el-alert>
    <el-tag
      v-for="tag in tags"
      :closable="true"
      :type="tag.type"
      :key="tag"
      :close-transition="false"
      @close="handleClose(tag)"
    >
    {{tag.name}}
    </el-tag>
    <el-button
      type="primary"
      @click.native="openFullScreen"
      v-loading.fullscreen="fullscreenLoading">
      显示整页加载，3 秒后消失
    </el-button>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  data () {
    return {
      tags: [
        { key: 1, name: '标签一', type: '' },
        { key: 2, name: '标签二', type: 'gray' },
        { key: 5, name: '标签三', type: 'primary' },
        { key: 3, name: '标签四', type: 'success' },
        { key: 4, name: '标签五', type: 'warning' },
        { key: 6, name: '标签六', type: 'danger' }
      ],
      fullscreenLoading: false
    }
  },
  methods: {
    hello () {
      console.log('Hello World!')
    },
    handleClose (tag) {
      this.tags.$remove(tag)
    },
    openFullScreen () {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 3000)
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
