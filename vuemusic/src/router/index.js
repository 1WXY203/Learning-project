import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('../views/layout'),
    children:[
      {
        path:'/',
        component:()=>import('../views/Home/home'),
        name:'home'
      },
      {
        path:'/mine',
        component:()=>import('../views/mine')
      },
      {
        path:'/search',
        component:()=>import('../views/search')
      },
      {
        path:'/bang',
        component:()=>import('../views/bang')
      }
    ]
  },
  {
    path:'/list/:type',
    component:()=>import('../views/List/list'),
    name:'list'
  },
  {
    path:'/play/:songid',
    component:()=>import('../views/Play/play')
  },
  {
    path:'*',
    component:()=>import('../views/404.vue')
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass:'active'
})

export default router
