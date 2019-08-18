<template>
  <el-form :inline="true" class="demo-form-inline" label-width="100px" label-position="right">
    <el-form-item label="客户">
      <el-select v-model="user.name" placeholder="--请选择--">
        <el-option label="xx" value="shanghai"></el-option>
        <el-option label="xx" value="beijing"></el-option>
      </el-select>
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
    <el-form-item label="送货地址">
      <el-input placeholder v-model="user.arrders" clearable></el-input>
    </el-form-item>
    <br />
    <el-form-item label="单据号码">
      <el-input placeholder v-model="user.djhm" clearable></el-input>
    </el-form-item>
    <el-form-item label="销售出库类型">
      <el-select v-model="user.xsckType" placeholder="---请选择---">
        <el-option label="000" value="0"></el-option>
        <el-option label="001" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="币别">
      <el-select v-model="user.bb" placeholder="选择币别">
        <el-option label="人民币" value="rmb"></el-option>
        <el-option label="欧元" value="oy"></el-option>
        <el-option label="美元" value="my"></el-option>
      </el-select>
    </el-form-item>
    <br />
    <el-form-item label="单价是否含税">
      <el-select v-model="user.hs" placeholder="---请选择---">
        <el-option label="未含税" value="0"></el-option>
        <el-option label="含税" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="汇率">
      <el-input placeholder v-model="user.huilv"></el-input>
    </el-form-item>
    <el-form-item label="仓库">
      <el-select v-model="user.ck" placeholder="请选择">
        <el-option label="上海仓" value="sh"></el-option>
        <el-option label="北京仓" value="bj"></el-option>
        <el-option label="杭州仓" value="hz"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="国外贸易">
      <el-select v-model="gwmy" placeholder="---请选择---">
        <el-option label="是" value="0"></el-option>
        <el-option label="否" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="凭证编号">
      <el-input placeholder v-model="user.pzbh"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" style="padding-left:25px">复合后自动生成发票</el-checkbox>

    <el-tabs v-model="activeName1">
      <el-tab-pane label="内容" name="first1">
        <el-table :data="tableData" style="width: 100%" max-height="250">
          <el-table-column fixed label="（栏号）" width="120"></el-table-column>
          <el-table-column label="物料编号" width="120"></el-table-column>
          <el-table-column label="（物料名称）" width="120"></el-table-column>
          <el-table-column label="（规格型号）" width="120"></el-table-column>
          <el-table-column label="单位名称" width="120"></el-table-column>
          <el-table-column label="数量" width="80"></el-table-column>
          <el-table-column label="折扣前单价" width="80"></el-table-column>
          <el-table-column label="折数(%)" width="80"></el-table-column>
          <el-table-column label="单价" width="80"></el-table-column>
          <el-table-column label="金额" width="80"></el-table-column>
          <el-table-column label="税率（%）" width="120"></el-table-column>
          <el-table-column label="税额" width="80"></el-table-column>
          <el-table-column label="含税金额" width="80"></el-table-column>
          <el-table-column label="批号" width="80"></el-table-column>
          <el-table-column label="物料组合" width="80"></el-table-column>
          <el-table-column label="赠品" width="60"></el-table-column>
          <el-table-column label="发票明细" width="80"></el-table-column>
          <el-table-column label="未开票数量" width="80"></el-table-column>
          <el-table-column label="分录备注" width="120"></el-table-column>
          <el-table-column label="来源单别" width="80"></el-table-column>
          <el-table-column label="来源单号" width="80"></el-table-column>
          <el-table-column label="客户订单" width="80"></el-table-column>
        </el-table>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="24">
          <span>合计：</span>&nbsp;&nbsp;数量：00.00&nbsp;&nbsp;金额：00.00&nbsp;&nbsp;税额：00.00&nbsp;&nbsp;含税金额：00.00
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="账款" name="zk1">
        <el-col :span="12">
          <el-form-item label="账款归属">
            <el-select v-model="zkgs" placeholder="---请选择---">
              <el-option label="客户1" value="0"></el-option>
              <el-option label="客户2" value="1"></el-option>
              <el-option label="客户3" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="收款日期">
            <el-date-picker v-model="skdate" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="24"></el-col>
        <el-col :span="12">
          <el-form-item label="收款条件">
            <el-select v-model="sk.tiaoj" placeholder="---请选择---">
              <el-option label="货到" value="0"></el-option>
              <el-option label="次月" value="1"></el-option>
              <el-option label="月结" value="3"></el-option>
              <el-option label="其他" value="3"></el-option>
            </el-select>&nbsp;
            <el-input placeholder v-model="sk.dd" clearable style="width:80px"></el-input>&nbsp;&nbsp;天
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="账款月份">
            <el-date-picker v-model="sk.yy" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="备注" name="Remarks">
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="12">
          <el-form-item label="自定义栏一">
            <el-input style="width:180px;"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="自定义栏二">
            <el-input style="width:180px;"></el-input>
          </el-form-item>
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
      <el-form-item label="业务人员">
        <el-input style="width:180px;"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="制单人员">
        <el-input style="width:180px;"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="所属部门">
        <el-select v-model="user.demp" placeholder="请选择">
          <el-option label="1部门" value="demp1"></el-option>
          <el-option label="2部门" value="demp2"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="复核人员">
        <el-input style="width:180px;"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="所属项目">
        <el-select v-model="user.xm" placeholder="请选择">
          <el-option label="xm1" value="demp1"></el-option>
          <el-option label="xm2" value="demp2"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="8">
      <el-form-item>
        <el-select v-model="user.tjcx" placeholder="查询">
          <el-option label="历史交易查询" value="lishijy"></el-option>
          <el-option label="转单记录查询" value="zdjlcx"></el-option>
          <el-option label="定金查询" value="ddcx"></el-option>
          <el-option label="利润预估查询" value="lirunyg"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item>
        <el-select v-model="user.tjcx" placeholder="转单">
          <el-option label="转销售出库单" value="zxsckd"></el-option>
          <el-option label="销售报价转入" value="xsbjzr"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="8">
      <el-form-item>
        <el-select v-model="user.gongn" placeholder="功能">
          <el-option label="批次变更单价" value="upMoney"></el-option>
          <el-option label="物料组合设定" value="wlzhset"></el-option>
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
      //是否自动生成发票[true/false]
      checked:'',
      //账款归属者[客户]
      zkgs: "",
      activeName1: "first1",
      //备注
      textarea2: "",
      //国外贸易
      gwmy:'',
      //单据日期
      djDate:'',
      //收款日期
      skdate:'',
      user: {
        //凭证编号
        pzbh:'',
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
        gongn: "",
        // 送货地址
        arrders: "",
        //单据号码
        djhm: "",
        //小数出库类型
        xsckType:'',
        // 销售订单类型
        xsddlx: "",
        // 客户订单
        khdd: "",
        //单况
        dk: "",
        //汇率
        huilv: "",
        // 所属项目
        xm: "",
        //仓库
        ck:''
      },
      //国外贸易
      gwmy:'',
      // 收款
      sk: {
        // 条件
        tiaoj: "",
        // 天
        dd: "",
        //月
        yy: ""
      },
      //账款归属者[客户]
      zkgs: "",

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
      }
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
</style>