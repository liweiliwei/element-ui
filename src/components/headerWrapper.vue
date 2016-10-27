<template>
  <div class="headerWrapper">
    <el-menu default-active="2" theme="dark" class="el-menu-demo" mode="horizontal">
      <div class="centerBox clearfix">
        <router-link to="/home"><el-menu-item index="1">首页</el-menu-item></router-link>
        <router-link to="/formA"><el-menu-item index="2">表单测试</el-menu-item></router-link>
        <router-link to="/tableA"><el-menu-item index="3">表格测试</el-menu-item></router-link>
        <el-submenu index="4" class="right">
          <template slot="title">我的工作台</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { setTitle } from '../vuex/actions'
export default {
  data () {
    return {
      numss: '2'
    }
  },
  vuex: {
    // 获取vuex状态数据
    getters: {
      title: state => state.title,
      info: ({index}) => index.info
    },
    // 状态变更事件
    actions: {
      setTitle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/less/common.less";
.centerBox{
  width: @full-width;
  margin: 0 auto;
  .right{
    float: right;
  }
}
</style>
