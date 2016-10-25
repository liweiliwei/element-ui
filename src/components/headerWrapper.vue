<template>
  <div class="headerWrapper">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
      <div class="centerBox clearfix">
        <router-link to="/home"><el-menu-item index="1">首页</el-menu-item></router-link>
        <router-link to="/pageA"><el-menu-item index="3">订单管理</el-menu-item></router-link>
        <el-submenu index="2" class="right">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // menu: ['处理中心', '订单管理', '我的工作台', '个人中心']
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
