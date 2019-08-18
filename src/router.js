import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import table from './views/table.vue'
import index from './index.vue'
import login from './login.vue'
import commonMenu from './assets/CommonMenu.js'
import CreditMenu from './assets/CreditMenu.js'
import InventoryMenu from './assets/InventoryMenu.js'
import PurchaseMenu from './assets/PurchaseMenu.js'
import SaleMenu from './assets/SaleMenu'
import roleMenu from './assets/roleMenu'
import jquery from 'jquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '/',
          name: 'table',
          components: {
            default: index,
            form111: table,
            home: () => import(/* webpackChunkName: "about" */ './views/table.vue')
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
    ,commonMenu,
    CreditMenu,
    InventoryMenu,
    PurchaseMenu,
    SaleMenu,
    roleMenu
  ]
})
