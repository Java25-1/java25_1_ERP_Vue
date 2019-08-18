<template>
<div>客户编号:<el-input v-model="input" placeholder="请输入内容"></el-input>
    英文名称:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    客户全称:<el-input v-model="input" placeholder="请输入内容"></el-input>
    类别:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    客户简称:<el-input v-model="input" placeholder="请输入内容"></el-input>
    地区:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    英文名称:<el-input v-model="input" placeholder="请输入内容"></el-input>
    币别:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="商机信息" name="first">
                客户等级:<el-input v-model="input" placeholder="请输入内容"></el-input>
                始洽日期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                洽谈阶段:<el-input v-model="input" placeholder="请输入内容"></el-input>
                预约拜访日:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                成功几率:<el-input v-model="input" placeholder="请输入内容"></el-input>
                最近拜访日:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                决策者:<el-input v-model="input" placeholder="请输入内容"></el-input>
                预估成交额:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                客户简介:<el-input v-model="input" placeholder="请输入内容"></el-input><br/>
    </el-tab-pane>
    <el-tab-pane label="需求产品" name="second">
               <el-table
                :data="tableData"
                 style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="地址">
                    </el-table-column>
                </el-table>

    </el-tab-pane>
    <el-tab-pane label="基本资料" name="third">
                负责人:<el-input v-model="input" placeholder="请输入内容"></el-input>
                业务人员:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                联系人:<el-input v-model="input" placeholder="请输入内容"></el-input>
                税务登记号:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                联系电话一:<el-input v-model="input" placeholder="请输入内容"></el-input>
                资本额:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                联系电话二:<el-input v-model="input" placeholder="请输入内容"></el-input>
                行业别:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                联系电话三:<el-input v-model="input" placeholder="请输入内容"></el-input>
                电子邮件:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                移动电话:<el-input v-model="input" placeholder="请输入内容"></el-input>
                网址:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                银行账号:<el-input v-model="input" placeholder="请输入内容"></el-input>
                传真号码:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                开户银行:<el-input v-model="input" placeholder="请输入内容"></el-input>
                失效日期:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
    </el-tab-pane>
    <el-tab-pane label="收款信息" name="fourth">
                售价等级:<el-input v-model="input" placeholder="请输入内容"></el-input>
                折数(%):<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                收款条件:<el-input v-model="input" placeholder="请输入内容"></el-input>
                信用等级:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                每月结账日:<el-input v-model="input" placeholder="请输入内容"></el-input>
                单价是否含税:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                应收账款科目:<el-input v-model="input" placeholder="请输入内容"></el-input>
                预收账款科目:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                
    </el-tab-pane>
    <el-tab-pane label="地址" name="fourth">
                
    </el-tab-pane>
    <el-tab-pane label="备注" name="fourth">
                自定栏一:<el-input v-model="input" placeholder="请输入内容"></el-input>
                自定栏二:<el-input v-model="input" placeholder="请输入内容"></el-input>   <br/>
                备注:<el-input v-model="input" placeholder="请输入内容"></el-input> <br/>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
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