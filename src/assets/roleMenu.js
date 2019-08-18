// 采购管理
const roleMenu = {
    path:"",
    name:"role",
    component: () => import('@/index.vue'),
    meta:{
        icon: "",
        title: "权限管理",
        permission:""
    },
    children:[
        //权限管理 
        {
            path: "",
            name:"role",
            meta:{
                icon: "",
                title: "权限管理",
                permission:""
            },
            components:{
                adduser:()=> import('../views/table.vue'),
                addrole:()=> import('../views/账款管理/FPcgfp.vue'),
                userlist:()=> import('../views/权限管理/UserList.vue'),
                rolelist:()=> import('../views/权限管理/RoleList.vue'),
                UserRoleAssociation:()=> import('../views/账款管理/FPcgfp.vue'),//用户角色关联表
                RolePermissionAssociation:()=> import('../views/账款管理/FPcgfp.vue')//角色权限关联表
            },
            children:[
                {
                    path:"/adduser",
                    icon: "",
                    name: "adduser",
                    meta: {
                        icon: "",
                        title: "新建用户",
                        permission:""
                    }
                },
                {
                    path:"/addrole",
                    icon: "",
                    name: "addrole",
                    meta: {
                        icon: "",
                        title: '新建角色',
                        permission:""
                    }
                },
                {
                    path:"/userlist",
                    icon: "",
                    name: "userlist",
                    meta: {
                        icon: "",
                        title: '用户列表',
                        permission:""
                    }
                },
                {
                    path:"/rolelist",
                    icon: "",
                    name: "rolelist",
                    meta: {
                        icon: "",
                        title: '角色列表',
                        permission:""
                    }
                },
                {
                    path:"/UserRoleAssociation",
                    icon: "",
                    name: "UserRoleAssociation",
                    meta: {
                        icon: "",
                        title: '用户角色关联表',
                        permission:""
                    }
                },
                {
                    path:"/RolePermissionAssociation",
                    icon: "",
                    name: "RolePermissionAssociation",
                    meta: {
                        icon: "",
                        title: '角色权限关联表',
                        permission:""
                    }
                }
            ]
        }
    ]
}

export default roleMenu;