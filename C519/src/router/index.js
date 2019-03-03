import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Production from '@/components/C519_Production_Index'
import Quality from '@/components/C519_Quality_Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Production
    },
    {
      path: '/quality',
      component: Quality
    }
  ]
})
