<template>
<div>
  <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="仓库编号">
        <el-input v-model="form.ckid"></el-input>
      </el-form-item>
      <el-form-item label="仓库名称">
        <el-input v-model="form.ckname"></el-input>
      </el-form-item>
      <el-form-item label="仓库简称">
        <el-input v-model="form.ckeasyname"></el-input>
      </el-form-item>
      <el-form-item label="英文名称">
        <el-input v-model="form.ckegname"></el-input>
      </el-form-item>
      <el-form-item label="联系人员">
        <el-input v-model="form.cklianxirenyuan"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.ckphone"></el-input>
      </el-form-item>
      <el-form-item label="仓库地址">
        <el-input v-model="form.ckaddress"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.ckbeizhu"></el-input>
      </el-form-item>
      <el-form-item >
        <el-select v-model="form.cksheding" placeholder="设定">
          <el-option label="业务员责任绩效设定" value="shanghai"></el-option>
        </el-select>
      </el-form-item>
  </el-form>
</div>
</template>


<script>
export default {
  data() {
    return {
      form: {
          ckid: '',
          ckname: '',
          ckeasyname: '',
          ckegname: '',
          cklianxirenyuan: '',
          ckphone: '',
          ckaddress: '',
          ckbeizhu: '',
          cksheding:''
        }

      
    }

  }
}
</script>
