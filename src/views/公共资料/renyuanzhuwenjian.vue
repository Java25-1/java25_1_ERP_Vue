<template>
<div>
                <el-form :inline="true" :model="form" class="demo-form-inline">
                          <el-form-item label="人员编号">
                              <el-input v-model="form.rybh"></el-input>
                            </el-form-item>
                            <el-form-item label="所属部门">
                              <el-input v-model="form.ssbm"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form :inline="true" :model="form" class="demo-form-inline">
                          <el-form-item label="人员姓名">
                              <el-input v-model="form.ryxm"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                              <el-input v-model="form.xb"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form :inline="true" :model="form" class="demo-form-inline">
                          <el-form-item label="英文姓名">
                              <el-input v-model="form.ywxm"></el-input>
                            </el-form-item>
                            <el-form-item label="身份证号">
                              <el-input v-model="form.sfzh"></el-input>
                            </el-form-item>
                </el-form>
              
               
                <el-tab-pane label="基本资料" name="first">
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="就职状态">
                                  <el-input v-model="form.jzzt"></el-input>
                                </el-form-item>
                                <el-form-item label="行事例">
                                  <el-input v-model="form.hsl"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="出生日期">
                                  <el-input v-model="form.csrq"></el-input>
                                </el-form-item>
                                <el-form-item label="政治面貌">
                                  <el-input v-model="form.zzmm"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="婚姻状况">
                                  <el-input v-model="form.hyzk"></el-input>
                                </el-form-item>
                                <el-form-item label="入职日期">
                                  <el-input v-model="form.rzrq"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="血型">
                                  <el-input v-model="form.xx"></el-input>
                                </el-form-item>
                                <el-form-item label="离职日期">
                                  <el-input v-model="form.lzrq"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="籍贯">
                                  <el-input v-model="form.jg"></el-input>
                                </el-form-item>
                                <el-form-item label="技术职称">
                                  <el-input v-model="form.jszc"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="国籍">
                                  <el-input v-model="form.gj"></el-input>
                                </el-form-item>
                                <el-form-item label="中文职务">
                                  <el-input v-model="form.zwzw"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="民族">
                                  <el-input v-model="form.mz"></el-input>
                                </el-form-item>
                                <el-form-item label="英文职务">
                                  <el-input v-model="form.ywzw"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="职务">
                                  <el-input v-model="form.zw"></el-input>
                                </el-form-item>
                                <el-form-item label="岗位">
                                  <el-input v-model="form.gw"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="联系邮编">
                                  <el-input v-model="form.lxyb"></el-input>
                                </el-form-item>
                                <el-form-item label="联系地址">
                                  <el-input v-model="form.lxdz"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="联系电话">
                                  <el-input v-model="form.lxdh"></el-input>
                                </el-form-item>
                                <el-form-item label="移动电话">
                                  <el-input v-model="form.yddh"></el-input>
                                </el-form-item>
                            </el-form>
                </el-tab-pane>
     


                 <el-tab-pane label="薪资信息" name="second">
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="薪资方案">
                                  <el-input v-model="form.xzfa"></el-input>
                                </el-form-item>
                                <el-form-item label="所得税设定">
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="传输科目">
                                  <el-input v-model="form.lxdh"></el-input>
                                </el-form-item>
                                <el-form-item label="扣税方式">
                                  <el-input v-model="form.yddh"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="薪资发放方式">
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="发薪方式">
                                  <el-input v-model="form.lxdh"></el-input>
                                </el-form-item>
                            </el-form>
                </el-tab-pane>

                <el-tab-pane label="其它资料" name="third">
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="最高学历">
                                  <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="到期日期">
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="学位">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="入境日期">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="毕业院校">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="护照号码">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="所学专业">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="合同起始日期">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="外语水平">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="合同终止日期">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="体检日期">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="合同期">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                </el-tab-pane>


                <el-tab-pane label="通讯资料" name="fourth">
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="电子邮件">
                                  <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="现电话">
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="户籍电话">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="现邮编">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="户籍邮编">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="现住址">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="户籍地址">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="紧急联系人">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="家庭电话">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="紧急联系邮编">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="家庭邮编">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="紧急联系电话">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="家庭住址">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="紧急联系住址">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                </el-tab-pane>

                 <el-tab-pane label="备注" name="fifth">
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="自定义栏一">
                                  <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="自定义栏四">
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="自定义栏二">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="自定义栏五">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :inline="true" :model="form" class="demo-form-inline">
                              <el-form-item label="自定义栏三">
                                  <el-input ></el-input>
                                </el-form-item>
                                <el-form-item label="自定义栏六">
                                  <el-input ></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form-item label="备注">
                              <el-input type="textarea" v-model="form.jldwbeizhu"></el-input>
                            </el-form-item>
                </el-tab-pane>

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