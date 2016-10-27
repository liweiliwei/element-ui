<template>
  <div class="footer">
      <button type="button" @click="btnA" name="button">点击按钮</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datetime: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
      data2: '',
      inputText: '333'
    }
  },
  methods: {
    btnA () {
      console.log('2222')
      console.log(this.inputText)
    }
  },
  watch: {
    // datetime2 (Val, OldVal) {
    //   console.log(Val, OldVal)
    // }
  }
}
</script>
<style scoped lang="less">
@red:#ccc;
h1{
  color: @red
}
</style>
