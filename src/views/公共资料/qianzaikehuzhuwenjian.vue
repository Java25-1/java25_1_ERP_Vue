<template>
<div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item label="客户编号">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="英文名称">
            <el-input ></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item label="客户全称">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="类别">
            <el-input ></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item label="客户简称">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="地区">
            <el-input ></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item label="英文名称">
            <el-input ></el-input>
          </el-form-item>
          <el-form-item label="币别">
            <el-input ></el-input>
          </el-form-item>
        </el-form>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="商机信息" name="first">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="客户等级">
                      <el-input v-model="form.khdj"></el-input>
                    </el-form-item>
                    <el-form-item label="始洽日期">
                      <el-input v-model="form.qtrq"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="洽谈阶段">
                      <el-input v-model="form.qtjd"></el-input>
                    </el-form-item>
                    <el-form-item label="预约拜访日">
                      <el-input v-model="form.yybfr"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="成功几率">
                      <el-input v-model="form.cgjl"></el-input>
                    </el-form-item>
                    <el-form-item label="最近拜访日">
                      <el-input v-model="form.zjbfr"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="决策者">
                      <el-input v-model="form.jcz"></el-input>
                    </el-form-item>
                    <el-form-item label="预估成交额">
                      <el-input v-model="form.ygcje"></el-input>
                    </el-form-item>
                </el-form>
                <el-form-item label="客户简介">
                  <el-input v-model="form.jj"></el-input>
                </el-form-item>
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
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="负责人">
                      <el-input v-model="form.fzr"></el-input>
                    </el-form-item>
                    <el-form-item label="业务人员">
                      <el-input v-model="form.ywry"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="联系人">
                      <el-input v-model="form.lxr"></el-input>
                    </el-form-item>
                    <el-form-item label="税务登记号">
                      <el-input v-model="form.swdjh"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="联系电话一">
                      <el-input v-model="form.dh1"></el-input>
                    </el-form-item>
                    <el-form-item label="资本额">
                      <el-input v-model="form.zbe"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="联系电话二">
                      <el-input v-model="form.dh2"></el-input>
                    </el-form-item>
                    <el-form-item label="行业别">
                      <el-input v-model="form.hyb"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="联系电话三">
                      <el-input v-model="form.dh3"></el-input>
                    </el-form-item>
                    <el-form-item label="电子邮件">
                      <el-input v-model="form.dzyj"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="移动电话">
                      <el-input v-model="form.yddh"></el-input>
                    </el-form-item>
                    <el-form-item label="网址">
                      <el-input v-model="form.wz"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="银行账号">
                      <el-input v-model="form.yhzh"></el-input>
                    </el-form-item>
                    <el-form-item label="传真号码">
                      <el-input v-model="form.czhm"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="开户银行">
                      <el-input v-model="form.khyh"></el-input>
                    </el-form-item>
                    <el-form-item label="失效日期">
                      <el-input v-model="form.sxrq"></el-input>
                    </el-form-item>
                </el-form>
    </el-tab-pane>
    <el-tab-pane label="收款信息" name="fourth">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="售价等级">
                      <el-input v-model="form.qzkhdj"></el-input>
                    </el-form-item>
                    <el-form-item label="折数(%)">
                      <el-input v-model="form.qzkhzs"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="收款条件">
                      <el-input v-model="form.qzkhsk"></el-input>
                    </el-form-item>
                    <el-form-item label="信用等级">
                      <el-input v-model="form.qzkhxy"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="每月结账日">
                      <el-input v-model="form.qzkhjzr"></el-input>
                    </el-form-item>
                    <el-form-item label="单价是否含税">
                      <el-input v-model="form.qzkhshui"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="应收账款科目">
                      <el-input v-model="form.qzkhyiszk"></el-input>
                    </el-form-item>
                    <el-form-item label="预收账款科目">
                      <el-input v-model="form.qzkhyuszk"></el-input>
                    </el-form-item>
                </el-form>
                
    </el-tab-pane>
    <el-tab-pane label="地址" name="fifth">
                ？？？？？？？？？？？？？？？？
    </el-tab-pane>
    <el-tab-pane label="备注" name="sixth">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                  <el-form-item label="自定栏一">
                      <el-input v-model="form.qzkhzdl1"></el-input>
                    </el-form-item>
                    <el-form-item label="自定栏二">
                      <el-input v-model="form.qzkhzdl2"></el-input>
                    </el-form-item>
                </el-form>
                <el-form-item label="备注">
                  <el-input type="textarea" v-model="form.qzkhbeizhu"></el-input>
                </el-form-item>
    </el-tab-pane>
  </el-tabs>
  </div>





</template>
<script>
  export default {
    data() {
      return {
        form:{ 
              khdj:'',
              qtrq:'',
              qtjd:'',
              yybfr:'',
              cgjl:'',
              zjbfr:'',
              jcz:'',
              ygcje:'',
              jj:'',
              fzr:'',
              ywry:'',
              lxr:'',
              swdjh:'',
              dh1:'',
              zbe:'',
              dh2:'',
              hyb:'',
              dh3:'',
              dzyj:'',
              yddh:'',
              wz:'',
              yhzh:'',
              czhm:'',
              khyh:'',
              sxrq:'',
              qzkhdj:'',
              qzkhzs:'',
              qzkhsk:'',
              qzkhxy:'',
              qzkhjzr:'',
              qzkhshui:'',
              qzkhyiszk:'',
              qzkhyuszk:'',
              qzkhzdl1:'',
              qzkhzdl2:'',
              qzkhbeizhu:''
        },
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