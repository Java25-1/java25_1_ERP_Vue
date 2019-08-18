<template>
  <el-form ref="form" label-width="80px">
    <el-container style="height:100vh">
        <el-header style="height:7%" >
          <h4>调拨单</h4>
        </el-header>
    
      <el-container style="height:83%">
        <el-main >

          <el-row :gutter="15">
            <el-col :span="5"><div class="grid-content bg-purple">
                <el-form-item label="调出仓库" style="color:red;">
                <el-input placeholder="请输入内容" clearable></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple">
                <el-form-item label="单据日期" style="color:red;">
                  <div class="block">
                      <el-date-picker type="date" placeholder="选择日期"> </el-date-picker>
                    </div>
                </el-form-item>
              </div>
              </el-col>
                 <el-col :span="14" style=""></el-col>
            </el-row>

            <el-row>
               <el-col :span="5">
                <el-form-item label="调入仓库" >
                <el-input placeholder="请输入内容" clearable></el-input>
               </el-form-item>
            </el-col>
            <el-col :span="5">
                <el-form-item label="单据号码" >
                <el-input placeholder="请输入内容" clearable></el-input>
              </el-form-item>
             </el-col>
             <el-col :span="14" style=""></el-col>
            </el-row>

            
            
       


        
          <el-tabs type="border-card">
                <el-tab-pane label="内容" style="height:350px">
                <el-table contenteditable="true" :data="tableData" border height="300" :summary-method="getSummaries" show-summary style="width: 100%; margin-top: 20px,">
                  <el-table-column prop="id" label="(栏号)" width="180"></el-table-column>
                  <el-table-column prop="name" label="物料编号"></el-table-column>
                  <el-table-column prop="amount1" label="物料名称"></el-table-column>
                  <el-table-column prop="amount2" label="（规格型号）"> </el-table-column>
                  <el-table-column prop="amount3" label="（单位）"> </el-table-column>
                  <el-table-column prop="amount3" label="数量"> </el-table-column>
                  <el-table-column prop="amount3" label="（批号）"> </el-table-column>
                  <el-table-column prop="amount3" label="分录备注"> </el-table-column>
                  <el-table-column prop="amount3" label="使用有效日期"> </el-table-column>
                  
                </el-table>
              </el-tab-pane>
                <el-tab-pane label="备注"  style="height:300px">
                    <el-row :gutter="15">
                        <el-col :span="7"><div class="grid-content bg-purple">
                            <el-form-item label="自定栏一" style="color:red;">
                            <el-input placeholder="请输入内容" clearable></el-input>
                          </el-form-item>
                        </div></el-col>
                        <el-col :span="7"><div class="grid-content bg-purple">
                          <el-form-item label="自定栏二" style="color:red;">
                          <el-input placeholder="请输入内容"  clearable></el-input>
                          </el-form-item>
                        </div></el-col>
                        <el-col :span="10" style="display:none"><div class="grid-content bg-purple"></div></el-col>
                      
                      </el-row>
                      <el-row>
                        <el-col :span="12">
                          <el-form-item label="备注">
                            <el-input type="textarea" :rows="9"  > </el-input>
                           </el-form-item>
                        </el-col>
                        <el-col :span="12"></el-col>
                      </el-row>
                      
          
              </el-tab-pane>
            </el-tabs>
            
          
   
           
            
          

          <el-row :gutter="20" style=" margin-top: 10px;">
           
            <el-col :span="7" style="height:50px;"><div class="grid-content bg-purple">
                <el-form-item label="制单人员" >
                <el-input placeholder="请输入内容" clearable></el-input>
              </el-form-item>

              </div>
            </el-col>
           
            <el-col :span="7"><div class="grid-content bg-purple">
             <el-form-item label="复核人员" >
                <el-input placeholder="请输入内容" clearable></el-input>
              </el-form-item>

               
              </div>
            </el-col>
            <el-col :span="5" style="display:none"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5" style="display:none"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          
          <el-row style="border 1px #000 solid">
            <el-col :span="12">
              <el-dropdown size="mini" split-button type="primary">功能 <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>批号设定</el-dropdown-item>
              <el-dropdown-item>条码打印</el-dropdown-item>
    
              </el-dropdown-menu>
              </el-dropdown>
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
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
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
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    }
  };

</script>

