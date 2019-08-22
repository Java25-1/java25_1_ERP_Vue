<template>
<div>
  <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="单位编号">
        <el-input v-model="form.jldwid"></el-input>
      </el-form-item>
      <el-form-item label="单位名称">
        <el-input v-model="form.jldwname"></el-input>
      </el-form-item>
      <el-form-item label="英文名称">
        <el-input v-model="form.jldwegname"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.jldwbeizhu"></el-input>
      </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
          jldwid: '',
          jldwname: '',
          jldwegname: '',
          jldwbeizhu: ''
        }

      
    }

  }
}
</script>