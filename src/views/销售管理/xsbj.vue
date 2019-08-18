<template>
  <el-form :inline="true" class="demo-form-inline" label-width="100px" label-position="right">
    <el-form-item>
      <el-checkbox v-model="checked">正式客户</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-form-item>
        <el-select v-model="user.name" placeholder="选择客户">
          <el-option label="xx" value="shanghai"></el-option>
          <el-option label="xx" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form-item>
    <el-form-item label="单据日期">
      <el-date-picker
        v-model="djDate"
        align="right"
        type="date"
        placeholder="请选择单据日期"
        :picker-options="pickerOptions"
      ></el-date-picker>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary">查询</el-button>
    </el-form-item> -->
    <br />
    <el-form-item label="送货地址">
      <el-input placeholder></el-input>
    </el-form-item>
    <el-form-item label="单据号码">
      <el-input placeholder></el-input>
    </el-form-item>
    <el-form-item label="有效日期">
      <el-date-picker
        v-model="yxDate"
        align="right"
        type="date"
        placeholder="请选择有效日期"
        :picker-options="pickerOptions"
      ></el-date-picker>
    </el-form-item>
    <br />
    <el-form-item label="币别">
      <el-select v-model="user.bb" placeholder="选择币别">
        <el-option label="人民币" value="rmb"></el-option>
        <el-option label="欧元" value="oy"></el-option>
        <el-option label="美元" value="my"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="单价是否含税">
      <el-select v-model="user.hs" placeholder="---请选择---">
        <el-option label="未含税" value="0"></el-option>
        <el-option label="含税" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="汇率">
      <el-input placeholder></el-input>
    </el-form-item>
    <br />
    <el-tabs v-model="activeName">
      <el-tab-pane label="内容" name="first">
        <el-table :data="tableData" style="width: 100%" max-height="250">
          <el-table-column fixed label="（栏号）" width="120"></el-table-column>
          <el-table-column label="物料编号" width="120"></el-table-column>
          <el-table-column label="（物料名称）" width="120"></el-table-column>
          <el-table-column label="（规格型号）" width="120"></el-table-column>
          <el-table-column label="单位名称" width="120"></el-table-column>
          <el-table-column label="数量" width="80"></el-table-column>
          <el-table-column label="折扣前单价" width="120"></el-table-column>
          <el-table-column label="折数（%）" width="120"></el-table-column>
          <el-table-column label="单价" width="80"></el-table-column>
          <el-table-column label="（金额）" width="80"></el-table-column>
          <el-table-column label="税率（%）" width="120"></el-table-column>
          <el-table-column label="税额" width="80"></el-table-column>
          <el-table-column label="含税金额" width="80"></el-table-column>
          <el-table-column label="是否赠品" width="80"></el-table-column>
          <el-table-column label="分录备注" width="200"></el-table-column>
        </el-table>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="24">
          <span>合计：</span>&nbsp;&nbsp;数量：00.00&nbsp;&nbsp;金额：00.00&nbsp;&nbsp;税额：00.00&nbsp;&nbsp;含税金额：00.00
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="备注" name="second">
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="12">
          <span>表头条文</span>&nbsp;&nbsp;&nbsp;
          <el-input style="width:180px;"></el-input>
        </el-col>
        <el-col :span="12">
          <span>自定义栏一</span>&nbsp;&nbsp;&nbsp;
          <el-input style="width:180px;"></el-input>
        </el-col>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="12">
          <span>表头条文</span>&nbsp;&nbsp;&nbsp;
          <el-input style="width:180px;"></el-input>
        </el-col>
        <el-col :span="12">
          <span>自定义栏二</span>&nbsp;&nbsp;&nbsp;
          <el-input style="width:180px;"></el-input>
        </el-col>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="24">
            <span>备注</span>&nbsp;&nbsp;&nbsp;
            <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="textarea2"
            ></el-input>
        </el-col>
      </el-tab-pane>
    </el-tabs>
    <el-col :span="24">&nbsp;</el-col>
    <el-col :span="12">
      <span>业务人员</span>&nbsp;&nbsp;&nbsp;
      <el-input style="width:180px;"></el-input>
    </el-col>
    <el-col :span="12">
      <span>制单人员</span>&nbsp;&nbsp;&nbsp;
      <el-input style="width:180px;"></el-input>
    </el-col>
    <el-col :span="24">&nbsp;</el-col>
    <el-col :span="12">
      <span>复核人员</span>&nbsp;&nbsp;&nbsp;
      <el-form-item>
        <el-select v-model="user.demp" placeholder="---请选择---">
          <el-option label="1部门" value="demp1"></el-option>
          <el-option label="2部门" value="demp2"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <span>复核人员</span>&nbsp;&nbsp;&nbsp;
      <el-input style="width:180px;"></el-input>
    </el-col>
    <el-col :span="24">&nbsp;</el-col>
    <el-col :span="12">
      <el-form-item>
        <el-select v-model="user.tjcx" placeholder="查询">
          <el-option label="历史交易查询" value="lishijy"></el-option>
          <el-option label="利润预估查询" value="lirunyg"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item>
        <el-select v-model="user.gongn" placeholder="功能">
          <el-option label="批次变更单价" value="upMoney"></el-option>
          <el-option label="发送Email" value="email"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
  </el-form>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      tableData:[],
      activeName: "first",
      checked: true,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      //单据日期
      djDate: "",
      //   有效日期
      yxDate: "",
      //选择客户
      user: {
        //   客户名称
        name: "",
        // 币别
        bb: "",
        // 含税
        hs: "",
        // 部门
        demp: "",
        // 条件查询
        tjcx: "",
        // 功能
        gongn: ""
      },
      // 备注
      textarea2:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
/*@import url(); 引入公共css类*/
* {
}
</style>