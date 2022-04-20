import Vue from 'vue'
import Router from 'vue-router'

import  List from './components/List.vue'
import  Details from './components/Details.vue'
import  ItemView from './components/ItemView.vue'
import  Main from './components/Main.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {   
     path: '/',
      name: 'main',
      component: Main,
      props: true,
      children: [
        {
            path: '',
            name: 'list',
            component: List,
            props: true
        },
        {
        path: '/:id',
        name: 'details',
        component: Details,
        props: true
       },
       {
       path: '/:id/view',
       name: 'view',
       component: ItemView,
       props: true
   }]
    },
    
  ]
})

export default router