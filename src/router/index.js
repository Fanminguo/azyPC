import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}


const router = new Router({
  history: true,
  mode: 'history',
  base: '/', // 基础路径
  routes: [{
      path: '/',
      name: 'Index',
      component: () =>
        import('@/views/index/index.vue'),
      meta: {
        title: '爱之依',
        fals: true

      }
    },
    {
      path: '/coreCom',
      name: 'coreCom',
      component: () =>
        import('@/views/coreCom/coreCom.vue'),
      meta: {
        title: '核心能力',
        fals: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import('@/views/about/about.vue'),
      meta: {
        title: '关于我们',
        fals: true
      }
    },
    {
      path: '/settlement',
      name: 'settlement',
      component: () =>
        import('@/views/settlement/settlement.vue'),
      meta: {
        title: '商家入驻',
        fals: true
      }
    },
    {
      path: '/merchant',
      name: 'merchant',
      component: () =>
        import('@/views/merchant/merchant.vue'),
      meta: {
        title: '社交电商',
        fals: true
      }
    },
    {
      path: '/social',
      name: 'social',
      component: () =>
        import('@/views/social/social.vue'),
      meta: {
        title: '社会责任',
        fals: true
      }
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: () =>
        import('@/views/recruit/recruit.vue'),
      meta: {
        title: '人才招募',
        fals: true
      }
    },
    {
      path: '/licence',
      name: 'licence',
      component: () =>
        import('@/components/licence.vue'),
      meta: {
        title: '证书',
        fals: true
      }
    },
  ],

})

// 地址栏输入错误路由时，重定向页面
// //to即将进入的目标路由对象,from当前导航正要离开的路由,next:下一步执行的函数钩子//如果即将进入登录路由,则直接放行
router.beforeEach((to, from, next) => {
  if(!to.meta.fals){
    next({path:'/'})
  }else{
    next()
  }
})

export default router;
