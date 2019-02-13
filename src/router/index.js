import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Action from '@/components/Action'
import Comment from '@/components/Comment'
import Index from '@/components/Index'
import Main from '@/components/Main'

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
    },{
      path: '/:meetingId',
      component: Main,
      children:[{
        path:'',
        component: Comment
      },{
        path: 'comment',
        component: Comment
      },{
        path: 'action',
        component: Action
      }]
    }

    // todo: config not found view
  ],
  linkActiveClass:'active-route'
})
