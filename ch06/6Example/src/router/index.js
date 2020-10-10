import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import UserProps from '@/components/UserProps'

Vue.use(Router)
const VIP = {template: ''}
// 定义视图命名路由
const viewNamed = {template: '<div>默认视图</div>'}
const viewNamedA = {template: '<div>视图A</div>'}
const viewNamedB = {template: '<div>视图B</div>'}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user/:id',
      component: User,
      name: 'user',
      children: [
        {
          path: 'vip',
          component: VIP
        }
      ]
    },
    {
      path: '/viewNamed',
      components: {
        default: viewNamed,
        a: viewNamedA,
        b: viewNamedB
      }
    },
    // 路由解耦
    {
      path: '/UserProps/:id',
      component: UserProps,
      props: true
    }
  ]
})
