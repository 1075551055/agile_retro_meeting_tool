import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HeaderTab from '@/components/HeaderTab'
import Action from '@/components/Action'
import Comment from '@/components/Comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // route nest naming route-view
      path: '/',
      // will meet some warning about child route if after config children routes. 
      // Because config "name", the router will contains a default child route, but will render our conig children routes
      // name: 'HeaderTab',
      component: HeaderTab,
      children:[{
        // config "/" or "" is ok
        path: '',
        components: {
          'comment': Comment,
          // 'commentHeader': CommentHeader,
          // 'commentContent': CommentContent,
          'action': Action
        }
      }]
    }

  ]
})
