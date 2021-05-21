export default {
    path: 'Test',
    component: () => import('./index.vue'),
    redirect: '/Test/Test1',
    meta: { title: 'Test' },
    children: [
        {
            path: 'Test1',
            component: () => import('./Test1/index.vue'),
            meta: { title: 'Test1' }
        },
        {
            path: 'Test2',
            component: () => import('./Test2/index.vue'),
            meta: { title: 'Test2' }
        },
        {
            path: 'Test3',
            component: () => import('./Test3/index.vue'),
            meta: { title: 'Test3' },
            children: [
                {
                    path: 'Test4',
                    component: () => import('./Test4/index.vue'),
                    meta: { title: 'Test4' }
                }
            ]
        }
    ]
};
//# sourceMappingURL=router.js.map