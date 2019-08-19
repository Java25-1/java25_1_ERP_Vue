// 采购管理
const commonMenu = {
    path:"",
    name:"purchase",
    component: () => import('@/index.vue'),
    meta:{
        icon: "",
        title: "采购管理",
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
                purchaseRequireType:()=> import('../views/table.vue'),
                purchaseSystem:()=> import('../views/账款管理/FPcgfp.vue'),
                purchaseOrder:()=> import('../views/账款管理/FPcgfp.vue')
            },
            children:[
                {
                    path:"/purchaseRequireType",
                    icon: "",
                    name: "purchaseRequireType",
                    meta: {
                        icon: "",
                        title: "采购请购类型设定",
                        permission:""
                    }
                },
                {
                    path:"/purchaseSystem",
                    icon: "",
                    name: "purchaseSystem",
                    meta: {
                        icon: "",
                        title: '采购入库类型设定',
                        permission:""
                    }
                },
                {
                    path:"/purchaseOrder",
                    icon: "",
                    name: "purchaseOrder",
                    meta: {
                        icon: "",
                        title: '采购订单类型设定',
                        permission:""
                    }
                }
            ]
        },
        // 采购作业
        {
            path: "",
            name:"purchaseOperation",
            meta:{
                icon: "",
                title: "采购订单",
                permission:""
            },
            components:{
                purchaseOrder:()=> import('../views/采购管理/Order.vue'),
                purchaseEnquiry:()=> import('../views/采购管理/InquirySheet.vue'),
                purchaseRequisitions:()=> import('../views/采购管理/PurchaseRequisition.vue'),
                purchaseStorage:()=> import('../views/账款管理/FPcgfp.vue'),
                purchaseReturn:()=> import('../views/采购管理/ReturnGoods.vue'),
                purchaseInvoice:()=> import('../views/账款管理/FPcgfp.vue')
            },
            children:[
                {
                    path:"/purchaseOrder",
                    icon: "",
                    name: "purchaseOrder",
                    meta: {
                        icon: "",
                        title: "采购订单",
                        permission:""
                    }
                },
                {
                    path:"/purchaseEnquiry",
                    icon: "",
                    name: "purchaseEnquiry",
                    meta: {
                        icon: "",
                        title: "采购询价单",
                        permission:""
                    }
                },
                {
                    path:"/purchaseRequisitions",
                    icon: "",
                    name: "purchaseRequisitions",
                    meta: {
                        icon: "",
                        title: '采购请购单',
                        permission:""
                    }
                },
                {
                    path:"purchaseStorage",
                    icon: "",
                    name: "purchaseStorage",
                    meta: {
                        icon: "",
                        title: '采购入库单',
                        permission:""
                    }
                },
                {
                    path:"/purchaseReturn",
                    icon: "",
                    name: "purchaseReturn",
                    meta: {
                        icon: "",
                        title: '采购退货单',
                        permission:""
                    }
                },
                {
                    path:"/purchaseInvoice",
                    icon: "",
                    name: "purchaseInvoice",
                    meta: {
                        icon: "",
                        title: '采购发票',
                        permission:""
                    }
                }
            ]
        },
        {
            path: "",
            name:"apportion",
            meta:{
                icon: "",
                title: "分摊作业",
                permission:""
            },
            components:{
                apportionWork:()=> import('../views/采购管理/disk.vue')
            },
            children:[
                {
                    path:"/apportionWork",
                    icon: "",
                    name: "apportionWork",
                    meta: {
                        icon: "",
                        title: "采购分摊作业",
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;