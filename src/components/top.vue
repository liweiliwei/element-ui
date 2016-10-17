<template>
  <div class="headerWrapper">
      <el-row class="topMenu" type="flex" justify="center">
          <el-col :span="4">
            <!-- <img src="../static/images/logo.png" alt="" /> -->
            <h1>Element</h1>
          </el-col>
          <el-col :span="12">
            <el-menu default-active="1" class="" mode="horizontal">
              <el-menu-item index="1">{{menu[0]}}</el-menu-item>
              <el-menu-item index="2">{{menu[1]}}</el-menu-item>
                <el-submenu index="3">
                  <template slot="title">{{menu[2]}}</template>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                  <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="4" class="P_center">{{menu[3]}}</el-menu-item>
            </el-menu>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menu: ['处理中心', '订单管理', '我的工作台', '个人中心']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.P_center{
  float: right !important;
}
</style>
