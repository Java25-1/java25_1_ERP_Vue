<template>
  <el-form :inline="true" class="demo-form-inline" label-width="100px" label-position="right">
    <el-form-item label="入库类型">
      <el-select v-model="user.rukType" placeholder="---请选择---">
        <el-option label="000" value="0"></el-option>
        <el-option label="001" value="1"></el-option>
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
    <el-form-item label="仓库">
      <el-select v-model="user.ck" placeholder="请选择">
        <el-option label="北京仓" value="bj"></el-option>
        <el-option label="上海仓" value="sh"></el-option>
        <el-option label="杭州仓" value="hz"></el-option>
      </el-select>
    </el-form-item>
    <br />
    <el-form-item label="单据编号">
      <el-input placeholder v-model="user.djid"></el-input>
    </el-form-item>
    <el-form-item label="凭证编号">
      <el-input placeholder v-model="user.pzid"></el-input>
    </el-form-item>
    <br />

    <el-tabs v-model="activeName1">
      <el-tab-pane label="内容" name="first1">
        <el-table :data="tableData" style="width: 100%" max-height="250">
          <el-table-column fixed label="（栏号）" width="120"></el-table-column>
          <el-table-column label="物料编号" width="120"></el-table-column>
          <el-table-column label="（物料名称）" width="120"></el-table-column>
          <el-table-column label="（规格型号）" width="120"></el-table-column>
          <el-table-column label="单位" width="120"></el-table-column>
          <el-table-column label="数量" width="80"></el-table-column>
          <el-table-column label="单价" width="120"></el-table-column>
          <el-table-column label="（金额）" width="80"></el-table-column>
          <el-table-column label="批号" width="80"></el-table-column>
          <el-table-column label="分录备注" width="120"></el-table-column>
        </el-table>
        <el-col :span="24">&nbsp;</el-col>
        <el-col :span="24">
          <span>合计：</span>&nbsp;&nbsp;数量：00.00&nbsp;&nbsp;金额：00.00
        </el-col>
      </el-tab-pane>
      <el-tab-pane label="备注" name="second1">
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
      <el-form-item label="入库人员">
        <el-select v-model="user.rkname" placeholder="请选择">
          <el-option label="热穆亚军" value="demp1"></el-option>
          <el-option label="式仪表" value="demp2"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="制单人员">
        <el-input style="width:180px;"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="所属部门">
        <el-select v-model="user.bm" placeholder="请选择">
          <el-option label="bm1" value="demp1"></el-option>
          <el-option label="bm2" value="demp2"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="12">
      <el-form-item label="复核人员">
        <el-input style="width:180px;"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="24"></el-col>
    <el-col :span="8">
      <el-form-item>
        <el-select v-model="user.gongn" placeholder="功能">
          <el-option label="批号设定" value="phsd"></el-option>
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
      user: {
        //部门
        bm: "",
        //功能
        gongn: "",
        //入库人员
        rkname: "",
        //单据编号
        djid: "",
        //凭证编号
        pzid: "",
        //仓库
        ck: "",
        //入库类型
        rukType:''
      },
       activeName1: "first1",
      //单据日期
      djDate: "",
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