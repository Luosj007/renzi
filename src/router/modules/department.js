import layout from '@/layout'
export default {
// 路由信息
  path: '/department',
  component: layout,
  children: [{
    path: '', // 二级路由为空地址， 表示/department显示一级路由+二级路由
    component: () => import('@/views/department'),
    name: 'department',
    meta: {
      // 路由元信息，存储数据的
      icon: 'tree',
      title: '组织'
    }
  }]
}
