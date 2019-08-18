// 销售管理
const commonMenu = {
    path:"",
    name:"sale",
    component: () => import('@/index.vue'),
    meta:{
        icon: "",
        title: "销售管理",
        permission:""
    },
    children:[
        // 基本资料
        {
            path: "",
            name:"commonBasic",
            meta:{
                icon: "",
                title: "基本资料",
                permission:""
            },
            components:{
                saleRequireType:()=> import('../views/table.vue'),
                outbound:()=> import('../views/账款管理/FPcgfp.vue')
            },
            children:[
                {
                    path:"/saleRequireType",
                    icon: "",
                    name: "saleRequireType",
                    meta: {
                        icon: "",
                        title: "销售订单类型设定",
                        permission:""
                    }
                },
                {
                    path:"/outbound",
                    icon: "",
                    name: "outbound",
                    meta: {
                        icon: "",
                        title: '销售出库类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 销售作业
        {
            path: "",
            name:"saleWork",
            meta:{
                icon: "",
                title: "销售作业",
                permission:""
            },
            components:{
                saleEnquiry:()=> import('../views/销售管理/xsbj.vue'),
                saleOrder:()=> import('../views/销售管理/xsdd.vue'),
                saleStorage:()=> import('../views/销售管理/xsckd.vue'),
                salesReturn:()=>import('../views/销售管理/xsthd.vue'),
                saleInvoice:()=> import('../views/销售管理/xsbj.vue')
            },
            children:[
                {
                    path:"/saleEnquiry",
                    icon: "",
                    name: "saleEnquiry",
                    meta: {
                        icon: "",
                        title: "销售报价单",
                        permission:""
                    }
                },
                {
                    path:"/saleOrder",
                    icon: "",
                    name: "saleOrder",
                    meta: {
                        icon: "",
                        title: '销售订单',
                        permission:""
                    }
                },
                {
                    path:"saleStorage",
                    icon: "",
                    name: "saleStorage",
                    meta: {
                        icon: "",
                        title: '销售出库单',
                        permission:""
                    }
                },
                {
                    path:"/salesReturn",
                    icon: "",
                    name: "salesReturn",
                    meta: {
                        icon: "",
                        title: '销售退货单',
                        permission:""
                    }
                },
                {
                    path:"/saleInvoice",
                    icon: "",
                    name: "saleInvoice",
                    meta: {
                        icon: "",
                        title: '销售发票',
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"tax",
            meta:{
                icon: "",
                title: "金税接口",
                permission:""
            },
            components:{
                saleInvoiceOut:()=> import('../views/table.vue'),
            },
            children:[
                {
                    path:"/saleInvoiceOut",
                    icon: "",
                    name: "saleInvoiceOut",
                    meta: {
                        icon: "",
                        title: "销售发票导出",
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;