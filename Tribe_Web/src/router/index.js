import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/home/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    }
  ]
})
// const routes = [
//   {
//     path: '/',
//   redirect: "/homePage",
//   meta: {
//     bar: true,
//     keepAlive: false,
//   },
//   component: RootView,
//   children: [
//     {
//     path: '/homePage',
//     name: "homePage",
//     component: resolve => require(['@/components/home/homePage'], resolve),
//     meta: {
//       keepAlive: true,
//     }
//   }
// ]
// }
// ]
