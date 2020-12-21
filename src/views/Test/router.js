export default {
  path: 'Test',
  component: () => import('./index'),
  redirect: '/Test/Test1',
  meta: { title: 'Test' },
  children: [
    {
      path: 'Test1',
      component: () => import('./Test1/index'),
      meta: { title: 'Test1' }
    },
    {
      path: 'Test2',
      component: () => import('./Test2/index'),
      meta: { title: 'Test2' }
    },
    {
      path: 'Test3',
      component: () => import('./Test3/index'),
      meta: { title: 'Test3' },
      children: [
        {
          path: 'Test4',
          component: () => import('./Test4/index'),
          meta: { title: 'Test4' }
        }
      ]
    }
  ]
}
