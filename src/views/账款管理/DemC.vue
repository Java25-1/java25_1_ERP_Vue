<template>

    <div>
        <!--布局容器-->
        <el-container style="background: crimson;height: 100%;min-height:100vh;" direction="vertical">
            <!--顶部栏-->
            <el-header >
                顶部栏
            </el-header>
            <el-container >
                <!--左侧侧边栏-->
                <el-aside style="background: olivedrab">
                    <el-menu :router="true">
                        <el-menu-item index="/vvv">商品管理</el-menu-item>
                        <el-menu-item>商品管理</el-menu-item>

                        <el-submenu>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <!--主要区域容器-->
                <el-main style="background: aqua">
                    主要区域容器
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>


<script>
    export default {
        name: ""
    }
</script>

<style scoped>

</style>