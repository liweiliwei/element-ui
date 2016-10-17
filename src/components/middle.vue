<template>
  <div class="main">
    <h1 @click="datetime2($event)">11{{datetime}}</h1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datetime: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
      data2: ''
    }
  },
  methods: {
    datetime2 (e) {
      console.log(e)
    }
  },
  watch: {
    // datetime2 (Val, OldVal) {
    //   console.log(Val, OldVal)
    // }
  }
}
</script>
