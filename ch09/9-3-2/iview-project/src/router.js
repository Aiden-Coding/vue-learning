const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/formExample',
        meta: {
            title: '表单测试'
        },
        component: (resolve) => require(['./views/formExample.vue'], resolve)
    },
    {
        path: '/tableExample',
        meta: {
            title: '表格测试'
        },
        component: (resolve) => require(['./views/tableExample.vue'], resolve)
    }
];
export default routers;