<template>
    <div>
        <el-form ref="form" :model="form" label-width="110px" size="mini">
            <el-row type="flex" class="row-bg" justify="center" >
                <el-col :span="10"><div class="grid-content bg-purple" :label-position="left">

                    <el-form-item label="供应商：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item  label="结算方式一：">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input v-model="form.name" ></el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-input v-model="form.name" ></el-input>
                            </div></el-col>
                        </el-row>

                    </el-form-item>
                    <el-form-item  label="结算方式二：">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input v-model="form.name" ></el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-input v-model="form.name" ></el-input>
                            </div></el-col>
                        </el-row>
                        <!--                    <el-input v-model="form.name"></el-input>-->
                    </el-form-item>
                    <el-form-item  label="结算方式三：">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input v-model="form.name" ></el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-input v-model="form.name" ></el-input>
                            </div></el-col>
                        </el-row>
                        <!--                    <el-input v-model="form.name"></el-input>-->
                    </el-form-item>
                    <el-form-item  label="折扣率：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item  label="终止日期：">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>

                    <!--                <el-form-item>-->
                    <!--                    <el-button type="primary" @click="onSubmit">立即创建</el-button>-->
                    <!--                </el-form-item>-->

                </div></el-col>
                <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple":label-position="left">
                    <el-form-item justify="center"   label="单据日期：">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item  label="单据号码：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item  label="币种：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item  label="汇率：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item  label="应收冲款类型：">
                        <el-input v-model="form.TypesofWithdrawals" ></el-input>
                    </el-form-item>
                    <el-form-item  label="凭证编号：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="内容" name="first">
                    <el-table
                            :data="tableData3"
                            style="width: 100%"
                            height="250">
                        <el-table-column
                                fixed
                                prop="date"
                                label="栏号"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="单别"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="province"
                                label="原单日期"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="原单单号"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="发票号码"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="交易对象"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="交易对象名称"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="部门编号"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="部门名称"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="采购人员"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="项目名称"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="币别"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="汇率"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="原单金额"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="现行余额"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="折让金额"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="冲款金额"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="冲抵金额"
                                width="120">
                        </el-table-column>
                    </el-table>

                </el-tab-pane>
                <el-tab-pane label="备注" name="second">
                    <el-row>
                        <el-col :span="12"><div >
                            <el-form-item  label="自定义栏一：">
                                <el-select v-model="value8" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div></el-col>
                        <el-col :span="12"><div class="grid-content bg-purple-light">
                            <el-form-item  label="自定义栏二：">
                                <el-select v-model="value7" filterable placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24"><div >
                            <el-form-item label="备注">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                        </div></el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
            <hr>
            <el-row :label-position="left">
                <el-col :span="10"><div >
                    <el-form-item label="所属部门：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="所属项目：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </div></el-col>
                <el-col :span="5"></el-col>
                <el-col :span="10"><div >
                    <el-form-item label="制单人员：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="复核人员：">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">功能</el-button>
                <el-button>自动结算</el-button>
            </el-form-item>
        </el-form>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                activeName2: 'first',
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }], value8: '', value7: '',
                form: {
                    name: '',
                    region: '',
                    TypesofWithdrawals:'付款冲款',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    activeName: 'second'
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
            // },
            // handleClick(tab, event) {
            //     console.log(tab, event);
            // }
        }
    }
</script>

<style scoped>

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>