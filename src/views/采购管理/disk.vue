<template>
    <div>
        <el-container>
            <h1>采购分摊作业</h1>
            <el-header height="100%">
                <el-row>
                    <el-form ref="form" :model="form" label-width="150px" size="mini">
                        <el-col :span="10">
                            <div class="grid-content bg-purple-dark">
                                <el-form-item label="单据日期">
                                    <el-date-picker type="date" placeholder="选择日期" style="width: 100%"></el-date-picker>
                                </el-form-item>
                                <el-form-item label="分摊方式">
                                    <el-select placeholder="请选择活动区域" style="width: 100%">
                                        <el-option label="按金额" value="shanghai"></el-option>
                                        <el-option label="按数量" value="beijing"></el-option>
                                        <el-option label="按材积" value="beijing"></el-option>
                                        <el-option label="按重量" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="待摊金额本为币">
                                    <el-input></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="10" :offset="2">
                            <div class="grid-content bg-purple-dark">
                                <el-form-item label="单据号码">
                                    <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="凭证编号">
                                    <el-input></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                        <el-col :span="2"></el-col>
                    </el-form>
                </el-row>
            </el-header>
            <el-main height="100%">
                <el-tabs @tab-click="handleClick">
                    <el-tab-pane label="费用明细" name="first">
                        <el-table
                                style="width: 100%"
                                max-height="250">
                            <el-table-column
                                    prop="date"
                                    label="(栏号)"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="费用编号"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="费用名称"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="币别"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="汇率"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="金额"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="(金额本币位)"
                                    width="150">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="分摊结果" name="second">
                        <el-table
                                style="width: 100%"
                                max-height="250">
                            <el-table-column
                                    prop="date"
                                    label="(栏号)"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="采购入库单"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="物料编号"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="(物料名称)"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="(规格型号)"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="采购金额"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="数量"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="单位"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="重量"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="材积"
                                    width="100%">
                            </el-table-column>
                            <el-table-column
                                    label="分摊金额"
                                    width="100%">
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </el-main>
            <el-footer height="100%">
                <el-row>
                    <el-form ref="form" :model="form" label-width="150px" size="mini">
                        <el-col :span="10">
                            <el-form-item label="复核人员">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="10" :offset="4">
                            <el-form-item label="制单人员">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-dropdown size="small" split-button type="primary">
                            小型尺寸
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                </el-row>
            </el-footer>
        </el-container>
        <el-dialog  title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <supplier></supplier>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "disk"
    }
</script>

<style scoped>

</style>