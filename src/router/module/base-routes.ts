import BaseLayout from '../../layouts/BaseLayout.vue';
import BaseHomeLayout from '../../layouts/BaseHomeLayout.vue';
import Login from '../../../src/views/Login/index.vue';


export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: Login,
    meta: { title: '登录页面' },
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: BaseHomeLayout,
    meta: { title: '首页' },
    children: [
      {
        path: '/home/index',
        name: 'index',
        component: () => import('../../views/index.vue'),
        meta: { title: '首页', requireAuth: true, affix: true, closable: false },
      },
    ]
  },
]
