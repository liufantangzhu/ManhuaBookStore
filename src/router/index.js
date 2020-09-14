import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home.vue'
import Music from '@/views/music/Music.vue'
import HotestDoc from '@/views/home/childComps/hotest-doc'
import NewBook from '@/views/home/childComps/newbook'
import UserChat from '@/views/home/childComps/userchat'

import Store from '@/views/market/store.vue'
import ShopInfo from'@/views/market/childComps/shopinfo.vue'
import Docinfo from '@/views/doc_info/doc_info.vue'
import Cart from '@/views/cart/Cart.vue'
import Porfiler from '@/views/center/P_Center'
import EditProfile from '@/views/center/childComps/EditProfile'
import UserAddrees from '@/views/center/childComps/UserAddrees/UserAddrees'
import UserOrder from '@/views/center/childComps/UserOrder/UserOrder'
import Security from '@/views/center/childComps/Security/Security'
import Register from '@/views/register/register'
import OrderConfirm from '@/views/orderConfirm/orderConfirm'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
     redirect:'/home'
  },
    {
    path: '/home',
    component: Home,
    meta:{
      title:'小咸鱼网',
    },
    children:[
      {
        path:'/',
        redirect:'/home/newbook'
      },
      {
        path:'/home/hotestdoc',
        component:HotestDoc
      },
      {
        path:'/home/newbook',
        component:NewBook
      },
      {
        path:'/home/userchat',
        component:UserChat
      },
    ]
  },
  { 
    path: '/music',
    component: Music,
    meta:{
      title:'播放器',
    },
  },
  { 
    path: '/shop',
    component: Store,
    meta:{
      title:'商城',
    },
  },
  { 
    path: '/orderConfirm',
    component: OrderConfirm,
    meta:{
      title:'确认订单',
    },
  },
  { 
    path: '/docinfo',
    component: Docinfo,
    meta:{
      title:'文章详情',
    },
  },
  { 
    path: '/shopinfo',
    component: ShopInfo,
    meta:{
      title:'商品详情',
    },
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      title:'购物车'
    }
  },
  {
    path:'/register',
    component:Register,
    meta:{
      title:'注册'
    }
  },
  {
    path:'/porfiler',
    component:Porfiler,
    meta:{
      title:'个人中心'
    },
    children:[
      {
        path:'/',
        redirect:'/porfiler/userorder'
      },
      {
        path:'/porfiler/editporfiler',
        component:EditProfile
      },
      {
        path:'/porfiler/useraddrees',
        component:UserAddrees
      },
      {
        path:'/porfiler/userorder',
        component:UserOrder
      },
      {
        path:'/porfiler/Security',
        component:Security
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 
router.beforeEach((to,form,next)=>{
document.title=to.matched[0].meta.title
next()
})

export default router
