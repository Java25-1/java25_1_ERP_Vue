<template>
  <el-form ref="form" label-width="80px">
    <el-container style="height:100vh">
      <el-header style="height:7%">
        <h4>库存呆滞分析表</h4>
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
                <el-form-item label="物料类别" style="color:red;">
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
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-form-item label="日期选择">
                  <el-radio  label="1">最近入库日</el-radio>
                  <el-radio  label="2">最近出库日</el-radio>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple"></div>
            </el-col>

            <el-col :span="11"></el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="9">
              <el-form-item label="呆滞日期">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple"></div>
            </el-col>

            <el-col :span="10"></el-col>
          </el-row>

          <el-row :gutter="15" style="height:300px;">
            <el-col :span="14">
              呆滞区间
              <el-table :data="tableData" border style="height: 255px">
                <el-table-column prop="date" label="（区间）" width="180"></el-table-column>
                <el-table-column prop="name" label="（起始天数）" width="180"></el-table-column>
                <el-table-column prop="address" label="截止天数"></el-table-column>
                <el-table-column prop="name" label="（区间说明）" width="180"></el-table-column>
              </el-table>
            </el-col>
            <el-col :span="10"></el-col>
          </el-row>

          <el-row :gutter="15">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <el-button type="primary" size="mini">确定</el-button>
                <el-button type="primary" size="mini">取消</el-button>
                <el-button type="primary" size="mini">固定报表</el-button>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple"></div>
            </el-col>

            <el-col :span="11"></el-col>
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
    }
  }

</script>


<style >

</style>