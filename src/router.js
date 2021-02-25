import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'SDWAN海外加速器',
              page: route.path,
            }
          },
        },
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'About',
              page: route.path,
            }
          },
        },
      },
    },
    {
      path: '/sass',
      name: 'sass',
      component: () => import(/* webpackChunkName: "sass" */ './views/Sass.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Sass',
              page: route.path,
            }
          },
        },
      },
    },
    {
      path: '/ecommerce',
      name: 'ecommerce',
      component: () => import(/* webpackChunkName: "ecommerce" */ './views/Ecommerce.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Ecommerce',
              page: route.path,
            }
          },
        },
      },
    },
    {
      path: '/more',
      name: 'more',
      component: () => import(/* webpackChunkName: "more" */ './views/More.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'More',
              page: route.path,
            }
          },
        },
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
      meta: {
        analytics: {
          pageviewTemplate(route) {
            return {
              title: 'Contact',
              page: route.path,
            }
          },
        },
      },
    }
  ],
})
