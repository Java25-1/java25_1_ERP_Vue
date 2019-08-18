<template>
<div class=''>
<div>类别编号:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
<div>类别名称:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
<div>英文名称:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
<div>备注:<el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
<el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
     return {
      textarea: ''
    }

  }
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>