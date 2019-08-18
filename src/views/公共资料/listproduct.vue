<template>
<div class='Lis'>

<body>
		<table cellspacing="1" cellpadding="4" width="100%"
			class="tableborder" id="table3">
			
			<tr>
				<td colspan="15" class="header">
					<form>
						<select>
							<option selected>商品名称</option>
							<option>商品商标</option>
							<option>商品型号</option>
						</select>
						&nbsp;&nbsp;<input type="text" value="支持模糊查询"><input type=submit value="查询">
					</form>
				</td>
			</tr>
			<tr>
				<td align="center" class="altbg1">
					<b>商品编号</b>
				</td>
				<td align="center" class="altbg1">
					<b>商品名称</b>
				</td>
				<td align="center" class="altbg1">
					<b>商品商标</b>
				</td>
				<td align="center" class="altbg1">
					<b>商品型号</b>
				</td>
				<td align="center" class="altbg1">
					<b>商品价格</b>
				</td>				
				<td align="center" class="altbg1">
					<b>操作</b>
				</td>
				
			</tr>
			
			<tr>
				<td  align="center" class="altbg2">
					p001
				</td>
				<td class="altbg2" align="center">
					苹果
				</td>
				<td class="altbg2"  align="center">
					hfs
				</td>
				<td class="altbg2"  align="center">
					111111111
				</td>
				<td class="altbg2"  align="center">
					12.3
				</td>
				<td class="altbg2"  align="center">
					<a href="info.html?productID=1">查看详细信息</a>
				</td>				
			</tr>
			

			<tr>
				<td  align="center" class="altbg2">
					p002
				</td>
				<td class="altbg2" align="center">
					香蕉
				</td>
				<td class="altbg2"  align="center">
					xj
				</td>
				<td class="altbg2"  align="center">
					222222
				</td>
				<td class="altbg2"  align="center">
					42.3
				</td>
				<td class="altbg2"  align="center">
					<a href="updateProduct.html?productID=1">查看详细信息</a>
				</td>				
			</tr>
			


			<tr>
				<td  align="center" class="altbg2">
					p003
				</td>
				<td class="altbg2" align="center">
					橘子
				</td>
				<td class="altbg2"  align="center">
					jz
				</td>
				<td class="altbg2"  align="center">
					3333
				</td>
				<td class="altbg2"  align="center">
					1.3
				</td>
				<td class="altbg2"  align="center">
					<a href="updateProduct.html?productID=1">查看详细信息</a>
				</td>				
			</tr>
			


			</table>
</body>

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

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
/*@import url(); 引入公共css类*/

</style>