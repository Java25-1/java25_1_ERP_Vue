// 账款管理
const commonMenu = {
    path:"",
    name:"credit",
    component: () => import('@/index.vue'),
    meta:{
        icon: "",
        title: "账款管理",
        permission:""
    },
    children:[
        // 冲款作业
        {
            path: "",
            name:"flush",
            meta:{
                icon: "",
                title: "冲款作业",
                permission:""
            },
            components:{
                accountsReceivable:()=> import('../views/账款管理/Kskck.vue'),
                payable:()=> import('../views/账款管理/Gfkck.vue'),
                advancesReceived:()=> import('../views/账款管理/Kysk.vue'),
                advancePayment:()=> import('../views/账款管理/Gyfk.vue')
            },
            children:[
                {
                    path:"/advancesReceived",
                    icon: "",
                    name: "advancesReceived",
                    meta: {
                        icon: "",
                        title: "预收款单",
                        permission:""
                    }
                },
                {
                    path:"/accountsReceivable",
                    icon: "",
                    name: "accountsReceivable",
                    meta: {
                        icon: "",
                        title: "应收冲款单",
                        permission:""
                    }
                },
                {
                    path:"/advancePayment",
                    icon: "",
                    name: "advancePayment",
                    meta: {
                        icon: "",
                        title: "预付款单",
                        permission:""
                    }
                },
                {
                    path:"/payable",
                    icon: "",
                    name: "payable",
                    meta: {
                        icon: "",
                        title: '应付冲款单',
                        permission:""
                    }
                }
            ]
        },
        // 其他出入库作业
        {
            path: "",
            name:"cash",
            meta:{
                icon: "",
                title: "其他应收付作业",
                permission:""
            },
            components:{
                receivable:()=> import('../views/table.vue'),
                payableOther:()=> import('../views/Home.vue')
            },
            children:[
                {
                    path:"/receivable",
                    icon: "",
                    name: "receivable",
                    meta: {
                        icon: "",
                        title: "其他应收单",
                        permission:""
                    }
                },
                {
                    path:"/payableOther",
                    icon: "",
                    name: "payableOther",
                    meta: {
                        icon: "",
                        title: '其他应付单',
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default commonMenu;