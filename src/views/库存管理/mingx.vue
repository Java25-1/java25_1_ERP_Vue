<template>
  <el-form ref="form" label-width="80px">
    <el-container style="height:100vh">
      <el-header style="height:7%">
        <h4>库存台账明细表</h4>
      </el-header>

      <el-container style="height:83%">
        <el-main>
          <el-row :gutter="15">
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="物料区间" style="color:red;">
                  <el-input placeholder clearable></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="To" style="color:red;">
                  <el-input placeholder clearable></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="4">
              <span class="el-icon-document-copy" style="font-size:20px;"></span>
            </el-col>
            <el-col :span="10"></el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="物料区间" style="color:red;">
                  <el-input placeholder clearable></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="To" style="color:red;">
                  <el-input placeholder clearable></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="4">
              <span class="el-icon-document-copy" style="font-size:20px;"></span>
            </el-col>
            <el-col :span="10"></el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="时间区间">
                  <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="To">
                  <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="4"></el-col>
            <el-col :span="10"></el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <template>
                <el-checkbox>区分仓库</el-checkbox>
              </template>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-button type="primary" size="mini">确定</el-button>
              <el-button type="primary" size="mini">取消</el-button>
              <el-button type="primary" size="mini">固定报表</el-button>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      input: "",
      value1: "",
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ]
    };
  },
  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });

      return sums;
    }
  }
};
</script>


<style >

</style>