export default {
    path: 'Test22',
    component: () => import(/* webpackChunkName: "group-user" */ './index.vue'),
    redirect: '/Test22/Test221',
    meta: { title: 'Test22' },
    children: [
        {
            path: 'Test221',
            component: () => import(/* webpackChunkName: "group-user" */ './Test221/index.vue'),
            meta: { title: 'Test221' }
        }
    ]
};
//# sourceMappingURL=router.js.map