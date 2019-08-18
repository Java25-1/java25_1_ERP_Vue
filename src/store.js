import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      name:"张三",
      role:[{
        rolename:"系统管理员",
        jurisdiction:[{
          modulename:"公共资料",
          fmodule:[{
            name:"基本资料",
            zmoudle:["部门设定","人员主文件设定","单据类型维护"]
            
          },{
            name:"物料资料",
            zmoudle:["计量单位维护","物料类别维护","物料维护"]
          }]
        },{
          modulename:"采购管理",
          fmodule:[{
            name:"采购订单",
            zmoudle:["采购请购单","采购订单","采购询价单"]
          }]
        }]
      }]
      
    }

  },
  mutations: {

  },
  actions: {

  }
})
