<template>

<el-container>
<!-- 头部 -->
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
<div class="line"></div>
  </el-header>
  


  <!-- 侧边栏 -->
  <el-container>
    <el-aside width="220px">
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router="true">
  <el-submenu v-for="(temp,index) in this.menuList" :index="index" v-bind:key="(temp,index)">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{temp.meta.title}}</span>
    </template>
    <el-submenu v-for="(temp1,index1) in temp.children" :index="index+'-'+index1" v-bind:key="(temp1,index1)">
      <span slot="title">{{temp1.meta.title}}</span>
      <el-menu-item v-bind:key="(temp2,index2)"  @click="addTab(temp2.name,temp2.meta.title)" v-for="(temp2,index2) in temp1.children" :index="temp2.path">{{temp2.meta.title}}</el-menu-item>
     
    </el-submenu>
  </el-submenu>
</el-menu>

</el-aside>

<!-- 主要页面  放router-view -->
    <el-main>
<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item,index22) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    <router-view :name="item.content"/>
    
  </el-tab-pane>
</el-tabs>


      
    </el-main>

  </el-container>
</el-container>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>




<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      menuList: [],
      //标签页相关
      editableTabsValue: "2",
      editableTabs: [],
      tabIndex: 2,
      //导航栏相关
      activeIndex: "1",
      activeIndex2: "1",
      //侧边栏相关
      isCollapse: true
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    //标签页相关
    addTab(targetName, titlename) {
      let num = 0;
      this.editableTabs.forEach(function(temp, i) {
        if (temp.name == titlename) {
          num++;
        }
      });
      if (num > 0) {
        this.editableTabsValue = titlename;
        return;
      }

      this.editableTabs.push({
        title: titlename,
        name: titlename,
        content: targetName
      });
      this.editableTabsValue = titlename;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$router.options.routes.forEach(ele => {
      if (ele.meta) {
        console.log(ele);
        this.menuList.push(ele);
      }
    });
  },
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