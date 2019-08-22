<template>
<div>
  <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="类别编号">
        <el-input v-model="form.khlbid"></el-input>
      </el-form-item>
      <el-form-item label="类别名称">
        <el-input v-model="form.khlbname"></el-input>
      </el-form-item>
      <el-form-item label="英文名称">
        <el-input v-model="form.khlbegname"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.khlbbeizhu"></el-input>
      </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
          khlbid: '',
          khlbname: '',
          khlbegname: '',
          khlbbeizhu: ''
        }

      
    }

  }
}
</script>