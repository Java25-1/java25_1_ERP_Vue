<template>
    <div>
        <el-form ref="form" :model="form" label-width="110px" size="mini">
            <el-row type="flex" class="row-bg" justify="center" >
                <el-col :span="10"><div class="grid-content bg-purple" :label-position="left">

                    <el-form-item label="客户：">
                        <el-input v-model="form.Cliid"></el-input>
                    </el-form-item>
                    <el-form-item  label="结算方式一：">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input v-model="form.ReckonTypeF" ></el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-input v-model="form.ReckonMoneyF" ></el-input>
                            </div></el-col>
                        </el-row>

                        <!--                    <el-input v-model="form.name"></el-input>-->
                    </el-form-item>
                    <el-form-item  label="结算方式二：">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input v-model="form.ReckonTypeS" ></el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-input v-model="form.ReckonMoneyS" ></el-input>
                            </div></el-col>
                        </el-row>
                        <!--                    <el-input v-model="form.name"></el-input>-->
                    </el-form-item>
                    <el-form-item  label="结算方式三：">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input v-model="form.ReckonTypeT" ></el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-input v-model="form.ReckonMoneyT" ></el-input>
                            </div></el-col>
                        </el-row>
                        <!--                    <el-input v-model="form.name"></el-input>-->
                    </el-form-item>
                    <el-form-item  label="折扣率：">
                        <el-input v-model="form.GatherDiscount"></el-input>
                    </el-form-item>
                    <el-form-item  label="终止日期：">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.GatherendaccountMonth" style="width: 100%;"></el-date-picker>
                    </el-form-item>

                </div></el-col>
                <el-col :span="1"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="10"><div class="grid-content bg-purple":label-position="left">
                    <el-form-item justify="center"   label="单据日期：">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item  label="单据号码：">
                        <el-input v-model="form.billId"></el-input>
                    </el-form-item>
                    <el-form-item  label="币种：">
                        <el-input v-model="form.currencyType"></el-input>
                    </el-form-item>
                    <el-form-item  label="汇率：">
                        <el-input v-model="form.exchangerate"></el-input>
                    </el-form-item>
                    <el-form-item  label="应收冲款类型：">
                        <el-input v-model="form.TypesofWithdrawals" ></el-input>
                    </el-form-item>
                    <el-form-item  label="凭证编号：">
                        <el-input v-model="form.Proofnumber"></el-input>
                    </el-form-item>
                </div></el-col>
            </el-row>
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                <el-tab-pane label="内容" name="first">
                    <el-table
                            :data="sorlist"
                            style="width: 100%"
                            height="250">


                            <el-table-column
                                    label='预收金额'
                                    class-name="column-bg-color-editable"
                                    width="300"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="input-box">
                                        <el-input size="small" @blur="handleInputBlur" v-model="scope.row.promisedmoney" ></el-input>
                                    </div>

                                </template>
                            </el-table-column>
                            <el-table-column
                                    label='来源别'
                                    class-name="column-bg-color-editable"
                                    width="300"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="input-box">
                                        <el-input size="small" @blur="handleInputBlur" v-model="scope.row.sinname" ></el-input>
                                    </div>

                                </template>
                            </el-table-column>
                            <el-table-column
                                    label='来源单号'
                                    class-name="column-bg-color-editable"
                                    width="300"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="input-box">
                                        <el-input size="small" @blur="handleInputBlur" v-model="scope.row.originbillid" ></el-input>
                                    </div>

                                </template>
                            </el-table-column>
                            <el-table-column
                                    label='摘要'
                                    class-name="column-bg-color-editable"
                                    width="300"
                                    show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="input-box">
                                        <el-input size="small" @blur="handleInputBlur" v-model="scope.row.summary" ></el-input>
                                    </div>

                                </template>
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
                }]
                , value8: '',
                value7: '',
                form: {
                    currencyType: 'RMB',
                    region: '',
                    TypesofWithdrawals:'预收款',
                    date1: '',
                    exchangerate: '1:1',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    Proofnumber:'1',
                    activeName: 'second'
                },
                sorlist:[]
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },onSubmit() {
                console.log('submit!');
            },
            loginDetail(biilid){
                let _this = this;
              this.$axios.get(`http://127.0.0.1:8080/Advancegatherdetails/SelAdvDetail/${biilid}`).then(resp =>{
                  _this.sorlist =resp.data;
              });
            },
            //单元格点击后，显示input，并让input 获取焦点
            handleCellClick:function(row, column, cell, event){
                emptransfer.addClass(cell,'current-cell');
                if(emptransfer.getChildElement(cell,3) !== 0){
                    var _inputParentNode =emptransfer.getChildElement(cell,3);
                    if(_inputParentNode.hasChildNodes()&& _inputParentNode.childNodes.length > 2) {
                        var _inputNode = _inputParentNode.childNodes[2];
                        if(_inputNode.tagName === 'INPUT'){
                            _inputNode.focus();
                        }
                    }
                }
            },
//input框失去焦点事件
            handleInputBlur:function(event){   //当 input 失去焦点 时,input 切换为 span，并且让下方 表格消失（注意，与点击表格事件的执行顺序）
                var _event = event;
                setTimeout(function(){
                    var _inputNode = _event.target;
                    if(emptransfer.getParentElement(_inputNode,4)!==0){
                        var _cellNode = emptransfer.getParentElement(_inputNode,4);
                        emptransfer.removeClass(_cellNode,'current-cell');
                        emptransfer.removeClass(_cellNode,'current-cell2');
                    }
                },200);
            }
            // },
            // handleClick(tab, event) {
            //     console.log(tab, event);
            // }
            // },
            // handleClick(tab, event) {
            //     console.log(tab, event);
            // }
        },
        mounted(){
            this.loginDetail("001");
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