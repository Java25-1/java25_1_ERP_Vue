<template>
<div>
  <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="类别编号">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="类别名称">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="英文名称">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="存货科目">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="销售收入科目">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="销售成本科目">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="赠品费用科目">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="其它收入科目">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="其它费用科目">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="其它成本科目">
        <el-input ></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea"></el-input>
      </el-form-item>
  </el-form>
</div>
</template>
<script>
export default {
  data() {
     return {
       input: '',
      textarea: ''
    }

  }
}
</script>

<style  scoped>
/*@import url(); 引入公共css类*/

</style>