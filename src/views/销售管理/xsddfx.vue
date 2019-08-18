<template>
  <div>
    <el-tabs v-model="activeName1">
      <el-tab-pane label="客户" name="first1">
        <el-row>
          <el-col :span="24">
            客户区间
            <el-select v-model="user.gsname" placeholder="--请选择--">
              <el-option label="三国公司" value="sanguo"></el-option>
              <el-option label="北京公司" value="beijing"></el-option>
            </el-select>&nbsp;&nbsp;To&nbsp;
            <el-input v-model="user.gsname2" clearable placeholder="请输入内容" style="width:240px"></el-input>&nbsp;&nbsp;订单日期
            <el-date-picker
              v-model="user.djDate"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>&nbsp;&nbsp;To&nbsp;
            <el-date-picker
              v-model="user.djDate2"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px">
          <el-col :span="24">
            预出库日
            <el-date-picker
              v-model="user.yckDate"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>&nbsp;&nbsp;To&nbsp;
            <el-date-picker
              v-model="user.yckDate2"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>
            <el-checkbox v-model="checked" style="padding-left:25px">已结案显示</el-checkbox>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="物料" name="second1">
        <el-row>
          <el-col :span="24">
            物料区间
            <el-select v-model="user.wlname" placeholder="--请选择--">
              <el-option label="物料A" value="wl1"></el-option>
              <el-option label="物料B" value="wl2"></el-option>
            </el-select>&nbsp;&nbsp;To&nbsp;
            <el-input v-model="user.wlname2" clearable placeholder="请输入内容" style="width:240px"></el-input>&nbsp;&nbsp;订单日期
            <el-date-picker
              v-model="user.djDate"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>&nbsp;&nbsp;To&nbsp;
            <el-date-picker
              v-model="user.djDate2"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px">
          <el-col :span="24">
            预出库日
            <el-date-picker
              v-model="user.yckDate"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>&nbsp;&nbsp;To&nbsp;
            <el-date-picker
              v-model="user.yckDate2"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>
            <el-checkbox v-model="checked" style="padding-left:25px">已结案显示</el-checkbox>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="业务员" name="second2">
        <el-row>
          <el-col :span="24">
            业务员区间
            <el-select v-model="user.ywyname" placeholder="--请选择--">
              <el-option label="业务员A" value="ywy1"></el-option>
              <el-option label="业务员B" value="ywy2"></el-option>
            </el-select>&nbsp;&nbsp;To&nbsp;
            <el-input v-model="user.ywyname2" clearable placeholder="请输入内容" style="width:240px"></el-input>&nbsp;&nbsp;订单日期
            <el-date-picker
              v-model="user.djDate"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>&nbsp;&nbsp;To&nbsp;
            <el-date-picker
              v-model="user.djDate2"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px">
          <el-col :span="24">
            预出库日
            <el-date-picker
              v-model="user.yckDate"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>&nbsp;&nbsp;To&nbsp;
            <el-date-picker
              v-model="user.yckDate2"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>
            <el-checkbox v-model="checked" style="padding-left:25px">已结案显示</el-checkbox>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="部门" name="second3">
        <el-row>
          <el-col :span="24">
            部门区间
            <el-select v-model="user.bmname" placeholder="--请选择--">
              <el-option label="部门A" value="bm1"></el-option>
              <el-option label="部门B" value="bm2"></el-option>
            </el-select>&nbsp;&nbsp;To&nbsp;
            <el-input v-model="user.bmname2" clearable placeholder="请输入内容" style="width:240px"></el-input>&nbsp;&nbsp;订单日期
            <el-date-picker
              v-model="user.djDate"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>&nbsp;&nbsp;To&nbsp;
            <el-date-picker
              v-model="user.djDate2"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px">
          <el-col :span="24">
            预出库日
            <el-date-picker
              v-model="user.yckDate"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>&nbsp;&nbsp;To&nbsp;
            <el-date-picker
              v-model="user.yckDate2"
              align="right"
              type="date"
              placeholder="请选择"
              :picker-options="pickerOptions"
            ></el-date-picker>
            <el-checkbox v-model="checked" style="padding-left:25px">已结案显示</el-checkbox>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
    <el-row style="margin-top:20px">
      <el-button type="primary" round>确定</el-button>
      <el-button type="info" round>取消</el-button>
      <el-button type="info" round>固定报表</el-button>
    </el-row>
  </div>
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
        // 公司名称
        gsname: "",
        // 第二个公司名称
        gsname2: "",
        // 订单日期
        djDate: "",
        // 订单日期2
        djDate2: "",
        //预计出库日
        yckDate: "",
        // 预计出库日2
        yckDate2: "",
        // 物料区间1
        wlname: "",
        // 物料区间2
        wlname2: "",
        //业务员区间
        ywyname: "",
        //业务员区间2
        ywyname2: "",
        //部门区间
        bmname: "",
        //部门区间2
        bmname2: ""
      },
      activeName1: "first1",
      //   已结案显示 true显示
      checked: "false",
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