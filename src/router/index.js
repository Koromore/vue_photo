import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/index/Index'
import Photo3d from '@/page/photo3d/photo3d'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/photo3d',
      name: 'Photo3d',
      component: Photo3d
    }
  ]
})
