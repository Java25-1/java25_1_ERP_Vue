<template>
<div>
  <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="部门编号">
        <el-input v-model="form.dpid">11234</el-input>
      </el-form-item>
      <el-form-item label="部门名称">
        <el-input v-model="form.dpname"></el-input>
      </el-form-item>
      <el-form-item label="英文名称">
        <el-input v-model="form.dpegname"></el-input>
      </el-form-item>

      <el-form-item label="编制人数">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="男性">
            <el-input v-model="form.male"></el-input>
          </el-form-item>
          <el-form-item label="女性">
            <el-input v-model="form.female"></el-input>
          </el-form-item>
        </el-form>
      </el-form-item>
  
      <el-form-item label="工资方案">
        <el-input v-model="form.gongzifangan"></el-input>
      </el-form-item>
  
      <el-form-item label="行事历">
        <el-input v-model="form.hangshili"></el-input>
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
          dpid: '',
          dpname: '',
          dpeggame: '',
          male: '',
          female: '',
          gongzifangan: '',
          hangshili: '',
          ckbeizhu: '',
          cksheding:''
        }

      
    }

  }
}
</script>
