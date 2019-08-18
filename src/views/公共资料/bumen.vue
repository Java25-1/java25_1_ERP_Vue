<template>
<div class=''>
<div>部门编号:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
<div>部门名称:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
<div>英文名称:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
<div>编制人数:   男性:<el-input v-model="input" placeholder="请输入内容"></el-input>女性:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
<div>工资方案:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
<div>行事例:<el-input v-model="input" placeholder="请输入内容"></el-input></div>
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

   return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }

  }
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>