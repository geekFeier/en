import Vue from 'vue'
import Router from 'vue-router' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/element/HelloWorld'],resolve)
      //都为实现路由懒加载 () => import('@/components/element/HelloWorld')
    }
  ]
})
