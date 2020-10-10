import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowText from '@/components/ShowText'
import ShowHTML from '@/components/ShowHTML'
import JSExpression from '@/components/JSExpressionTest'
import RobotTest from '@/components/RobotTest'
import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 字符串显示
    {
      path: '/ShowText',
      component: ShowText
    },
    // HTML显示
    {
      path: '/ShowHTML',
      component: ShowHTML
    },
    //  Javascript表达式
    {
      path: '/JSExpression',
      component: JSExpression
    },
    //  RobotTest
    {
      path: '/RobotTest',
      component: RobotTest
    }
  ]
})
