<template>
  <div class="tabele">
    <el-table
      :data="tableData2"
      style="width: 100%"
      :custom-criteria="['$info', '$positive']"
      :custom-background-colors="['#C9E5F5', '#E2F0E4']"
      selection-mode="multiple"
      @selectionchange="handleSelectionChange"
      allow-no-selection>
      <el-table-column
        property="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        property="address"
        label="地址">
      </el-table-column>
      <el-table-column
         type="selection"
        label="操作">
      </el-table-column>
    </el-table>
<!-- 表二  -->
    <el-table
      :data="tableData2"
      style="width: 100%">
      <el-table-column
        property="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        property="address"
        label="地址">
      </el-table-column>
      <el-table-column
        property="operation"
        label="操作"
        @click="lalala">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路1518弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路1518弄',
          $info: true
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路1518弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路1518弄',
          $positive: true,
          operation: '删除'
        }]
      }
    },
    methods: {
      lalala () {
        console.log('222')
      }
    }
  }
</script>
