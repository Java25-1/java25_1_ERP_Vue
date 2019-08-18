<template>
<div>人员编号:<el-input v-model="input" placeholder="请输入内容"></el-input>
    所属部门:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
人员姓名:<el-input v-model="input" placeholder="请输入内容"></el-input>
    性别:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    英文姓名:<el-input v-model="input" placeholder="请输入内容"></el-input>
   身份证号:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="基本资料" name="first">
                就职状态:<el-input v-model="input" placeholder="请输入内容"></el-input>
                行事历:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                出生日期:<el-input v-model="input" placeholder="请输入内容"></el-input>
                政治面貌:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                婚烟状况:<el-input v-model="input" placeholder="请输入内容"></el-input>
                入职日期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                血型:<el-input v-model="input" placeholder="请输入内容"></el-input>
                离职日期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                籍贯:<el-input v-model="input" placeholder="请输入内容"></el-input>
                技术职称:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                国籍:<el-input v-model="input" placeholder="请输入内容"></el-input>
                中文职务:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                民族:<el-input v-model="input" placeholder="请输入内容"></el-input>
                英文职务:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                职务:<el-input v-model="input" placeholder="请输入内容"></el-input>
                岗位:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                联系邮编:<el-input v-model="input" placeholder="请输入内容"></el-input>
                联系地址:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                联系电话:<el-input v-model="input" placeholder="请输入内容"></el-input>
                移动电话:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    </el-tab-pane>
    <el-tab-pane label="薪资信息" name="second">
                薪资方案:<el-input v-model="input" placeholder="请输入内容"></el-input>
                所得税设定<br/>
                传输科目:<el-input v-model="input" placeholder="请输入内容"></el-input>
                扣税方式:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                薪资发放方式<br/>
                发薪方式:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    </el-tab-pane>
    <el-tab-pane label="其它资料" name="third">
                最高学历:<el-input v-model="input" placeholder="请输入内容"></el-input>
                到期日期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                学位:<el-input v-model="input" placeholder="请输入内容"></el-input>
                入境日期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                毕业院校:<el-input v-model="input" placeholder="请输入内容"></el-input>
                护照号码:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                所学专业:<el-input v-model="input" placeholder="请输入内容"></el-input>
                合同起始日期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                外语水平:<el-input v-model="input" placeholder="请输入内容"></el-input>
                合同终止日期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                体检日期:<el-input v-model="input" placeholder="请输入内容"></el-input>
                合同期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    </el-tab-pane>
    <el-tab-pane label="通讯资料" name="fourth">
                电子邮件:<el-input v-model="input" placeholder="请输入内容"></el-input>
                现电话:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                户籍电话:<el-input v-model="input" placeholder="请输入内容"></el-input>
                现邮编:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                户籍邮编:<el-input v-model="input" placeholder="请输入内容"></el-input>
                现住址:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                户籍地址:<el-input v-model="input" placeholder="请输入内容"></el-input>
                紧急联系人:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                家庭电话:<el-input v-model="input" placeholder="请输入内容"></el-input>
                紧急联系邮编:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                家庭邮编:<el-input v-model="input" placeholder="请输入内容"></el-input>
                紧急联系电话:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                家庭住址:<el-input v-model="input" placeholder="请输入内容"></el-input>
                紧急联系地址:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    </el-tab-pane>
    <el-tab-pane label="备注" name="fourth">
                自定栏一:<el-input v-model="input" placeholder="请输入内容"></el-input>
                自定栏二:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                自定栏三:<el-input v-model="input" placeholder="请输入内容"></el-input>
                自定栏四:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                自定栏五:<el-input v-model="input" placeholder="请输入内容"></el-input>
                自定栏六:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                备注:<el-input v-model="input" placeholder="请输入内容"></el-input> <br/>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>