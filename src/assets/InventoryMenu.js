// 库存管理
const commonMenu = {
    path:"",
    name:"inventory",
    component: () => import('@/index.vue'),
    meta:{
        icon: "",
        title: "库存管理",
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
                warehouseType:()=> import('../views/table.vue'),
                delivery:()=> import('../views/账款管理/FPcgfp.vue')
            },
            children:[
                {
                    path:"/warehouseType",
                    icon: "",
                    name: "warehouseType",
                    meta: {
                        icon: "",
                        title: "入库类型设定",
                        permission:""
                    }
                },
                {
                    path:"/delivery",
                    icon: "",
                    name: "delivery",
                    meta: {
                        icon: "",
                        title: '出库类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 其他出入库作业
        {
            path: "",
            name:"warehouse",
            meta:{
                icon: "",
                title: "其他出入库作业",
                permission:""
            },
            components:{
                warehouseOther:()=> import('../views/table.vue'),
                deliveryOther:()=> import('../views/账款管理/FPcgfp.vue')
            },
            children:[
                {
                    path:"/warehouseOther",
                    icon: "",
                    name: "warehouseOther",
                    meta: {
                        icon: "",
                        title: "其他入库单",
                        permission:""
                    }
                },
                {
                    path:"/deliveryOther",
                    icon: "",
                    name: "deliveryOther",
                    meta: {
                        icon: "",
                        title: '其他出库单',
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"allotAndCheck",
            meta:{
                icon: "",
                title: "调拨盘点作业",
                permission:""
            },
            components:{
                allot:()=> import('../views/库存管理/diaobodan.vue'),
                checkCard:()=> import('../views/账款管理/FPcgfp.vue'),
                check:()=> import('../views/库存管理/pandian.vue')
            },
            children:[
                {
                    path:"/allot",
                    icon: "",
                    name: "allot",
                    meta: {
                        icon: "",
                        title: "调拨单",
                        permission:""
                    }
                },
                {
                    path:"/checkCard",
                    icon: "",
                    name: "checkCard",
                    meta: {
                        icon: "",
                        title: "打印盘点卡",
                        permission:""
                    }
                },
                {
                    path:"/check",
                    icon: "",
                    name: "check",
                    meta: {
                        icon: "",
                        title: "盘点单",
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
                title: "调价作业",
                permission:""
            },
            components:{
                saleInvoiceOut:()=> import('../views/库存管理/tiaojia.vue')
            },
            children:[
                {
                    path:"/saleInvoiceOut",
                    icon: "",
                    name: "saleInvoiceOut",
                    meta: {
                        icon: "",
                        title: "调价单",
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;