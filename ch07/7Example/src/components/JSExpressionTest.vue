<template>
  <div>
    <label>数字1：</label>
    <input v-model="int1"/>
    <br/>
    <br/>
    <label>数字2：</label>
    <input v-model="int2"/>
    <br/>
    <label> 展示JavaScript表达式，您输入的数字加和为</label>
    {{parseInt(int1)+parseInt(int2)}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      int1: 0,
      int2: 0
    }
  }
}
</script>
