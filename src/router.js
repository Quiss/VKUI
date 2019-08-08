import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/root',
      name: 'root',
      component: () => import(/* webpackChunkName: "about" */ './views/Root.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import(/* webpackChunkName: "about" */ './views/Forms.vue')
    },
    {
      path: '/views',
      name: 'views',
      component: () => import(/* webpackChunkName: "about" */ './views/Views.vue')
    },
    {
      path: '/panel-header',
      name: 'panel-header',
      component: () => import(/* webpackChunkName: "about" */ './views/PanelHeader.vue')
    },
    {
      path: '/header-button',
      name: 'header-button',
      component: () => import(/* webpackChunkName: "about" */ './views/HeaderButton.vue')
    },
    {
      path: '/header-context',
      name: 'header-context',
      component: () => import(/* webpackChunkName: "about" */ './views/HeaderContext.vue')
    },
    {
      path: '/panel-header-content',
      name: 'panel-header-content',
      component: () => import(/* webpackChunkName: "about" */ './views/PanelHeaderContent.vue')
    },
    {
      path: '/epic',
      name: 'epic',
      component: () => import(/* webpackChunkName: "about" */ './views/Epic.vue')
    },
    {
      path: '/',
      name: '',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    }
  ]
})
