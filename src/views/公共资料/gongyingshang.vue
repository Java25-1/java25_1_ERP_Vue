<template>
<div>
  <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="类别编号">
        <el-input v-model="form.gysid"></el-input>
      </el-form-item>
      <el-form-item label="类别名称">
        <el-input v-model="form.gysname"></el-input>
      </el-form-item>
      <el-form-item label="英文简称">
        <el-input v-model="form.gysegname"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.gysbeizhu"></el-input>
      </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
          gysid: '',
          gysname: '',
          gysegname: '',
          gysbeizhu: ''
        }

      
    }

  }
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>