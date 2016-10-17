<template>
  <div class="footer">
    <el-button
      plain
      @click.native="open">
      可自动关闭
    </el-button>
    <el-button
      plain
      @click.native="open2">
      不会自动关闭
      </el-button>
  </div>
</template>
<script>
export default {
  methods: {
    open () {
      this.$notify({
        title: '标题名称',
        message: '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'
      })
    },

    open2 () {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      })
    }
  }
}
</script>
