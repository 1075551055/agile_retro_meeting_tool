import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Action from '@/components/Action'
import Comment from '@/components/Comment'
import Index from '@/components/Index'
import Main from '@/components/Main'
import axiosUtil from '@/axios'

Vue.use(Router)

export default new Router({
  routes: [
    // HeaderTab layout route config
    // {
    //   // route nest naming route-view
    //   path: '/',
    //   // will meet some warning about child route if after config children routes. 
    //   // Because config "name", the router will contains a default child route, but will render our conig children routes
    //   // name: 'HeaderTab',
    //   component: HeaderTab,
    //   children:[{
    //     // config "/" or "" is ok
    //     path: '',
    //     components: {
    //       'comment': Comment,
    //       'action': Action
    //     }
    //   }]
    // }

    // HeaderNav naming router layout route config
    // {
    //   path: '/',
    //   components:{
    //     'headernav': HeaderNav,
    //     'comment': Comment
    //   }
    // }

    // {
    //   path: '/',
    //   redirect: '/comment'
    // },
    // {
    //   path: '/comment',
    //   component: Comment
    // },{
    //   path: '/action',
    //   component: Action
    // }

    {
      path: '/',
      component: Index
    }, {
      path: '/main',
      component: Main,
      children: [{
        path: '',
        component: Comment
      }, {
        path: 'comment/:meetingId',
        name: 'comment',
        component: Comment
      }, {
        path: 'action/:meetingId',
        name: 'action',
        component: Action
      }],
      // todo: when change comment & action need to detect
      beforeEnter: (to, from, next) => {
        axiosUtil(this.a.app).validateMeetingId(to.params.meetingId).then(response => {
          if (response.data.existing == -1) {
            next({ name: '404' })
          } 
          next()
        })
      }
    }, {
      path: '/404',
      name: '404',
      component: () => import('@/components/404.vue')
    }, {
      path: '*',
      redirect: '/404'
    }
  ],
  linkActiveClass: 'active-route'
})
